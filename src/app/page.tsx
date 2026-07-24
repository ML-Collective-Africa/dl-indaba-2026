import { HeroSection } from "@/components/home/HeroSection";
import { AbstractSection } from "@/components/home/AbstractSection";
import { TopicsSection } from "@/components/home/TopicsSection";
import { ActivitiesSection } from "@/components/home/ActivitiesSection";
import { WorkshopChallengeSection } from "@/components/home/WorkshopChallengeSection";
import { ReferencesSection } from "@/components/home/ReferencesSection";
import { SponsorsSection } from "@/components/home/SponsorsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AbstractSection />
      <TopicsSection />
      <ActivitiesSection />
      <WorkshopChallengeSection />
      <ReferencesSection />
      <SponsorsSection />
    </>
  );
}
