import ServiceFaqsSection from "../components/sections/ServiceFaqsSection";

import ServiceCard from "../components/cards/ServiceCard";
import MaxWidthWrapper from "../components/shared/MaxWidthWrapper";
import PageNavbar from "../components/shared/PageNavbar";
import { services } from "../utils/constants";
import TestimonialSection from "../components/sections/TestimonialSection";

const Services = () => {
  return (
    <>
      <PageNavbar pages="Our Services" page="Services" />
      <section className="lg:py-20 py-4 bg-white font-secondary">
        <MaxWidthWrapper>
          <div className="lg:max-w-3xl mx-auto max-w-sm">
            <h2 className="text-primary text-[36px] leading-[40px]  font-bold lg:text-[80px] lg:leading-[80px] font-secondary">
              We provide smart AI solutions for all tasks
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-lg border-2 border-black lg:mt-20">
            {services.map((feature) => (
              <ServiceCard feature={feature} key={feature.title} />
            ))}
          </div>
          <ServiceFaqsSection />
        </MaxWidthWrapper>
        <TestimonialSection />
      </section>
    </>
  );
};
export default Services;
