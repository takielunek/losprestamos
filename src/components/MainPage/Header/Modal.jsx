import close from "../../../assets/close.svg";
import PropTypes from "prop-types";

const Modal = ({ open, onClose }) => {
  Modal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  if (!open) return null;

  return (
    <div
      className="fixed top-0 bottom-0 right-0 left-0 modalBackground z-40"
      onClick={onClose}
    >
      <div className="absolute bg-beige px-[27px] pt-[40px] pb-[57px] w-[37%] rounded-xl bottom-[50%] right-[50%] translate-x-1/2">
        <div className="flex justify-end">
          <img
            className="mb-[25px] h-[17px] cursor-pointer"
            src={close}
            alt="Close icon"
            onClick={onClose}
          />
        </div>
        <p className="text-[15px] text-green text-center text-roboto">
          Puede encontrar préstamos a devolver entre 61 y 90 días. TAE con un
          mínimo de 0% y máximo de 349%. Ejemplo TAE: 300€ de 60 días. Coste
          préstamo: 40.26€. Total a devolver: 340.26€. TAE 203.72%.
        </p>
      </div>
    </div>
  );
};

export default Modal;
