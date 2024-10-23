import { footer } from "./index.js";
import whiteLogo from "/src/assets/whiteLogo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const wrapper =
    "w-full ss:w-[510px] sm:w-[700px] md:w-[920px] m-auto xl:w-[1130px] px-[30px] sm:px-0";
  const text = "mb-[6px] opacity-80 font-normal";

  return (
    <div>
      <div className="bg-beige h-[100px] footerImage"></div>
      <div className="bg-darkGreen font-roboto text-white pt-[96px] pb-[48px] ">
        <div className={`${wrapper} flex flex-col sm:flex-row`}>
          <div className=" w-full sm:w-1/4">
            <a href="/">
              <img src={whiteLogo} alt="Logo" />
            </a>
            <div
              className={`${text} flex flex-col text-[14px] mb-[24px] mt-[48px] leading-[24px] xl:leading-[27px]`}
            >
              <a href="/contacto">Contacto</a>
              <a href="/cooperacion">Cooperación</a>
            </div>
          </div>

          <div className="py-[30px] md:p-[30px] w-full sm:w-1/4 leading-[24px] xl:leading-[27px]">
            <p className="text-[16px] md:text-[18px] font-medium">
              Servicio al Cliente
            </p>
            <div className="flex flex-col text-[14px] mt-[16px] mb-[24px]">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/POLITICA_PRIVACIDAD_LOSPRESTAMOS_es.pdf"
                className={`${text}`}
              >
                Política de privacidad
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/TERMINOS_CONDICIONES_LOSPRESTAMOS_es.pdf"
                className={`${text}`}
              >
                Términos y condiciones
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/POLITICA_COOKIES_YOUMONEY_es.pdf"
                className={`${text}`}
              >
                Política de cookies
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/AVISO_LEGAL_YOUMONEY_es.pdf"
                className={`${text}`}
              >
                Aviso legal
              </a>
            </div>
          </div>

          <div className="w-full sm:w-1/2">
            {footer.map((footer) => (
              <div key={footer.id}>
                <p className="text-[12px] text-justify mb-[10px]">
                  {footer.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center text-[12px] mt-[48px]">
          <p>&copy; {currentYear} losprestamos.es</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
