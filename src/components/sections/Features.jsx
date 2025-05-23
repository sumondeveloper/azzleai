import { FeaturesItems } from "../../utils/constants";
import FeatureCard from "../cards/FeatureCard";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";

const Features = () => {
  return (
    <section className="py-20 bg-white font-secondary">
      <MaxWidthWrapper>
        <div className="lg:max-w-2xl">
          <h2 className="text-primary text-[36px] leading-[40px]  font-bold lg:text-[72px] lg:leading-[80px] font-secondary">
            Core features that make it valuable
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-xl border-2 border-black">
          {FeaturesItems.map((feature) => (
            <FeatureCard feature={feature} key={feature.title} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
export default Features;
