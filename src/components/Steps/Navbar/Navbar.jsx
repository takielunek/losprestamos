import Logo from "/src/assets/logo.png";
import pen from "/src/assets/pen.svg";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Modal from "./Modal";
import { multiStepContext } from "../StepContext";


const Navbar = () => {
  let { amount: initialAmount } = useParams();
  const { money, setMoney } = useContext(multiStepContext);
  const [amount, setAmount] = useState(parseInt(initialAmount) || money);

  const wrapper =
    "w-full ss:w-[510px] sm:w-[700px] md:w-[920px] xl:w-[1130px] px-[30px] sm:px-0";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMoney(amount);
  }, [amount, setMoney]);

  return (
    <div
      className={`${
        isScrolled ? "bg-stepsBg" : " bg-transparent"
      } fixed top-0 left-0 w-[100%] flex justify-center z-20 pb-[60px]`}
    >
      <div className={`${wrapper} py-[16px]`}>
        <div className="flex justify-between">
          <a href="/" className="grid place-content-center">
            <img className="h-[20px] sm:h-[32px]" src={Logo} alt="Logo" />
          </a>

          <div className="flex flex-col sm:flex-row ">
            <p className="text-[14px] sm:text-[16px] md:text-[18px] sm:mt-[7px] md:mt-[9px]">
              Estas solicitando
            </p>
            <div className="flex">
              <p className="text-[20px] sm:text-[22px] md:text-[25px] text-green sm:ml-[10px] font-bold">
                {money} €
              </p>
              <img
                src={pen}
                alt="A pen"
                onClick={() => setIsOpen(true)}
                className="h-[12px] w-[12px] opacity-50 ml-[5px] place-self-center mt-[4px] sm:mt-[6px] cursor-pointer"
              />
              <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                setAmount={setAmount}
                amount={amount}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
