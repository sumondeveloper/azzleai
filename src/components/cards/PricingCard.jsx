const PricingCard = ({ plan }) => {
  return (
    <li className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear hover:bg-black bg-[#efeae3] font-primary text-black">
      <h3 className="font-secondary text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
        {plan.title}
      </h3>
      <span className="text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
        {plan.members}
      </span>
      <div className="my-5 h-[1px] w-full bg-[#DBD6CF]" />
      <h4 className="mb-4 font-secondary text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]">
        ${plan.price}
        <span className="text-lg font-bold">/Per {plan.period}</span>
      </h4>
      <p className="mb-10 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white font-primary">
        {plan.description}
      </p>
      <a
        href="/pricing"
        className="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed group-hover:border-colorOrangyRed group-hover:text-white group-hover:border-red-500 font-bold hover:bg-red-500 hover:text-white "
      >
        Choose the plan
      </a>
    </li>
  );
};

export default PricingCard;
