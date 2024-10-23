import check from "/src/assets/check.svg";
import arrow from "/src/assets/arrow.svg";
import Slider from "@mui/material/Slider";
import group3 from "/src/assets/group3.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";


const Apply = () => {
  const [amount, setAmount] = useState(2000);
  const [isOpen, setIsOpen] = useState(false);

  const handlePriceChange = (event, newValue) => {
    setAmount(newValue);
  };

  const [currentDate, setCurrentDate] = useState(new Date());
  const [nextMonthDate, setNextMonthDate] = useState(null);

  const calculateNextMonthDate = (date) => {
    const nextDate = new Date(date);
    nextDate.setDate(nextDate.getDate() + 30);
    return nextDate;
  };

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  useEffect(() => {
    setNextMonthDate(calculateNextMonthDate(currentDate));
  }, [currentDate]);

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);



  return (
    <div className="relative">
      <div className="absolute">
        <div className="relative z-20 bg-white rounded-[10px] pt-[30px] pb-[10px] lg:pt-[35px] px-[30px] lg:px-[35px] shadow-xl max-w-[488px]">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <p className="text-[14px] text-roboto font-bold text-darkGreen">
                Monto del préstamo
              </p>
              <p className="text-[40px] md:text-[40px] text-roboto font-bold text-green md:mb-[20px]">
                {amount} €
              </p>
            </div>
            <div>
              <p className="text-[12px] text-start md:text-end text-roboto text-green mb-[10px] leading-[14px]">
                fecha de amortización del préstamo <br />{" "}
                {nextMonthDate && formatDate(nextMonthDate)}
              </p>
            </div>
          </div>

          <Slider
            defaultValue={2000}
            aria-label="Default"
            valueLabelDisplay="off"
            min={100}
            max={10000}
            step={100}
            onChange={handlePriceChange}
          />
          <div className="flex justify-between text-green text-[12px] text-roboto">
            <p>100 €</p>
            <p>10 000 €</p>
          </div>
          <Link to={`/stepper/${amount}`}>
            <button className="flex justify-center items-center text-[16px] md:text-[18px] text-roboto font-bold text-white bg-red hover:bg-green w-full rounded-[10px] py-[12px] md:py-[14px] px-[16px] md:px-[18px]  mt-[32px] mb-[16px]">
              <p>Solicita tu préstamo </p>
              <img src={arrow} alt="" className="ml-[10px] xss:ml-[18px]" />
            </button>
          </Link>
          <div className="flex w-full md:w-[80%] mx-auto">
            <img src={check} alt="" />
            <p className="text-[12px] text-roboto text-green mt-[3px] ml-[5px] leading-[15px]">
              <span className="font-bold text-darkGreen">
                Consideraremos cada solicitud{" "}
              </span>
              independientemente de su historial crediticio.
            </p>
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              setIsOpen(true);
            }}
            className="text-darkYellow pb-[15px] pt-[20px] text-roboto text-[12px] font-bold absolute w-full bottom-[-50px] left-0 z-10 bg-yellow flex justify-around rounded-b-[10px] shadow-xl max-w-[488px]"
          >
            Términos del préstamo
          </button>

          <Modal open={isOpen} onClose={() => setIsOpen(false)} />
        </div>
      </div>

      <img
        src={group3}
        alt=""
        className="absolute hidden lg:block bottom-[-450px] left-[-50px] xl:left-[-70px] z-0"
      />
    </div>
  );
};

export default Apply;
