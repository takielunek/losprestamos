import Navbar from "../components/Steps/Navbar/Navbar";
import HorizontalLinearStepper from "../components/Steps/Stepper/HorizontalLinearStepper";
import Footer from "../components/Steps/Footer/Footer";
import { StepperContext } from "@mui/material";
import StepContext from "../components/Steps/StepContext";

const StepperPage = () => {
  return (
    <StepContext>
      <StepperContext.Provider value={{}}>
        <Navbar />
        <HorizontalLinearStepper />
        <Footer />
      </StepperContext.Provider>
    </StepContext>
  );
};
export default StepperPage;