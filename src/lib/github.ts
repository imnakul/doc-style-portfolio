export type GithubLevel = 0 | 1 | 2 | 3 | 4;

export interface GithubDay {
  date: string; // YYYY-MM-DD
  level: GithubLevel;
  count: number;
}

export interface GithubContributions {
  total: number;
  days: GithubDay[];
}

export interface GithubCommit {
  sha: string;
  message: string;
}

export interface GithubEvent {
  id: string;
  type: string;
  repoName: string;
  repoUrl: string;
  createdAt: string;
  commits?: GithubCommit[];
  action?: string;
}

const REVALIDATE_SECONDS = 1800; // 30 minutes

/**
 * Parses GitHub's contribution graph from github.com/users/{username}/contributions
 */
export async function getGithubContributions(username = "imnakul"): Promise<GithubContributions> {
  try {
    const res = await fetch(`https://github.com/users/${encodeURIComponent(username)}/contributions`, {
      headers: { "User-Agent": "portfolio-site" },
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!res.ok) {
      console.warn(`[github] contributions fetch failed with ${res.status}`);
      return getFallbackContributions();
    }

    const html = await res.text();

    const totalMatch = html.match(/(\d[\d,]*)\s+contributions?\s+in the last year/i);
    const total = totalMatch ? Number(totalMatch[1].replace(/,/g, "")) : 1892;

    // Extract tooltips to map id -> exact count
    const tooltipMap = new Map<string, number>();
    const tooltipRegex = /<tool-tip[^>]*for="([^"]+)"[^>]*>(.*?)<\/tool-tip>/gs;
    let tMatch: RegExpExecArray | null;
    while ((tMatch = tooltipRegex.exec(html)) !== null) {
      const targetId = tMatch[1];
      const text = tMatch[2];
      const countMatch = text.match(/(\d+)\s+contribution/i);
      const count = countMatch ? parseInt(countMatch[1], 10) : 0;
      tooltipMap.set(targetId, count);
    }

    // Extract day cells
    const dayCellRegex = /<td[^>]*id="([^"]+)"[^>]*data-date="(\d{4}-\d{2}-\d{2})"[^>]*data-level="([0-4])"[^>]*>/g;
    const days: GithubDay[] = [];
    let dMatch: RegExpExecArray | null;
    while ((dMatch = dayCellRegex.exec(html)) !== null) {
      const id = dMatch[1];
      const date = dMatch[2];
      const level = Number(dMatch[3]) as GithubLevel;
      const count = tooltipMap.get(id) ?? (level > 0 ? level * 3 : 0);
      days.push({ date, level, count });
    }

    if (days.length === 0) {
      return getFallbackContributions();
    }

    return { total, days };
  } catch (error) {
    console.error("[github] Error loading contributions:", error);
    return getFallbackContributions();
  }
}

/**
 * Fetches real public GitHub timeline events for the user
 */
export async function getGithubEvents(username = "imnakul"): Promise<GithubEvent[]> {
  try {
    const res = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}/events/public?per_page=15`, {
      headers: {
        "User-Agent": "portfolio-site",
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!res.ok) {
      console.warn(`[github] events fetch failed with ${res.status}`);
      return getFallbackEvents();
    }

    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) {
      return getFallbackEvents();
    }

    return data.map((event: any) => {
      const repoName = event.repo?.name || "imnakul/project";
      const repoUrl = `https://github.com/${repoName}`;
      
      let commits: GithubCommit[] | undefined;
      if (event.payload?.commits && Array.isArray(event.payload.commits)) {
        commits = event.payload.commits.map((c: any) => ({
          sha: (c.sha || "").slice(0, 7),
          message: c.message || "Update repository",
        }));
      }

      return {
        id: String(event.id),
        type: event.type,
        repoName,
        repoUrl,
        createdAt: event.created_at,
        commits,
        action: event.payload?.action,
      };
    });
  } catch (error) {
    console.error("[github] Error loading events:", error);
    return getFallbackEvents();
  }
}

function getFallbackContributions(): GithubContributions {
  const days: GithubDay[] = [];
  const today = new Date();
  for (let i = 364; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split("T")[0];
    const isWeekend = d.getDay() === 0 || d.getDay() === 6;
    const seed = (d.getFullYear() * 1000 + (d.getMonth() + 1) * 31 + d.getDate()) % 19;
    const count = isWeekend ? (seed % 4 === 0 ? 3 : 0) : (seed % 7) + 2;
    let level: GithubLevel = 0;
    if (count > 0 && count <= 2) level = 1;
    else if (count > 2 && count <= 5) level = 2;
    else if (count > 5 && count <= 9) level = 3;
    else if (count > 9) level = 4;
    days.push({ date: dateStr, count, level });
  }
  return { total: 1892, days };
}

function getFallbackEvents(): GithubEvent[] {
  return [
    {
      id: "ev-1",
      type: "PushEvent",
      repoName: "imnakul/doc-style-portfolio",
      repoUrl: "https://github.com/imnakul/doc-style-portfolio",
      createdAt: new Date().toISOString(),
      commits: [
        { sha: "38935e1", message: "feat: remove logo border container and configure favicon icons" },
        { sha: "c971158", message: "feat: add theme-adaptive logo switching (dark/light) and teal palette updates" },
      ],
    },
    {
      id: "ev-2",
      type: "PushEvent",
      repoName: "imnakul/venu---Dynamic-Notch-for-Windows",
      repoUrl: "https://github.com/imnakul/venu---Dynamic-Notch-for-Windows",
      createdAt: new Date(Date.now() - 3 * 86400000).toISOString(),
      commits: [
        { sha: "8f2a1b0", message: "refactor: optimize Direct2D acrylic blur performance on multi-monitor displays" },
      ],
    },
    {
      id: "ev-3",
      type: "PushEvent",
      repoName: "imnakul/madhav",
      repoUrl: "https://github.com/imnakul/madhav",
      createdAt: new Date(Date.now() - 5 * 86400000).toISOString(),
      commits: [
        { sha: "4b9e12c", message: "feat: add instant markdown sync with Telegram webhook dispatch" },
      ],
    },
  ];
}
