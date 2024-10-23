import { useState } from "react";
import { Controller } from "react-hook-form";
import { AiFillCaretDown } from "react-icons/ai";
import PropTypes from "prop-types";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";

const DatePickerInput = ({
  text,
  speech,
  message,
  errors,
  control,

}) => {
  DatePickerInput.propTypes = {
    text: PropTypes.string.isRequired,
    speech: PropTypes.string,
    message: PropTypes.string,
    errors: PropTypes.object.isRequired,
    control: PropTypes.object.isRequired,
  
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
        <Controller
          name="startDateOfWork"
          control={control}
          defaultValue={null}
          rules={{ required: true }}
          render={({ field }) => (
            <Flatpickr
              {...field}
              options={{
                dateFormat: "d-m-Y",
              }}
              onChange={(date) => field.onChange(date[0])}
              placeholder="Selecciona una fecha"
              className={`bg-inputBg rounded-[4px] w-full py-[12px] pl-[16px] pr-[43px] border-lightGrey border-[1px] focus:border-lightGreen focus:text-grey`}
              style={
                errors.startDateOfWork
                  ? {
                      border: "1px solid red",
                    }
                  : {}
              }
              noValidate
            />
          )}
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

      {errors.startDateOfWork && (
        <p className="text-red text-[12px] mt-[4px]">{message}</p>
      )}
    </div>
  );
};

export default DatePickerInput;
