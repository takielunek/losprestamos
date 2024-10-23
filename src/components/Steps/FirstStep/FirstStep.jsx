import Input from "./Input";
import PhoneInput from "./PhoneInput";
import { firstStep } from "./index.js";
import { useEffect, useCallback } from "react";
import { multiStepContext } from "../StepContext";
import { useFormContext, useWatch } from "react-hook-form";
import PropTypes from "prop-types";

const FirstStep = ({ onContinue }) => {
  FirstStep.propTypes = {
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

  const validateStep = useCallback(async () => {
    const isValid = await trigger();
    return isValid;
  }, [trigger]);

  useEffect(() => {
    document.title = "Paso 1 - Aplicación Losprestamos";

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
    const savedData = JSON.parse(localStorage.getItem("firstStepData"));
    if (savedData) {
      Object.keys(savedData).forEach((key) => {
        setValue(key, savedData[key]);
      });
    }
  }, [setValue]);

  const watchedValues = useWatch({ control });

  useEffect(() => {
    const formData = getValues();
    localStorage.setItem("firstStepData", JSON.stringify(formData));
  }, [watchedValues, getValues]);

  return (
    <div className="relative">
      <div className="bg-stepsBg">
        <div className="gradient"></div>
        <div
          className={`${wrapper} pb-[32px] md:pb-[48px] pt-[190px] px-[16px]`}
        >
          <div className="mb-[60px] md:mb-[70px]">
            <p className="text-[20px] sm:text-[28px] md:text-[30px] text-roboto text-darkGreen absolute">
              Paso 1: <span className="font-bold"> Datos básicos</span>
            </p>
          </div>
          {firstStep.slice(0, 3).map((x) => (
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
          {firstStep.slice(3, 4).map((x) => (
            <PhoneInput
              key={x.id}
              text={x.text}
              speech={x.speech}
              message={x.message}
              register={register}
              errors={errors}
              validation={x.validation}
            />
          ))}
          {firstStep.slice(4, 5).map((x) => (
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
          {/* checkbox */}
          <div className="flex items-baseline">
            <input
              type="checkbox"
              id="privacyPolicy"
              {...register("privacyPolicy", { required: true })}
            />
            <label
              htmlFor="privacyPolicy"
              className="ml-[8px] text-[13px] text-grey cursor-pointer"
            >
              Confirmo que he leído el la{" "}
              <a
                href="/POLITICA_PRIVACIDAD_LOSPRESTAMOS_es.pdf"
                className="text-green"
              >
                Política de Privacidad
              </a>{" "}
              de YOUMONEY y acepto su contenido.{" "}
              <span className="text-red">*</span>
              {errors && errors.privacyPolicy && (
                <p role="alert" className="text-red">
                  No se dio ningún consentimiento
                </p>
              )}
            </label>
          </div>
          <button
            onClick={() => onContinue(validateStep)}
            className="text-white font-bold bg-green hover:bg-darkGreen w-full px-[16px] py-[12px] mb-[16px] mt-[32px] rounded-[4px]"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
