import BlogOne from "../../assets/images/blog1.jpg";
import BlogInnerImage from "../../assets/images/blog-inner-image.jpg";
import LikeSvg from "../../assets/icons/like.svg";
import CommentSvg from "../../assets/icons/comment.svg";
import ShareSvg from "../../assets/icons/share.svg";
import DownloadSvg from "../../assets/icons/download.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatonVariants from "./AnimatonVariants";
const BlogArticle = () => {
  return (
    <article className="overflow-hidden bg-white">
      <div className="mb-7 block overflow-hidden rounded-[10px]">
        <AnimatonVariants>
          <img
            src={BlogOne}
            alt="blog-main-1"
            width={856}
            height={540}
            className="h-auto w-full scale-100 object-cover"
          />
        </AnimatonVariants>
      </div>
      <ul className="flex flex-wrap items-center gap-6 text-lg font-primary ">
        <li className="relative font-semibold after:absolute after:left-full after:top-1/2 after:h-[7px] after:w-[7px] after:-translate-y-1/2 after:translate-x-2 after:rounded-full after:bg-colorCodGray last:after:hidden">
          <Link
            to="#"
            className="hover:text-colorOrangyRed"
            href="/blog-details"
          >
            Business
          </Link>
        </li>
        <li className="relative font-semibold after:absolute after:left-full after:top-1/2 after:h-[7px] after:w-[7px] after:-translate-y-1/2 after:translate-x-2 after:rounded-full after:bg-colorCodGray last:after:hidden">
          <Link
            to="#"
            className="hover:text-colorOrangyRed"
            href="/blog-details"
          >
            June 12, 2024
          </Link>
        </li>
      </ul>
      <h5 className="mb-3 mt-5 text-2xl font-secondary tracking-tighter font-bold">
        10 ways to supercharge your startup with AI integration: unlock
        exponential growth
      </h5>
      <p className="mb-7 last:mb-0 text-xl font-primary text-primary">
        The rapid advancements in AI have paved the way for startups to
        revolutionize their businesses. This article explores 10 key ways AI can
        be integrated into startups and provides real-world examples of its
        tangible impact across industries.
      </p>
      <ul className="mb-7 flex flex-col gap-7 last:mb-0">
        <li>
          <div className="font-semibold text-lg font-primary text-primary">
            1. AI-Powered Customer Support
          </div>
          <p className="mb-7 last:mb-0 text-xl font-primary text-primary">
            AI chatbots and virtual assistants can handle routine queries,
            troubleshoot issues, and guide users, improving response times. This
            frees up human agents to tackle complex tasks, enhancing user
            experience.
          </p>
        </li>
        <li>
          <div className="font-semibold text-lg font-primary text-primary">
            2. Predictive Maintenance
          </div>
          <p className="mb-7 last:mb-0 text-xl font-primary text-primary">
            By analyzing usage patterns, ML algorithms can predict failures,
            enabling proactive maintenance and minimizing downtime.
          </p>
        </li>
        <li>
          <div className="font-semibold text-lg font-primary text-primary">
            3. Enhanced Cybersecurity
          </div>
          <p className="mb-7 last:mb-0 text-xl font-primary text-primary">
            AI anomaly detection, behavior analysis, and intrusion prevention
            boost security and data protection. This safeguards infrastructure
            and builds user trust.
          </p>
        </li>
        <li>
          <div className="overflow-hidden rounded-[10px]">
            <img
              src={BlogInnerImage}
              alt="blog-inner-image"
              width={100}
              height={100}
              className="h-auto w-full"
            />
          </div>
        </li>
        <li>
          <div className="font-semibold text-lg font-primary text-primary">
            4. Personalized User Experiences
          </div>
          <p className="mb-7 last:mb-0 text-xl font-primary text-primary">
            By analyzing behavior and preferences, AI tailors interfaces and
            features. This improves satisfaction and encourages retention.
          </p>
        </li>
        <li>
          <div className="font-semibold text-lg font-primary text-primary">
            5. Automated Workflows
          </div>
          <p className="mb-7 last:mb-0 text-xl font-primary text-primary">
            Automating tasks like software updates and license management with
            AI reduces manual efforts and minimizes errors.
          </p>
        </li>
      </ul>
      <div className="font-semibold text-lg font-primary text-primary">
        Key Takeaways for Founders
      </div>
      <ul className="mb-7 last:mb-0">
        <li className="relative pl-[30px] after:absolute after:left-[10px] after:top-3 after:h-[5px] after:w-[5px] after:rounded-[50%] after:bg-black text-primary text-lg font-primary">
          Start with chatbot, workflow automation, and basic analytics.
        </li>
        <li className="relative pl-[30px] after:absolute after:left-[10px] after:top-3 after:h-[5px] after:w-[5px] after:rounded-[50%] after:bg-black text-primary text-lg font-primary">
          Gradually scale AI adoption as the business matures.
        </li>
        <li className="relative pl-[30px] after:absolute after:left-[10px] after:top-3 after:h-[5px] after:w-[5px] after:rounded-[50%] after:bg-black text-primary text-lg font-primary">
          Identify the right AI use cases to solve pressing needs.
        </li>
        <li className="relative pl-[30px] after:absolute after:left-[10px] after:top-3 after:h-[5px] after:w-[5px] after:rounded-[50%] after:bg-black text-primary text-lg font-primary">
          Integrate AI into workflows and processes seamlessly.
        </li>
        <li className="relative pl-[30px] after:absolute after:left-[10px] after:top-3 after:h-[5px] after:w-[5px] after:rounded-[50%] after:bg-black text-primary text-lg font-primary">
          Get creative — leverage partnerships and talent from outside.
        </li>
      </ul>
      <p className="mb-7 last:mb-0 text-lg font-primary text-primary">
        The key to startup success is focusing AI efforts on the applications
        that will differentiate your business and have the biggest impact at
        each stage of growth. With the right strategy, AI can unlock
        transformation opportunities and exponential value creation.
      </p>
      <p className="mb-7 last:mb-0 text-lg font-primary text-primary">
        Thanks for reading 🖤
      </p>
      <AnimatonVariants>
        <div className="flex justify-between text-lg font-medium">
          <div className="flex gap-7 cursor-pointer">
            <div className="flex items-center gap-2">
              <img src={LikeSvg} alt="" />
              <span>200</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={CommentSvg} alt="" />
              <span>15</span>
            </div>
          </div>
          <div className="flex gap-3 cursor-pointer">
            <div className="flex items-center gap-2">
              <img src={ShareSvg} alt="" />
            </div>
            <div className="flex items-center gap-2">
              <img src={DownloadSvg} alt="" />
            </div>
          </div>
        </div>
      </AnimatonVariants>
      <div className="my-[50px] h-[1px] w-full bg-[#EAEDF0]"></div>
      {/* prev next  */}
      <AnimatonVariants>
        <div className="flex flex-col justify-between md:flex-row md:gap-x-10 xl:gap-x-24 xxl:gap-x-[196px]">
          <Link class="group text-left" to="/blogdetails">
            <span class="inline-flex items-center gap-x-3 text-[21px] transition-all duration-300 group-hover:text-red-500 font-extrabold font-primary">
              <ChevronLeft />
              Previous post
            </span>
            <div className="lg:max-w-xl mx-auto">
              <p className="text-lg font-primary text-primary">
                Amazon testing AI tools to improve product descriptions: a
                game-changer
              </p>{" "}
            </div>
          </Link>
          <Link className="group text-right" to="/blog-details">
            <span className="inline-flex flex-row-reverse items-center gap-x-3 text-[21px] transition-all duration-300 group-hover:text-red-500 font-extrabold font-primary">
              <ChevronRight />
              Next post
            </span>
            <p className="text-lg font-primary text-primary">
              3 best AI businesses to make money with in 2024 everyone is
              buzzing
            </p>
          </Link>
        </div>
      </AnimatonVariants>
    </article>
  );
};
export default BlogArticle;
