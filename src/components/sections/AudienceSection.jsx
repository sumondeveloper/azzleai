import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import ContentImageOne from "../../assets/images/content-image1.webp";
import ContentImageTwo from "../../assets/images/content-image2.jpg";
import check from "../../assets/icons/check.svg";
import AnimatonVariants from "../shared/AnimatonVariants";

const AudienceSection = () => {
  return (
    <section className="bg-white py-5 text-primary overflow-hidden">
      <MaxWidthWrapper>
        {/* Top Section */}

        <div className="flex flex-col justify-between sm:flex-row items-center lg:gap-30 sm:gap-20">
          <AnimatonVariants animation="fade-right" delay={0.7} duration={0.7}>
            <img
              src={ContentImageOne}
              alt=""
              className="lg:w-[1000px] sm:w-[1400px] h-auto object-cover"
            />
          </AnimatonVariants>

          <AnimatonVariants
            animation="fade-left"
            delay={0.7}
            duration={0.7}
            className=""
          >
            <div>
              <h2 className="text-[36px] font-secondary font-semibold leading-[40px] tracking-tight lg:text-[80px] lg:leading-[80px] lg:tracking-normal sm:font-bold sm:leading-10 mt-10 mb-5">
                Accessible to a wider audience
              </h2>
              <p className="font-primary text-base lg:text-lg mt-4">
                Advanced AI capabilities accessible to a broader audience,
                including small & medium-sized businesses and individuals who
                may not have the resources or expertise to develop.
              </p>
              <p className="font-primary text-base lg:text-lg mt-4">
                Advanced AI capabilities accessible to a broader audience,
                including small & medium-sized businesses and individuals who
                may not have the resources or expertise to develop.
              </p>
            </div>
          </AnimatonVariants>
        </div>

        {/* Bottom Section */}
        <div className="mt-15 flex flex-col sm:flex-row sm:justify-between items-center sm:mt-20 sm:gap-8 lg:gap-30">
          <AnimatonVariants animation="fade-left" delay={0.5} duration={0.7}>
            <div>
              <h2 className="text-[36px] font-secondary font-semibold leading-[40px] tracking-tight lg:text-[80px] lg:leading-[80px] lg:tracking-normal sm:font-bold sm:leading-10 ">
                Providing quick deploy solutions
              </h2>
              <div className="lg:max-w-xl sm:max-w-md">
                <p className="font-primary text-base lg:text-lg mt-4">
                  Our AI SaaS solutions can be quickly deployed, enabling users
                  to start benefiting from AI capabilities without lengthy setup
                  and development times in fast-paced industries.
                </p>
              </div>
              <div className="flex flex-col gap-y-4 mt-5">
                {[
                  "Ready-to-use AI capabilities system",
                  "Users can quickly integrate AI features",
                  "Time savings translate to cost savings",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center text-xl lg:text-2xl font-secondary font-bold tracking-tight gap-2"
                  >
                    <img src={check} alt="" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatonVariants>

          <AnimatonVariants
            animation="fade-right"
            delay={0.5}
            duration={0.7}
            className="mt-12"
          >
            <img
              src={ContentImageTwo}
              alt=""
              className="lg:w-[1000px] h-auto object-cover"
            />
          </AnimatonVariants>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default AudienceSection;
