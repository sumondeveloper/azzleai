import { cn } from "../../utils/cn";

const Button = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-[50px] border border-[border-[#7F8995] px-6 py-2 font-bold text-lg hover:bg-red-500 outline-none hover:text-white transition-colors duration-500 inline-block cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
};
export default Button;
