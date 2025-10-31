import AboutCare from '@/components/sections/AboutCare'
import AboutFeatures from '@/components/sections/AboutFeatures'
import Hero from '@/components/ui/Hero'

const AboutPage = () => {
  return (
    <>
      <Hero title="About Us" text="We are a team of passionate writers and illustrators dedicated to helping authors bring their books to life." />
      <AboutFeatures />
      <AboutCare />
    </>
  )
}

export default AboutPage
