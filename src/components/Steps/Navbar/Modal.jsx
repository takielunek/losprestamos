import close from "../../../assets/close.svg";
import Slider from "@mui/material/Slider";
import PropTypes from "prop-types";
import { useContext } from "react";
import { multiStepContext } from "../StepContext";

const Modal = ({ open, onClose, amount, setAmount }) => {
  const { setMoney } = useContext(multiStepContext);

  const handlePriceChange = (event, newValue) => {
    setAmount(newValue);
    setMoney(newValue);
  };

  Modal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    amount: PropTypes.number.isRequired,
    setAmount: PropTypes.func.isRequired,
  };

  if (!open) return null;

  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 modalBackground px-[16px] z-40">
      <div className="absolute bottom-[50%] right-[50%] translate-x-1/2 translate-y-1/2 w-11/12 pt-[20px] xss:w-[280px] sm:w-[430px] bg-modalBg shadow-xl rounded-[4px] ">
        <div className="px-[35px] sm:px-[27px] ">
          <div className="flex justify-end">
            <img
              className="mb-[25px] h-[17px] cursor-pointer"
              src={close}
              alt="Close icon"
              onClick={onClose}
            />
          </div>
          <p className="text-[20px] sm:text-[24px] text-grey font-bold mb-[20px] sm:mb-[36px]">
            Actualizar el monto del préstamo
          </p>
          <div className="flex justify-between mb-[10px] bg-inputBg border-lightGrey border-[1px] px-[16px] py-[12px] rounded-[4px]">
            <p>{amount}</p>
            <p className="text-textColor">€</p>
          </div>
          <Slider
            value={amount}
            aria-label="Default"
            valueLabelDisplay="off"
            min={100}
            max={10000}
            step={100}
            onChange={handlePriceChange}
          />
        </div>
        <div className="flex justify-center sm:justify-end bg-modalBg sm:bg-white sm:p-[24px] sm:mt-[30px]">
          <button
            onClick={onClose}
            className="bg-modalButtonBg text-white text-[16px] py-[11px] px-[32px] rounded-[4px] mt-[10px] mb-[32px] sm:m-0"
          >
            Cerca
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
