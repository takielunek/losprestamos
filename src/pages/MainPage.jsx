import Navbar from "../components/MainPage/Navbar/Navbar";
import Header from "../components/MainPage/Header/Header";
import AboutUs from "../components/MainPage/AboutUs/AboutUs";
import Loan from "../components/MainPage/Loan/Loan";
import Opinion from "../components/MainPage/Opinion/Opinion";
import Footer from "../components/MainPage/Footer/Footer";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Loan />
      <Opinion />
      <Footer />
    </div>
  );
};

export default MainPage;
