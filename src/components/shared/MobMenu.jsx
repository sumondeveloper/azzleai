import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const MobMenu = ({ Menus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
  const location = useLocation();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  // route change হলে মেনু বন্ধ করবে
  useEffect(() => {
    setIsOpen(false);
    setClicked(null);
  }, [location.pathname]);

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

  // লিংকে ক্লিক করলে মেনু বন্ধ করার হ্যান্ডলার
  const handleLinkClick = (hasSubMenu, index) => {
    if (hasSubMenu) {
      // সাবমেনু থাকলে টগল করবে
      setClicked(clicked === index ? null : index);
    } else {
      // সাবমেনু না থাকলে মেনু বন্ধ করবে
      setIsOpen(false);
      setClicked(null);
    }
  };

  return (
    <div>
      <button className="lg:hidden z-[999] relative" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <motion.div
        className="fixed left-0 right-[100px] sm:right-[50px] top-0 overflow-y-auto h-full bg-white backdrop-blur p-6 pb-20"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      >
        <ul>
          {Menus.map(({ name, subMenu, path }, i) => {
            const isClicked = clicked === i;
            const hasSubMenu = subMenu?.length > 0;
            return (
              <li key={name} className="border-b border-black/15 font-medium">
                <div
                  className="flex-center-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
                  onClick={() => handleLinkClick(hasSubMenu, i)}
                >
                  <Link
                    to={path}
                    className="flex-grow"
                    onClick={(e) => {
                      // সাবমেনু থাকলে লিংকের ডিফল্ট নেভিগেশন রোধ করবে, নাহলে করবে
                      if (hasSubMenu) e.preventDefault();
                      else {
                        setIsOpen(false);
                        setClicked(null);
                      }
                    }}
                  >
                    {name}
                  </Link>

                  {hasSubMenu && (
                    <ChevronDown
                      className={`ml-auto transition-transform duration-300 ${
                        isClicked ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-5 overflow-hidden"
                  >
                    {subMenu.map(({ name, path }) => (
                      <li
                        key={name}
                        className="p-2 flex-center hover:bg-white/5 rounded-md gap-x-2 cursor-pointer border-t border-black/20"
                        onClick={() => {
                          setIsOpen(false);
                          setClicked(null);
                        }}
                      >
                        <Link to={path}>{name}</Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
};

export default MobMenu;
