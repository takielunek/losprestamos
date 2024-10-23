import SwiperCarousel from "./SwiperCarousel";
import SendFeedback from "./SendFeedback";
import group1 from "/src/assets/group1.svg";

const Opinion = () => {
  const wrapper =
    "w-full ss:w-[510px] sm:w-[700px] md:w-[920px] m-auto xl:w-[1130px] px-[30px] sm:px-0";

  return (
    <div className="relative bg-beige pt-[60px] sm:pt-[160px] pb-[80px] sm:pb-[150px]">
      <div className={`${wrapper} grid grid-cols-1 sm:grid-cols-2`}>
        <SwiperCarousel className="w-full sm:w-1/2 " />
        <SendFeedback className="w-full sm:w-1/2" />
      </div>
      <img
        src={group1}
        alt=""
        className="absolute top-[-140px] lg:top-[-200px] right-[-100px] lg:right-0 hidden md:block"
      />
    </div>
  );
};

export default Opinion;
