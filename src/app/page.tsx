import { HeroSection } from "@/components/home/HeroSection";
import { AbstractSection } from "@/components/home/AbstractSection";
import { TopicsSection } from "@/components/home/TopicsSection";
import { ActivitiesSection } from "@/components/home/ActivitiesSection";
import { ReferencesSection } from "@/components/home/ReferencesSection";
import { SponsorsSection } from "@/components/home/SponsorsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AbstractSection />
      <TopicsSection />
      <ActivitiesSection />
      <ReferencesSection />
      <SponsorsSection />
    </>
  );
}
