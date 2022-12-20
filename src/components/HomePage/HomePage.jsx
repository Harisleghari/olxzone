import "./homepage.css";
// import {Link} from "react-router-dom";
import Header from "../Header/Header.jsx";
import MainCategories from "../MainCategories/MainCategories.jsx";
import MainAdd from "../MainAd/MainAd.jsx";
import FreshRecommendation from "../FreshRecommendation/FreshRecommendation.jsx";
import TryApp from "../TryApp/TryApp.jsx";
import Footer from "../Footer/Footer.jsx";

const HomePage = (props) => {
  return (
    <>
      <Header />
      <MainCategories/>
      <MainAdd />
      <FreshRecommendation/>
      <TryApp />
      <Footer />
    </>
  );
};

export default HomePage;
