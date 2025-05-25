import { useParams } from "react-router-dom";
import { portfolioItems } from "../utils/constants";
import MaxWidthWrapper from "../components/shared/MaxWidthWrapper";
import PageNavbar from "../components/shared/PageNavbar";
import ArrowRightBlack from "../assets/icons/icon-black-long-arrow-right.svg";
import AboutContact from "../components/sections/AboutContact";
import { motion } from "motion/react";
import { fadeUpVariant } from "../utils/variants";

const PortfolioDetails = () => {
  const { id } = useParams();
  const project = portfolioItems.find((item) => item.id === id);

  if (!project) {
    return (
      <MaxWidthWrapper>
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-red-600">
            Project not found!
          </h2>
        </div>
      </MaxWidthWrapper>
    );
  }

  return (
    <>
      <PageNavbar pages="Portfolio Details" page={project.title} />

      <section className="pb-20 xl:pb-[150px]">
        <MaxWidthWrapper>
          {/* Title */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="mb-10 lg:mb-16 xl:mb-20 text-center sm:text-left sm:mr-35 lg:mr-80"
          >
            <div className="sm:max-w-xl lg:max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-[80px] lg:leading-[80px] font-secondary md:text-5xl font-bold text-primary tracking-tight lg:tracking-normal">
                {project.title}
              </h2>
            </div>
          </motion.div>

          {/* Main Image */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="h-80 w-full overflow-hidden rounded-[10px] lg:h-[550px] mb-14"
          >
            <img
              src={project.img}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Info List */}
          <motion.ul
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:flex lg:justify-between"
          >
            {[
              { label: "Client", value: project.client },
              { label: "Services", value: project.services },
              { label: "Duration", value: project.duration },
              {
                label: "Website",
                value: (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-extrabold font-primary text-primary tracking-tight hover:underline flex items-center gap-2"
                  >
                    Live Preview{" "}
                    <img
                      src={ArrowRightBlack}
                      alt="arrow"
                      className="w-10 h-auto"
                    />
                  </a>
                ),
              },
            ].map((item, index) => (
              <li key={index} className="flex flex-col gap-y-2 sm:gap-y-4">
                <span className="text-[21px] font-semibold leading-[1.4] text-[#7F8995] font-primary">
                  {item.label}:
                </span>
                <div className="text-2xl font-extrabold font-primary text-primary tracking-tight">
                  {item.value}
                </div>
              </li>
            ))}
          </motion.ul>

          {/* Divider */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            className="my-10 h-px w-full bg-gray-200"
          />

          {/* Overview */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 mb-16"
          >
            <div className="overflow-hidden rounded-md order-2 lg:order-1">
              <img
                src={project.img1}
                alt="overview"
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-4xl font-extrabold mb-4 text-primary font-secondary tracking-tight lg:text-[80px] lg:leading-[80px]">
                Project overview
              </h3>
              <div className="max-w-xs sm:max-w-lg">
                <h3 className="text-2xl font-extrabold mb-4 text-primary font-primary tracking-tight leading-8">
                  {project.overviewTitle}
                </h3>
              </div>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-5 sm:space-y-7 mt-8 max-w-[320px] sm:max-w-2.5xl lg:max-w-2xl">
                {project.overviewPoints.map((point, idx) => (
                  <motion.li
                    key={idx}
                    custom={idx + 5}
                    variants={fadeUpVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-lg font-primary text-primary"
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={10}
            className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2"
          >
            <div>
              <h3 className="text-4xl font-extrabold mb-4 text-primary font-secondary tracking-tight lg:text-[80px] lg:leading-[80px]">
                Project results
              </h3>
              <div className="max-w-xs sm:max-w-lg">
                <h3 className="text-2xl font-extrabold mb-4 text-primary font-primary tracking-tight leading-8">
                  {project.resultTitle}
                </h3>
              </div>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-5 mt-8 max-w-[320px] sm:space-y-7 sm:max-w-3xl">
                {project.resultPoints.map((point, idx) => (
                  <motion.li
                    key={idx}
                    custom={idx + 11}
                    variants={fadeUpVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-lg font-primary text-primary"
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-md mt-8">
              <img src={project.img2} alt="results" className="w-full h-auto" />
            </div>
          </motion.div>
        </MaxWidthWrapper>

        {/* AboutContact */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={20}
          className="mt-20"
        >
          <AboutContact />
        </motion.div>
      </section>
    </>
  );
};

export default PortfolioDetails;
