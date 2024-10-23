import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { IoChevronDown } from "react-icons/io5";
import PropTypes from "prop-types";



const DropdownInput = ({
  placeholder,
  text,
  speech,
  message,
  errors,
  register,
  options,
  setShowButton,
}) => {
  DropdownInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    speech: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    errors: PropTypes.object,
    register: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    setShowButton: PropTypes.func.isRequired,
  };

  const speechBuble =
    "absolute w-[204px] text-[12px] text-center rounded-md pt-[4px] pb-[8px] px-[8px] right-[90px] ss:right-[28px] translate-x-1/2 bottom-[40px] bg-grey text-white";
  const icon = "absolute bottom-[31px] right-[26px] translate-x-1/2 text-grey";

  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const specificOptions = [
    "Trabajo fijo",
    "Trabajo temporal",
    "Autónomo",
    "Empleado público",
    "Militar",
    "Otros",
  ];

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    setShowButton(specificOptions.includes(value));
  };

  return (
    <div className="mb-[16px]">
      <p className="text-[12px] xxs:text-[14px] pl-[2px] mb-[8px] text-grey">
        {text}
      </p>

      <div className="relative">
        <select
          onClick={() => setIsOpen(!isOpen)}
          {...register("typeOfIncome", {
            required: true,
          })}
          required
          value={selectedOption}
          onChange={handleChange}
          className="cursor-pointer py-[12px] px-[16px] bg-inputBg border-lightGrey border-[1px] focus:border-lightGreen firstStepInput rounded-[4px] w-full"
         
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <div className="absolute inset-y-0 right-[45px] flex items-center ">
          <IoChevronDown className={`${isOpen ? "rotate-180" : "rotate-0"} `} />
        </div>

        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="rounded-full bg-beige h-[20px] w-[20px] absolute p-[1px] bottom-[50%] translate-y-1/2 right-[16px] "
        >
          <p className="text-[12px] text-grey grid place-content-center cursor-pointer">
            ?
          </p>
        </div>
        {isHovered && (
          <div>
            <div className={` ${speechBuble}`}>{speech}</div>
            <AiFillCaretDown className={`${icon}`} />
          </div>
        )}
      </div>

      {errors.typeOfIncome && (
        <p className="text-red text-[12px] mt-[4px]">{message}</p>
      )}
    </div>
  );
};

export default DropdownInput;
