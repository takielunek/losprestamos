import longLeftArrow from "/src/assets/longLeftArrow.svg";
import longRightArrow from "/src/assets/longRightArrow.svg";
import group2 from "/src/assets/group2.svg";
import dots from "/src/assets/dots.svg";
import arrow from "/src/assets/arrow.svg";

const AboutUs = () => {
  const wrapper =
    "w-full ss:w-[510px] sm:w-[700px] md:w-[920px] m-auto xl:w-[1130px] px-[30px] sm:px-0";
  const text =
    "text-[16px] xl:text-[18px] text-center text-darkGreen gilroyLight leading-[18px] px-[8px] mt-[16px] mb-[24px]";
  const place = "grid place-items-center w-1/2 md:w-[220px] xl:w-[230px]";

  return (
    <div className="relative bg-beige">
      <div className={`${wrapper}`}>
        <p className="text-[24px] md:text-[30px] text-roboto font-bold text-darkGreen text-center leading-[29px] md:leading-[37px] pt-[32px] mb-[16px]">
          Por qué los clientes <br /> ellos eligen la mayoría <br /> ¿nuestra
          oferta?
        </p>

        <div className=" grid place-content-center">
          <div className="flex w-full md:w-[600px] xl:w-[630px] justify-between">
            <div className={`${place}`}>
              <img src={longLeftArrow} alt="Arrow icon" />
              <p className={`${text}`}>
                Más del{" "}
                <span className="text-roboto font-bold">
                  90% de nuestros clientes
                </span>{" "}
                recibe uno positivo decisión para la solicitud
              </p>
            </div>

            <div className={`${place}`}>
              <img src={longRightArrow} alt="Arrow icon" />
              <p className={`${text}`}>
                Trámites mínimos y pago rápido de dinero a su cuenta bancaria
              </p>
            </div>
          </div>
        </div>

        <div className="py-[32px] md:py-[85px] xl:py-[90px] flex justify-center">
          <a href="#header">
            <button className="flex justify-center items-center text-[16px] xl:text-[18px] md:text-[23px] text-roboto font-bold text-white bg-red hover:bg-green rounded-[10px] py-[15px] md:py-[20px] px-[40px] md:px-[45px]">
              <p>Solicita tu préstamo </p>
              <img src={arrow} alt="" className="ml-[10px] xss:ml-[18px]" />
            </button>
          </a>
        </div>
      </div>
      <img
        src={group2}
        alt=""
        className="absolute top-[-50px] md:top-[150px] left-[-160px] xss:left-[-130px] md:left-[0px] scale-[0.6] md:scale-[1]"
      />
      <img
        src={dots}
        alt=""
        className="absolute top-[-70px] sm:top[-110px] md:top-[150px] right-[-60px] xss:right-[-40px] ss:right-[0px] md:right-[10%] xxl:right-[18%] md:scale-[1] scale-[0.6]"
      />
    </div>
  );
};

export default AboutUs;
