import CTASection from "../components/landing/CTASection";
import FeaturesSection from "../components/landing/FeaturesSection";

import HeroSection from "../components/landing/HeroSection";
import PricingSection from "../components/landing/PricingSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
//import features from data.js,features is a array of info
import { features, pricingPlans, testimonials } from "../assets/data";
import FooterSection from "../components/landing/FooterSection";

const Landing =() =>{
    return(
        <div className="landing-page bg-gradient-to-b from-gary-50 to-gray-100">  
         {/*hero section*/}
         <HeroSection/>
         {/*features section*/}
         <FeaturesSection features={features}/>
         {/*pricing section*/}
         <PricingSection pricingPlans={pricingPlans}/>
         {/*Testimonial section*/}
         <TestimonialsSection testimonials={testimonials}/>
         {/*CTA section*/}
         <CTASection/>
         {/*Footer*/}
          <FooterSection/>
        </div>
    )
}

export default Landing;