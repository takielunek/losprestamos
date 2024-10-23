
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import PropTypes from "prop-types";

const Input = ({
  placeholder,
  text,
  speech,
  message,
  errors,
  register,
  type,
  validation,
  valueName,
}) => {
  Input.propTypes = {
    placeholder: PropTypes.string,
    text: PropTypes.string.isRequired,
    speech: PropTypes.string,
    message: PropTypes.string,
    errors: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    validation: PropTypes.object.isRequired,
    valueName: PropTypes.string.isRequired,
  };

  const speechBuble =
    "absolute w-[204px] text-[12px] text-center rounded-md pt-[4px] pb-[8px] px-[8px] right-[90px] ss:right-[28px] translate-x-1/2 bottom-[40px] bg-grey text-white";
  const icon = "absolute bottom-[31px] right-[26px] translate-x-1/2 text-grey";

  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="mb-[16px]">
      <p className="text-[12px] xxs:text-[14px] pl-[2px] mb-[8px] text-grey">
        {text}
      </p>

      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          className="py-[12px] px-[16px] bg-inputBg border-lightGrey border-[1px] focus:border-lightGreen firstStepInput rounded-[4px] w-full"
          {...register(valueName, { ...validation, required: true })}
          style={
            errors && Object.hasOwn(errors, valueName)
              ? {
                  border: "1px solid red",
                }
              : {}
          }
        />

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

      {errors && Object.hasOwn(errors, valueName) && (
        <p className="text-red text-[12px] mt-[4px]">{message}</p>
      )}
    </div>
  );
};

export default Input;
