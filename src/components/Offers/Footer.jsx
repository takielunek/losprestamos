import Logo from "/src/assets/logo.png";
import { useEffect } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    document.title = "Ofertas - losprestamos";
  }, []);

  const wrapper =
    "w-full ss:w-[510px] sm:w-[700px] md:w-[920px] m-auto xl:w-[1130px] px-[30px] sm:px-0";

  return (
    <div className=" bg-beige border-b-[8px] border-darkGreen">
      <div className={`${wrapper} `}>
        <div className="py-[32px] sm:py-[54px]">
          <div className="grid place-content-center">
            <a href="/">
              <img src={Logo} alt="Logo" className="h-[30px] xss:h-[40px]" />
            </a>
          </div>
          <div className="mt-[48px] sm:mt-[54px] text-center text-[12px]">
            <p>
              &copy; {currentYear} - losprestamos.es. Reservados todos los
              derechos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
