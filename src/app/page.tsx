import FeaturedCourses from "@/components/FeatureCourses";
import HeroSection from "@/components/HeroSection";
import MusicTestimonials from "@/components/MusicTestimonials";
import UpcomingWebinars from "@/components/Webinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Card } from "@/components/ui/card-hover-effect";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Instructors from "@/components/Instructors"
import Footer from "@/components/Footer"
export default function Home() {
  return (
<main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2] text-white">

  <HeroSection/>
  <FeaturedCourses/>
    <WhyChooseUs/>
    <MusicTestimonials/>
<UpcomingWebinars/>
<Instructors/>
<Footer/>
</main>

  );
}
