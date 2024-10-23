import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import StepperPage from "./pages/StepperPage";
import ContactPage from "./pages/ContactPage";
import CooperacionPage from "./pages/CooperacionPage";
import LookingForTheBestOfferPage from "./pages/LookingForTheBestOfferPage";
import Offers from "./pages/OffersPage";
import DoesNotExistPage from "./pages/DoesNotExistPage";


const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/stepper/:amount" element={<StepperPage />} />
        <Route path="/offer" element={<LookingForTheBestOfferPage />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/cooperacion" element={<CooperacionPage />} />
        <Route path="/exist" element={<DoesNotExistPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
