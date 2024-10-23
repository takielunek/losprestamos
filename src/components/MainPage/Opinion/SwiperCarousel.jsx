import rightArrow from "/src/assets/rightArrow.svg";
import leftArrow from "/src/assets/leftArrow.svg";
import opinionTitle from "/src/assets/opinionTitle.png";
import circle from "/src/assets/circle.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import { opinions } from "./index.js";
import PropTypes from "prop-types";

const SwiperCarousel = () => {
  SwiperCarousel.propTypes = {
    isSend: PropTypes.func.isRequired,
  };

  const button = " cursor-pointer ";

  return (
    <div className="relative">
      <img
        src={circle}
        alt=""
        className="absolute top-[20px] xss:top-[-30px] xs:top-[-50px] left-[-10px] block sm:hidden"
      />

      {/* > 768px  */}
      <img
        src={circle}
        alt=""
        className="absolute top-[-80px] xl:top-[-90px] left-[-10px] xl:left-[20px] hidden md:block"
      />
      <img
        src={circle}
        alt=""
        className="absolute w-[450px] top-0 left-0 hidden sm:block md:hidden"
      />

      <div className="pt-[50px] grid place-content-center pb-[40px] xss:pb-[80px] xs:pb-[150px] ss:pb-[100px] sm:pb-0">
        <img src={opinionTitle} alt="Opiniones de clientes satisfechos" />

        <Swiper
          className="pt-[32px] max-w-[286px] m-0 "
          slidesPerView={1}
          grid={{
            rows: 1,
          }}
          modules={[Pagination, Navigation]}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 5,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {opinions.map((opinions) => (
            <SwiperSlide key={opinions.id}>
              <div>
                <p className=" mb-[10px] text-[16px] md:text-[18px] text-start text-roboto font-semibold leading-[22px]">
                  {opinions.text}
                </p>
                <p className="text-[16px] md:text-[17px] text-start text-roboto">
                  {opinions.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-end mr-[40px] z-10">
          <div
            className={`${button} swiper-button-prev mr-[20px] cursor-pointer`}
          >
            <img src={leftArrow} alt="Left arrow icon" />
          </div>

          <div className={`${button} swiper-button-next`}>
            <img src={rightArrow} alt="Right arrow icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiperCarousel;
