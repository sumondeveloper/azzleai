import { Link } from "react-router-dom";
import ServiceAccordionCard from "../cards/ServiceAccordionCard";
import Button from "../shared/Button";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
const ServiceFaqsSection = () => {
  return (
    <section>
      <div className="pb-20 xl:pb-[150px] py-15 lg:py-30">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2">
            <div className="flex flex-col">
              <div className="mb-6 lg:max-w-4xl">
                <h2 className="text-[35px] leading-10 font-bold text-primary font-secondary lg:text-[70px] lg:leading-[80px]">
                  Freely ask us for more information
                </h2>
              </div>
              <div className="text-lg leading-[1.4] lg:text-[21px]">
                <p className="mb-7 text-lg font-primary">
                  Our AI SaaS solutions can be quickly deployed, enabling users
                  to start benefiting from AI capabilities without lengthy setup
                  and development times in fast-paced industries.
                </p>
                <Link to="/contact" className="button mt-5">
                  <Button className="bg-black text-white py-4 font-secondary text-lg">
                    Ask your questions
                  </Button>
                </Link>
              </div>
            </div>

            <ServiceAccordionCard />
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};
export default ServiceFaqsSection;
