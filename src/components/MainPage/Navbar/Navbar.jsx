import Logo from "/src/assets/logo.png";
import { useState, useEffect } from "react";

const Navbar = () => {
  const wrapper =
    "w-full ss:w-[510px] sm:w-[700px] md:w-[920px] m-auto xl:w-[1130px] px-[30px] sm:px-0";

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${
        visible ? "translate-y-0 opacity-100 " : "opacity-0 -translate-y-full "
      } ${
        isScrolled ? "bg-beige" : " bg-beige sm:bg-transparent"
      } sm:fixed z-30 w-[100%] sm:top-0 duration-300`}
    >
      <div className={`${wrapper} py-[15px]`}>
        <div className="flex justify-center md:justify-start  ">
          <a href="/" >
            <img className="h-[20px] sm:h-[32px]" src={Logo} alt="Logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
