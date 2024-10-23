import { useState, createContext, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import dataSender from "../../dataSender";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const multiStepContext = createContext();

const StepContext = ({ children }) => {
  StepContext.propTypes = {
    children: PropTypes.node.isRequired,
  };

  let { amount: initialAmount } = useParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [money, setMoney] = useState(parseInt(initialAmount) || 2000);
  

  const methods = useForm({
    defaultValues: {
      money: money,
    },
  });

  const { watch, setValue } = methods;

  useEffect(() => {
    setValue("money", money);
  }, [money, setValue]);

  const allFormData = watch();
  console.log(allFormData); 

  const onSubmit = (data) => {
    const formData = {
      ...data.step1,
      ...data.step2,
      ...data.step3,
      ...data.step4,
      ...data.step5,
      money,
    };
    console.log(formData);

    dataSender(JSON.stringify(formData));
    window.location.href = "/offer";
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <multiStepContext.Provider
          value={{
            currentStep,
            setCurrentStep,
            setMoney,
            money,
          }}
        >
          {children}
        </multiStepContext.Provider>
      </form>
    </FormProvider>
  );
};

export default StepContext;
