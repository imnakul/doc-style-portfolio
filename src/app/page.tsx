import { SidebarNav } from "@/components/sidebar-nav";
import { HeroSection } from "@/components/hero-section";
import { ActivitySection } from "@/components/activity-section";
import { DevelopSection } from "@/components/develop-section";
import { CraftSection } from "@/components/craft-section";
import { WritesSection } from "@/components/writes-section";
import { CapabilitiesSection } from "@/components/capabilities-section";
import { ContactSection } from "@/components/contact-section";

export default function Home(): React.ReactNode {
  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)]">
      {/* 2-Column IDE / Documentation Layout */}
      <div className="mx-auto flex max-w-[1440px] flex-col lg:flex-row">
        {/* Left Navigation Sidebar */}
        <SidebarNav />

        {/* Main Content Area */}
        <main className="flex-1 overflow-x-hidden px-4 py-6 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <div className="mx-auto max-w-[972px] space-y-2">
            <HeroSection />
            <ActivitySection />
            <DevelopSection />
            <CraftSection />
            <WritesSection />
            <CapabilitiesSection />
            <ContactSection />
          </div>
        </main>
      </div>
    </div>
  );
}
