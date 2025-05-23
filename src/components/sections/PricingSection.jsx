import { useState } from "react";
import PricingCard from "../cards/PricingCard";
import { monthlyPlans, annuallyPlans } from "../../utils/constants";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";

const PricingSection = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const plans = isMonthly ? monthlyPlans : annuallyPlans;

  return (
    <section className=" bg-white lg:py-24 py-15">
      <MaxWidthWrapper>
        <div>
          <div className="lg:max-w-3xl sm:max-w-[364px] mx-auto">
            <h2 className="text-[36px] font-secondary leading-10 text-primary font-bold text-center lg:text-[80px] lg:leading-[90px]">
              Cost-effectively build any software
            </h2>
          </div>
          {/* Toggle */}
          <div className="container mx-auto font-primary mt-10">
            <div className="flex justify-center">
              <div className="inline-flex space-x-2 rounded-full border-2 border-black font-semibold">
                <button
                  className={`px-8 py-3 text-lg rounded-full transition-all duration-300 ${
                    isMonthly
                      ? "bg-black text-white"
                      : "bg-transparent text-black hover:bg-gray-100"
                  }`}
                  onClick={() => setIsMonthly(true)}
                >
                  Monthly
                </button>
                <button
                  className={`px-8 py-3 text-lg rounded-full transition-all duration-300 ${
                    !isMonthly
                      ? "bg-black text-white"
                      : "bg-transparent text-black hover:bg-gray-100"
                  }`}
                  onClick={() => setIsMonthly(false)}
                >
                  Annually
                </button>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="mt-12 lg:mt-16 xl:mt-20">
              <ul className=" grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {plans.map((plan, idx) => (
                  <PricingCard key={idx} plan={plan} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default PricingSection;
