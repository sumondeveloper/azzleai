import { cn } from "../../utils/cn";

const MaxWidthWrapper = ({ className, children }) => {
  return (
    <div
      className={cn("px-4 w-full md:mx-auto md:px-20  md:max-w-7xl", className)}
    >
      {children}
    </div>
  );
};
export default MaxWidthWrapper;
