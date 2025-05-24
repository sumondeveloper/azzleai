import CheckOrange from "../../assets/icons/icon-orang-badgecheck.svg";
import CheckBlack from "../../assets/icons/icon-black-badge-check.svg";

const PricingPageCard = ({ plan }) => {
  return (
    <li className="group flex flex-col rounded-[10px] px-5 py-10 transition-all duration-300 ease-linear hover:bg-black bg-[#efeae3] font-primary text-black">
      <h3 className="font-secondary text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
        {plan.title}
      </h3>
      <span className="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
        {plan.members}
      </span>
      <div className="my-5 h-[1px] w-full bg-[#DBD6CF]" />
      <h4 className="mb-2 font-secondary text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]">
        ${plan.price}
      </h4>
      <span className="text-lg font-bold group-hover:text-white font-primary flex gap-[2px] mb-4">
        <span>/</span>
        {plan.period}
      </span>
      <p className="mb-10 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white font-primary">
        {plan.description}
      </p>

      <div className="mb-20">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex gap-x-3 items-center mb-3">
            {/* Icon wrapper with relative positioning */}
            <div className="relative w-6 h-6">
              {/* Default icon */}
              <img
                src={CheckBlack}
                alt=""
                className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-300"
              />
              {/* Hover icon */}
              <img
                src={CheckOrange}
                alt=""
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <span className="text-lg text-primary font-extrabold group-hover:text-white">
              {feature}
            </span>
          </div>
        ))}
      </div>

      <a
        href="/pricing"
        className="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed group-hover:border-colorOrangyRed group-hover:text-white group-hover:border-red-500 font-bold hover:bg-red-500 hover:text-white "
      >
        Choose the plan
      </a>
    </li>
  );
};

export default PricingPageCard;
