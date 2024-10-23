import Error from "/src/assets/error.svg";
import { useEffect } from "react";

const DoesNotExist = () => {
  useEffect(() => {
    document.title = "Darse de baja";
  }, []);

  const wrapper =
    "w-full ss:w-[510px] sm:w-[700px] md:w-[920px] m-auto xl:w-[1030px] px-[30px] sm:px-0";

  return (
    <div className={` bg-beige pt-[40px] pb-[80px] sm:py-[96px] md:py-[120px] `}>
      <div className={`${wrapper} flex justify-around`}>
        <div className="bg-white px-[16px] py-[32px] sm:px-[24px] sm:py-[48px] md:px-[66px] md:py-[54px] rounded-[4px] shadow-lg w-full sm:w-[75%] md:w-[60%]">
          <div className="flex justify-around">
            <img src={Error} alt="" className="w-[140px]" />
          </div>
          <p className=" text-[20px] sm:text-[28px] md:text-[30px] text-center font-bold my-[36px]">
            No tenemos dicho usuario en el sistema.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoesNotExist;
