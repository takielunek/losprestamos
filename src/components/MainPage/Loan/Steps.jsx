import { loan } from "./index.js";

const Steps = () => {

      const wrapper =
        "w-full ss:w-[510px] sm:w-[700px] md:w-[920px] m-auto xl:w-[1130px] px-[30px] sm:px-0";

  return (
    <div className="loanImage">
      <div className={`${wrapper} flex flex-col md:flex-row py-[96px] md:py-0`}>
        {loan.map((loan) => (
          <div
            key={loan.id}
            className="p-[16px] md:py-[68px] md:px-[17px] xl:px-[25px] md:w-1/3"
          >
            <div className="flex justify-center">
              <img
                src={loan.image}
                alt="Graphics"
                className="h-[80px] md:h-[153px] mb-[20px]"
              />
            </div>
            <div className="mb-[24px] md:mb-[26px] text-center text-[16px] md:text-[17px]  text-textGreen">
              <p className="font-bold text-roboto">{loan.title}</p>
              <p className="gilroyLight">{loan.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
