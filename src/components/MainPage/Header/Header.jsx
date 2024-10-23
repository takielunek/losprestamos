import hashtag from "/src/assets/hashtag.png";
import hand from "/src/assets/hand.png";
import yellowBg from "/src/assets/yellowBg.svg";
import lightGreenBg from "/src/assets/lightGreenBg.svg";
import Apply from "./Apply";

const Header = () => {
  const wrapper =
    "w-full ss:w-[510px] sm:w-[700px] md:w-[920px] m-auto xl:w-[1130px] px-[30px] sm:px-0";

  return (
    <div
      id="header"
      className="relative bg-beige pt-[20px] sm:pt-[130px] pb-[430px] ss:pb-[400px] sm:pb-[280px] md:pb-[540px]"
    >
      <div className={`${wrapper}`}>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 ">
          <div>
            <div
              data-aos="fade-zoom-in"
              className="flex justify-around md:justify-start"
            >
              <p className="absolute z-10 text-white font-bold text-roboto text-[16px] text-center bg-red rounded-[10px] px-[8px] sm:px-[16px] md:px-[10px] py-[6px] mb-[16px] max-w-[447px] sm:max-w-[233px] md:max-w-[447px]  mt-[5px] mx-[30px] sm:mx-0">
                ¡Préstamo de hasta 10000 EUR en tan solo 15 minutos!
              </p>
            </div>

            <div className="flex justify-around md:justify-start">
              <img
                src={hashtag}
                alt="Hashtag #Dinerorapido"
                data-aos="fade-up"
                className="absolute z-10 top-[100px] sss:top-[80px] sm:top-[190px] w-[250px] xs:w-[350px] sm:w-[250px] md:w-[360px] lg:w-[371px] mb-[32px] mt-0 sm:mt-[40px] md:mt-0"
              />
            </div>
            {/* big screen*/}
            <img
              src={hand}
              alt="Hand image"
              data-aos="fade-right"
              className="hidden md:block absolute left-0 top-[250px] w-[590px] lg:w-[600px] z-10 "
            />
          </div>
          {/* middle screen  */}
          <img
            src={hand}
            alt="Hand image"
            className="hidden sm:block md:hidden h-[200px] z-10"
          />

          {/* small screen */}
          <img
            src={hand}
            alt="Hand image"
            className="hidden ss:block sm:hidden absolute h-[200px] top-[130px]  z-10"
          />

          {/* mini screen */}
          <img
            src={hand}
            alt="Hand image"
            className="hidden xs:block ss:hidden absolute h-[200px] top-[130px] left-0 z-10 "
          />

          <div className="mt-[150px] xs:mt-[270px] sm:mt-0 xl:mr-[50px]">
            <Apply />
          </div>
        </div>
      </div>
      <img
        src={yellowBg}
        alt=""
        className="absolute top-0 right-0 hidden lg:block"
      />
      <img
        src={lightGreenBg}
        alt=""
        className="absolute top-[70px] left-0 z-0"
      />
    </div>
  );
};

export default Header;
