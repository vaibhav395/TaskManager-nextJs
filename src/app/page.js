import BannerSection from '@/components/homepage/banner'
import FeatureSection from '@/components/homepage/features'
import ActionSection from '@/components/homepage/action'
import TestimonialSection from '@/components/homepage/testimonials';
import ContactForm from '@/components/homepage/contact';
export const metadata = {
  title : "Home : Work-manager",
}
export default function Home() {
  return (
    <div>
      {/* Banner section */}
      <BannerSection/>

      {/* Feature section */}
      <FeatureSection/>

      {/* Action section */}
      <ActionSection/>

      {/* Testimonials section */}
      <TestimonialSection/>

      {/* Contact section */}
      <ContactForm/>
    </div>
  )
}
