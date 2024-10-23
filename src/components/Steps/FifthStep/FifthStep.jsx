import Input from "./Input";
import { fifthStep } from "./index.js";
import { useEffect } from "react";
import { useContext, useCallback } from "react";
import { multiStepContext } from "../StepContext";
import { useFormContext, useWatch } from "react-hook-form";

const FifthStep = () => {
  const wrapper = "w-full ss:w-[510px] sm:w-[600px] mx-auto px-[30px] sm:px-0";
  const text = "text-[12px] xxs:text-[14px] pl-[2px] mb-[8px] text-grey";

  const {
    register,
    trigger,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = useFormContext(multiStepContext);
  const { setCurrentStep } = useContext(multiStepContext);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      validateStep();
    }
  };

  const validateStep = useCallback(async () => {
    const isValid = await trigger();
    return isValid;
  }, [trigger]);

  useEffect(() => {
    document.title = "Paso 5 - Aplicación Losprestamos";

    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        trigger();
      }
    };
    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [trigger]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("fifthStepData"));
    if (savedData) {
      Object.keys(savedData).forEach((key) => {
        setValue(key, savedData[key]);
      });
    }
  }, [setValue]);

  const watchedValues = useWatch({ control });

  useEffect(() => {
    const formData = getValues();
    localStorage.setItem("fifthStepData", JSON.stringify(formData));
  }, [watchedValues, getValues]);

  return (
    <div className="relative">
      <div className="bg-stepsBg ">
        <div className="gradient"></div>

        <div
          onKeyDown={handleKeyPress}
          className={`${wrapper} pb-[32px] md:pb-[48px] pt-[190px] px-[16px] `}
        >
          <div className="mb-[60px] md:mb-[70px]">
            <p className="text-[20px] sm:text-[28px] md:text-[30px] text-roboto text-darkGreen absolute">
              Paso 5: <span className="font-bold"> Los datos financieros</span>
            </p>
          </div>
          {fifthStep.slice(0, 2).map((x) => (
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

          {/* select  */}

          <p className={`${text}`}>¿Tienes un vehículo? </p>
          <div className="flex mt-[8px] mb-[12px]">
            <div className="mr-[24px] custom-radio flex">
              <input
                type="radio"
                {...register("vehicle")}
                value="yes"
                id="yes"
                defaultChecked
              />
              <label className={`${text} ml-[6px]`} htmlFor="yes">
                Sí
              </label>
            </div>
            <div className="custom-radio flex">
              <input type="radio" {...register("vehicle")} value="no" id="no" />
              <label className={`${text} ml-[6px]`} htmlFor="no">
                No
              </label>
            </div>
          </div>

          {fifthStep.slice(2).map((x) => (
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

          {/* checkbox  */}
          <div className="flex items-baseline">
            <input
              type="checkbox"
              id="termsAndConditions"
              {...register("termsAndConditions", { required: true })}
            />

            <label
              htmlFor="termsAndConditions"
              className="ml-[8px] text-[13px] text-grey cursor-pointer "
            >
              Confirmo que he leído el la{" "}
              <a
                href="/TERMINOS_CONDICIONES_LOSPRESTAMOS_es.pdf"
                className="text-green"
              >
                Términos y Condiciones{" "}
              </a>{" "}
              de Uso de Youmoney y acepto su contenido.
              <span className="text-red">*</span>
              {errors && errors.termsAndConditions && (
                <p role="alert" className="text-red">
                  No se dio ningún consentimiento
                </p>
              )}
            </label>
          </div>

          <button
            type="submit"
            value="submit"
            onClick={() => trigger()}
            className="text-white font-bold bg-green hover:bg-darkGreen w-full px-[16px] py-[12px] mb-[16px] mt-[32px] rounded-[4px]"
          >
            Enviar una solicitud
          </button>

          <button
            onClick={() => setCurrentStep(4)}
            className="text-buttonText border-2 border-green font-bold bg-transparent hover:bg-green hover:text-white hover:border-transparent w-full px-[16px] py-[12px] rounded-[4px]"
          >
            Anterior
          </button>
        </div>
      </div>
    </div>
  );
};

export default FifthStep;
