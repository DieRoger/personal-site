import HeroSection from '@/components/home/HeroSection'
import FeaturedSkills from '@/components/home/FeaturedSkills'
import FeaturedProject from '@/components/home/FeaturedProject'
import LatestBlog from '@/components/home/LatestBlog'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedSkills />
      <FeaturedProject />
      <LatestBlog />
    </>
  )
}
