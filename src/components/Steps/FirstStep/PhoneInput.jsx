import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import PropTypes from "prop-types";

const Input = ({
  text,
  speech,
  message,
  errors,
  register,
  validation,
}) => {
  Input.propTypes = {
    text: PropTypes.string.isRequired,
    speech: PropTypes.string,
    message: PropTypes.string,
    errors: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    validation: PropTypes.object.isRequired,
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
        <div className="flex relative">
          <input
            type="tel"
            value="+34"
            className="absolute z-10 w-[30px] bg-inputBg top-[50%] -translate-y-1/2 left-[16px] text-textColor"
            {...register("code", { required: true })}
          />

          <input
            type="tel"
            className="py-[12px] pl-[46px] pr-[16px] bg-inputBg border-lightGrey border-[1px] focus:border-lightGreen firstStepInput rounded-[4px] w-full"
            {...register("phone", { ...validation, required: true })}
            style={
              errors.phone
                ? {
                    border: "1px solid red",
                  }
                : {}
            }
          />
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

      {errors.phone && (
        <p className="text-red text-[12px] mt-[4px]">{message}</p>
      )}
    </div>
  );
};

export default Input;
