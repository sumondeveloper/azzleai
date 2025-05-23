import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

const DesktopMenu = ({ menu }) => {
  const hasSubMenu = menu?.subMenu?.length > 0;
  const [isHover, setIsHover] = useState(false);

  const toggleHoverMenu = () => setIsHover(true);
  const closeHoverMenu = () => setIsHover(false);

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.3 },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: { duration: 0.3 },
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <motion.li
      className="group/link relative"
      onHoverStart={toggleHoverMenu}
      onHoverEnd={closeHoverMenu}
    >
      <a
        href={menu.path}
        className="flex items-center gap-1 hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl font-semibold"
      >
        {menu.name}
        {hasSubMenu && (
          <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
        )}
      </a>

      {hasSubMenu && (
        <motion.div
          className="absolute top-full left-0 z-50 bg-white shadow-lg rounded-md mt-2 p-5"
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          <div className="flex flex-col gap-2 w-[200px]">
            {menu?.subMenu?.map((subMenu, i) => (
              <a
                key={i}
                href={subMenu.path}
                className="block font-semibold text-gray-800 hover:text-red-500 transition-colors duration-300"
              >
                {subMenu?.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
};

export default DesktopMenu;
