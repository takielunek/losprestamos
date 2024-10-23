import Steps from "./Steps";
import arrow from "/src/assets/arrow.svg";

const Loan = () => {
  const wrapper =
    "w-full ss:w-[510px] sm:w-[700px] md:w-[920px] m-auto xl:w-[1130px] px-[30px] sm:px-0";

  return (
    <div className="bg-beige pt-[48px] lg:pt-[54px]">
      <div>
        <p
          className={`${wrapper} text-[26px] md:text-[38px]  text-roboto font-bold text-darkGreen text-center leading-[29px] mb-[54px]`}
        >
          ¡Préstamo de losprestamos.es en tres pasos!
        </p>

        <Steps />

        <div className="py-[32px] md:py-[85px] xl:py-[90px] flex justify-center">
          <a href="#header">
            <button className="flex justify-center items-center text-[16px] xl:text-[18px] md:text-[23px] text-roboto font-bold text-white bg-red hover:bg-green rounded-[10px] py-[15px] md:py-[20px] px-[40px] md:px-[45px]">
              <p>Solicita tu préstamo </p>
              <img src={arrow} alt="" className="ml-[10px] xss:ml-[18px]" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Loan;
