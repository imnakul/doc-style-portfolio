import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nakul Srivastava — Product & Frontend Engineer",
  description: "Portfolio of Nakul Srivastava — Product-focused Frontend Engineer, UI/UX Designer, and AI Systems Builder.",
  keywords: ["Nakul Srivastava", "Frontend Engineer", "UI/UX Designer", "Next.js", "TypeScript", "AI Engineer"],
  icons: {
    icon: [
      {
        url: "/logo-darkmode.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo-lightmode.png",
        media: "(prefers-color-scheme: light)",
      },
    ],
    shortcut: "/logo-darkmode.png",
    apple: "/logo-darkmode.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${dmSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('theme');
                  const supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const theme = stored || (supportDarkMode ? 'dark' : 'dark');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] antialiased selection:bg-[var(--accent)] selection:text-[var(--accent-fg)]">
        {children}
      </body>
    </html>
  );
}
