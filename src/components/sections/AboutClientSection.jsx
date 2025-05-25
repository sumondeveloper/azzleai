import AboutImageOne from "../../assets/images/abouthero.jpg";
import AboutImageTwo from "../../assets/images/aboutheroimage2.webp";
import { Link } from "react-router-dom";
import Button from "../shared/Button";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import AnimatonVariants from "../shared/AnimatonVariants";

const AboutClientSection = () => {
  return (
    <MaxWidthWrapper className="py-10">
      <AnimatonVariants animation="fade-up" delay={0.3}>
        <div className="sm:max-w-md mx-auto lg:max-w-5xl">
          <h3 className="text-[36px] font-secondary text-center leading-10 font-bold lg:text-[80px] lg:leading-[80px]">
            We are a trusted partner in our clients' AI journey
          </h3>
        </div>
      </AnimatonVariants>

      <AnimatonVariants animation="zoom" delay={0.5}>
        <img
          src={AboutImageOne}
          alt=""
          className="mt-10 lg:mt-15 rounded-xl sm:rounded-2xl"
        />
      </AnimatonVariants>

      <div className="grid grid-cols-1 text-center mt-20 lg:grid-cols-4 sm:grid-cols-2 lg:gap-5 gap-8">
        {[
          { value: "2K+", text: "Successful Implementations" },
          { value: "95%", text: "Client Satisfaction Rate" },
          { value: "40+", text: "Awards and Recognitions" },
          { value: "73+", text: "Growth and Expansion" },
        ].map((item, index) => (
          <AnimatonVariants
            key={index}
            animation="fade-up"
            delay={0.2 * (index + 1)}
          >
            <div>
              <h2 className="text-[48px] font-semibold font-secondary text-red-500 lg:text-[80px] lg:font-bold">
                {item.value}
              </h2>
              <p className="text-lg font-primary lg:-mt-3">{item.text}</p>
            </div>
          </AnimatonVariants>
        ))}
      </div>

      {/* second row */}
      <div className="mt-20 flex flex-col sm:flex-row gap-5 lg:gap-6 items-center justify-between">
        <div>
          <AnimatonVariants animation="fade-left" delay={0.3}>
            <h2 className="text-[36px] leading-10 font-bold font-secondary tracking-tight lg:text-[80px] lg:leading-[80px] lg:tracking-normal">
              Delivering the best solutions with AI
            </h2>
          </AnimatonVariants>

          <AnimatonVariants animation="fade-left" delay={0.4}>
            <p className="text-primary font-primary text-lg mt-5">
              Our mission is to empower businesses with AI-powered solutions
              that increase productivity, improve decision-making and drive
              growth.
            </p>
          </AnimatonVariants>

          <AnimatonVariants animation="fade-left" delay={0.5}>
            <p className="text-primary font-primary text-lg mt-5">
              Since 2016 we have been passionate about helping our clients
              harness With a team of AI experts and data scientists their full
              potential & stay competitive in an increasingly digital world.
            </p>
          </AnimatonVariants>

          <AnimatonVariants animation="fade-up" delay={0.6}>
            <div className="mt-5 sm:mt-10">
              <Link to="/contact">
                <Button className="bg-black text-white py-3">
                  Get in touch
                </Button>
              </Link>
            </div>
          </AnimatonVariants>
        </div>

        <AnimatonVariants animation="zoom" delay={0.5}>
          <img
            src={AboutImageTwo}
            alt=""
            className="lg:w-[1000px] rounded-xl mt-10 sm:w-[344px] "
          />
        </AnimatonVariants>
      </div>
    </MaxWidthWrapper>
  );
};

export default AboutClientSection;
