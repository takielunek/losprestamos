import Logo from "/src/assets/logo.png";

const Footer = () => {

 const currentYear = new Date().getFullYear();


  return (
    <div className="bg-stepsBg py-[48px] px-[16px]">
      <a href="/" className="grid place-content-center ">
        <img src={Logo} alt="Logo" />
      </a>
      <div className="mt-[48px] sm:mt-[54px] text-center text-[12px]">
        <p>
          &copy; {currentYear} - losprestamos.es. Reservados todos los derechos
        </p>
      </div>
    </div>
  );
};

export default Footer;
