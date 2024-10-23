import AllRoutes from "./AllRoutes.jsx";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
    
  useEffect(() => {
    AOS.init({ duration: 1200 });
  });

  return (
    <div>
      <AllRoutes />
    </div>
  );
};

export default App;
