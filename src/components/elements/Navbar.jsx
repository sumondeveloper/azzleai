import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import Logo from "../../assets/icons/Logo.png";
import { Menus } from "../../utils/constants";
import DesktopMenu from "../shared/DesktopMenu";
import MobMenu from "../shared/MobMenu";
import Button from "../shared/Button";

const Navbar = () => {
  return (
    <header className="py-3 md:py-10 bg-[#efeae3] z-50 relative text-primary">
      <MaxWidthWrapper className="px-10">
        <div className="flex justify-between items-center">
          <img src={Logo} alt="logo" width={96} height={24} />

          <ul className="lg:flex items-center hidden gap-8">
            {/* menus */}
            {/* desktop menus */}

            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>
          <div className="hidden lg:flex items-center gap-x-5">
            <a href="/login">
              <Button>Login</Button>
            </a>
            <a href="/signup">
              <Button className="bg-black text-white py-3">Sign up free</Button>
            </a>
          </div>
          <div className="lg:hidden">
            <MobMenu Menus={Menus} />
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};
export default Navbar;
