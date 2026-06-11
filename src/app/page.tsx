import { HeroSection } from "@/components/home/HeroSection";
import { AbstractSection } from "@/components/home/AbstractSection";
import { TopicsSection } from "@/components/home/TopicsSection";
import { ActivitiesSection } from "@/components/home/ActivitiesSection";
import { WorkshopChallengeSection } from "@/components/home/WorkshopChallengeSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AbstractSection />
      <TopicsSection />
      <ActivitiesSection />
      <WorkshopChallengeSection />
    </>
  );
}
