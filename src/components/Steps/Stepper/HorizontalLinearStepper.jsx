import { useContext, useCallback } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import FirstStep from "../FirstStep/FirstStep";
import SecondStep from "../SecondStep/SecondStep";
import ThirdStep from "../ThirdStep/ThirdStep";
import FourthStep from "../FourthStep/FourthStep";
import FifthStep from "../FifthStep/FifthStep";
import { multiStepContext } from "../StepContext";

const steps = ["1", "2", "3", "4", "5"];

const stepStyle = {
  "& .Mui-active": {
    "& .MuiStepIcon-root": {
      color: "#fbfbfc",
      border: "2.5px solid #008849",
      borderRadius: "50%",
      height: "35px",
      width: "35px",
    },
    "& .MuiStepConnector-line": {
      borderColor: "#008849",
    },
    "& .MuiStepIcon-text": {
      fill: "#008849",
      fontWeight: "bold",
    },
  },

  "& .Mui-completed": {
    "& .MuiStepIcon-root": {
      color: "#008849",
      border: "none",
      borderRadius: "50%",
      height: "35px",
      width: "35px",
    },
    "& .MuiStepConnector-line": {
      borderColor: "#008849",
    },
  },

  "& .MuiStepConnector-line": {
    borderColor: "#BFDAD1",
    borderWidth: "2px",
    width: "100%",
  },
  "& .MuiStepIcon-root": {
    color: "#fbfbfc",
    border: "2.5px solid #BFDAD1",
    borderRadius: "50%",
    height: "35px",
    width: "35px",
  },
  "& .MuiStepIcon-text": {
    fill: "#727472",
    fontWeight: "bold",
  },
  "& .MuiStepLabel-iconContainer": {
    padding: "0px",
  },
  "& .MuiStep-root": {
    padding: "0px",
  },
};

export default function HorizontalLinearStepper() {
  const wrapper = "w-full ss:w-[600px] sm:w-[700px] px-[30px] sm:px-0";

  const { currentStep, setCurrentStep } = useContext(multiStepContext);

  const handleNextStep = useCallback(
    async (validateStep) => {
      const isValid = await validateStep();
      if (isValid) {
        setCurrentStep((prevStep) => prevStep + 1);
      }
    },
    [setCurrentStep]
  );

  function showStep(step) {
    switch (step) {
      case 1:
        return (
          <FirstStep
            onContinue={(validateStep) => handleNextStep(validateStep)}
          />
        );
      case 2:
        return (
          <SecondStep
            onContinue={(validateStep) => handleNextStep(validateStep)}
          />
        );
      case 3:
        return (
          <ThirdStep
            onContinue={(validateStep) => handleNextStep(validateStep)}
          />
        );
      case 4:
        return (
          <FourthStep
            onContinue={(validateStep) => handleNextStep(validateStep)}
          />
        );
      case 5:
        return <FifthStep />;
      default:
        return null;
    }
  }

  return (
    <div>
      <div
        className={`${wrapper} fixed right-[50%] translate-x-1/2 top-[90px] z-10`}
      >
        <Stepper activeStep={currentStep - 1} sx={stepStyle}>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel></StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      {showStep(currentStep)}
    </div>
  );
}
