import PlayerImage from "../../assets/images/funfact-image.jpg";

const VideoPlayer = () => {
  return (
    <section className="bg-white lg:py-24 py-15">
      <div className="mx-auto max-w-[1500px] sm:px-5 px-2">
        <div className="grid grid-cols-1 overflow-hidden rounded-[30px] bg-black lg:rounded-[50px] xl:grid-cols-[minmax(400px,_1fr)_1.5fr] xxl:grid-cols-[1fr_minmax(800px,_1fr)]">
          {/* Image and Button */}
          <div className="relative overflow-hidden rounded-[30px] lg:rounded-[50px]">
            <img
              src={PlayerImage}
              alt="funfact"
              className="h-80 w-full object-cover object-center lg:h-[35rem] xl:h-full"
            />
            <button className="absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2">
              <div className="relative flex h-[120px] w-[120px] items-center justify-center rounded-full border-[3px] border-black text-lg font-bold backdrop-blur-[2px] transition-all duration-300 hover:bg-red-500 hover:text-white">
                Play
                <div className="absolute -z-[1] h-[110%] w-[110%] animate-ping rounded-full bg-gray-600 opacity-30"></div>
              </div>
            </button>
          </div>

          {/* Text Content */}
          <div className="self-center px-6 py-16 sm:py-20 md:px-16 xl:px-10 xl:py-24 xxl:py-32 xxl:pl-16 xxl:pr-28">
            <div className="mb-8 lg:mb-16 xl:mb-6">
              <h2 className="text-white text-[36px] leading-[40px] lg:text-4xl font-bold font-secondary lg:text-[80px] lg:leading-20 ">
                AI-powered that streamline tasks
              </h2>
            </div>
            <div className="text-left text-lg leading-[1.4] text-white lg:text-[21px] font-primary lg:max-w-xl">
              <p className="mb-7">
                As your business grows or your AI SaaS needs change, you can
                easily adjust your subscription level to match those needs. This
                flexibility ensures that AI remains an asset.
              </p>
            </div>
            <div className="my-14 h-[1px] w-full bg-neutral-800" />
            <ul className="flex flex-col justify-center gap-x-11 gap-y-8 text-center sm:flex-row md:text-left xl:justify-normal xxl:gap-x-20">
              <li>
                <h3 className="text-5xl text-[#fe330a] md:text-6xl lg:text-8xl xxl:text-[120px] font-bold font-secondary">
                  92%
                </h3>
                <span className="block text-lg text-white lg:text-[21px] font-primary">
                  Customer service inquiries
                </span>
              </li>
              <li>
                <h3 className="text-5xl text-[#fe330a] md:text-6xl lg:text-8xl xxl:text-[120px] font-bold font-secondary">
                  75%
                </h3>
                <span className="block text-lg text-white lg:text-[21px] font-primary">
                  Using financial institutions
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default VideoPlayer;
