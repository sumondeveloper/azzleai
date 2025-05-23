import Button from "../shared/Button";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import Banner from "../../assets/images/banner.webp";
import LogoTicker from "./LogoTicker";

const HeroSection = () => {
  return (
    <section className="py-20 relative overflow-clip rounded-b-[50px]">
      <div class="orange-gradient-1 absolute -right-[150px] top-[370px] -z-[1] h-[500px] w-[500px]  rounded-[500px]"></div>
      <div class="orange-gradient-2 absolute right-[57px] top-[620px] -z-[1] h-[450px] w-[450px] rounded-[450px]"></div>
      <MaxWidthWrapper className="lg:px-8">
        <h1 className="text-[48px] text-center font-bold tracking-tight font-secondary leading-[48px] lg:text-[120px] lg:leading-[120px] sm:text-7xl sm:leading-[70px]">
          Simplify your SaaS solution with AI
        </h1>
        <div className="sm:max-w-4xl mx-auto">
          <p className="text-center text-primary font-secondary tracking-tight mt-5 font-medium text-xl md:font-semibold">
            Our AI SAAS tool is a cloud-based software delivery model. It helps
            businesses forecast demand for products and services and optimize
            inventory management and supply chain operations.
          </p>
        </div>
        <div className="flex items-center flex-col gap-4 mt-6 sm:flex-row justify-center lg:mt-10">
          <a href="">
            <Button className=" bg-black text-white text-lg py-4 border-none font-semibold font-primary">
              Get started for free
            </Button>
          </a>
          <a href="">
            <Button className="px-5 py-4 font-primary">Learn more</Button>
          </a>
        </div>
        <div className="mt-15">
          <img
            src={Banner}
            alt=""
            height={640}
            className="h-auto w-full rounded-2xl lg:rounded-4xl sm:w-full"
          />
        </div>
        <div class="my-10 h-[1px] w-full bg-[#DBD6CF] lg:my-16 xl:my-20"></div>
        <p className="sm:text-sm text-xl font-primary text-center text-primary md:text-lg">
          Companies of all sizes trust us to find AI SaaS critical to their
          growth and innovation
        </p>
        <LogoTicker />
      </MaxWidthWrapper>
    </section>
  );
};
export default HeroSection;
