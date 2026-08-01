import HeroSection from '@/components/home/HeroSection'
import FeaturedSkills from '@/components/home/FeaturedSkills'
import FeaturedProject from '@/components/home/FeaturedProject'
import LatestInvestigations from '@/components/home/LatestInvestigations'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedSkills />
      <FeaturedProject />
      <LatestInvestigations />
    </>
  )
}
