import { useState } from "react";
import PlayerImage from "../../assets/images/funfact-image.jpg";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-white lg:py-24 py-15 relative ">
      {/* Gradient Background */}
      <div className="orange-gradient-1 absolute top-[400px] h-[400px] w-[250px] -rotate-[-9.022deg] rounded-[400px] z-2 hidden lg:block"></div>
      <div className="orange-gradient-1 absolute top-[300px] h-[600px] w-[250px] -rotate-[-9.022deg] rounded-[400px] z-2 hidden lg:block"></div>

      {/* Main Content */}
      <div className="mx-auto max-w-[1500px] sm:px-5 px-2 ">
        <div className="grid grid-cols-1 overflow-hidden rounded-[30px] bg-black lg:rounded-[50px] xl:grid-cols-[minmax(400px,_1fr)_1.5fr] xxl:grid-cols-[1fr_minmax(800px,_1fr)]">
          {/* Image and Button */}
          <div className="relative overflow-hidden rounded-[30px] lg:rounded-[50px]">
            <img
              src={PlayerImage}
              alt="funfact"
              className="h-80 w-full object-cover object-center lg:h-[35rem] xl:h-full relative z-10"
            />
            <button
              className="absolute left-1/2 top-1/2 z-[20] -translate-x-1/2 -translate-y-1/2"
              onClick={() => setIsPlaying(true)}
            >
              <div className="relative flex h-[120px] w-[120px] items-center justify-center rounded-full border-[3px] border-black text-lg font-bold backdrop-blur-[2px] transition-all duration-300 hover:bg-red-500 hover:text-white">
                Play
                <div className="absolute -z-[1] h-[110%] w-[110%] animate-ping rounded-full bg-gray-600 opacity-30"></div>
              </div>
            </button>
          </div>

          {/* Text Content */}
          <div className="self-center px-6 py-16 sm:py-20 md:px-16 xl:px-10 xl:py-24 xxl:py-32 xxl:pl-16 xxl:pr-28">
            <h2 className="text-white text-[36px] leading-[40px] lg:text-4xl font-bold font-secondary lg:text-[80px] lg:leading-20 ">
              AI-powered that streamline tasks
            </h2>
            <p className="text-white mt-6 text-lg lg:text-[21px] font-primary">
              As your business grows or your AI SaaS needs change, you can
              easily adjust your subscription level to match those needs.
            </p>
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

      {/* Video Modal */}
      {isPlaying && (
        <div className="fixed inset-0 z-[999] bg-black bg-opacity-80 flex items-center justify-center px-4">
          <div className="relative w-full max-w-[1200px]">
            <button
              onClick={() => setIsPlaying(false)}
              className="
          absolute 
          -top-10 
          right-0 
          text-white 
          text-4xl 
          font-bold 
          z-50
          md:-top-12
          md:right-[-40px]
          rounded-full
          bg-black
          p-2
          shadow-lg
          hover:bg-red-600
          transition-colors
          duration-300
        "
            >
              &times;
            </button>
            <iframe
              width="100%"
              height="700"
              src="https://www.youtube.com/embed/3nQNiWdeH2Q?autoplay=1"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoPlayer;
