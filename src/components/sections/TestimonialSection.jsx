import { testimonials } from "../../utils/constants";
import TestimonialCard from "../cards/TestimonialCard";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";

const TestimonialSection = () => {
  return (
    <section className="bg-black text-white lg:py-40 py-20 ">
      <MaxWidthWrapper>
        <div className="lg:max-w-3xl mx-auto">
          <h2 className="text-white text-[36px] leading-[36px] font-semibold tracking-tighter text-center lg:text-[80px] lg:leading-[80px] lg:font-bold lg:mt-10">
            Positive feedback from our users
          </h2>{" "}
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:mt-15 lg:gap-7">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
export default TestimonialSection;
