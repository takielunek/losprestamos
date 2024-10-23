import Input from "./Input";
import DatePickerInput from "./DatePickerInput";
import DropdownInput from "./DropdownInput";
import { secondStep } from "./index.js";
import { useContext, useEffect, useCallback } from "react";
import { multiStepContext } from "../StepContext";
import { useFormContext, useWatch } from "react-hook-form";
import PropTypes from "prop-types";

const SecondStep = ({ onContinue }) => {
  SecondStep.propTypes = {
    onContinue: PropTypes.func.isRequired,
  };
  const wrapper = "w-full ss:w-[510px] sm:w-[600px] mx-auto px-[30px] sm:px-0";

  const {
    register,
    trigger,
    setValue,
    getValues,
    control,
    formState: { errors },

  } = useFormContext(multiStepContext);

  const { setCurrentStep } = useContext(multiStepContext);

  const validateStep = useCallback(async () => {
    const isValid = await trigger();
    return isValid;
  }, [trigger]);

  useEffect(() => {
    document.title = "Paso 2 - Aplicación Losprestamos";

    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        onContinue(validateStep);
      }
    };
    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [onContinue, validateStep]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("secondStepData"));
    if (savedData) {
      Object.keys(savedData).forEach((key) => {
        setValue(key, savedData[key]);
      });
    }
  }, [setValue]);

  const watchedValues = useWatch({ control });

    useEffect(() => {
      const formData = getValues();
      localStorage.setItem("secondStepData", JSON.stringify(formData));
    }, [watchedValues, getValues]);

  return (
    <div className="relative">
      <div className="bg-stepsBg ">
        <div className="gradient"></div>

        <div
          className={`${wrapper} pb-[32px] md:pb-[48px] pt-[190px] px-[16px] `}
        >
          <div className="mb-[60px] md:mb-[70px]">
            <p className="text-[20px] sm:text-[28px] md:text-[30px] text-roboto text-darkGreen absolute">
              Paso 2: <span className="font-bold"> Datos básicos</span>
            </p>
          </div>
          {secondStep.slice(0, 1).map((x) => (
            <Input
              key={x.id}
              placeholder={x.placeholder}
              text={x.text}
              speech={x.speech}
              message={x.message}
              register={register}
              errors={errors}
              type={x.type}
              validation={x.validation}
              valueName={x.valueName}
            />
          ))}
          {secondStep.slice(1, 2).map((x) => (
            <DatePickerInput
              key={x.id}
              text={x.text}
              speech={x.speech}
              message={x.message}
              register={register}
              errors={errors}
              valueName={x.valueName}
              placeholder={x.placeholder}
            />
          ))}

          {secondStep.slice(2, 4).map((x) => (
            <DropdownInput
              key={x.id}
              placeholder={x.placeholder}
              text={x.text}
              speech={x.speech}
              message={x.message}
              register={register}
              errors={errors}
              valueName={x.valueName}
              options={x.options}
              value={x.value}
            />
          ))}

          <button
            onClick={() => onContinue(validateStep)}
            className="text-white font-bold bg-green hover:bg-darkGreen w-full px-[16px] py-[12px] mb-[16px] mt-[32px] rounded-[4px]"
          >
            Continuar
          </button>

          <button
            onClick={() => setCurrentStep(1)}
            className="text-buttonText border-2 border-green font-bold bg-transparent hover:bg-green hover:text-white hover:border-transparent w-full px-[16px] py-[12px] rounded-[4px]"
          >
            Anterior
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
