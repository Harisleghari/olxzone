import "./homepage.css";
// import {Link} from "react-router-dom";
import Header from "../Header/Header.jsx";
import MainCategories from "../MainCategories/MainCategories.jsx";
import MainAdd from "../MainAd/MainAd.jsx";
import AdPlacementTop from "../AdPlacementTop/AdPlacementTop.jsx";
import FreshRecommendation from "../FreshRecommendation/FreshRecommendation.jsx";
import AdPlacementBottom from "../AdPlacementBottom/AdPlacementBottom.jsx";
import TryApp from "../TryApp/TryApp.jsx";
import Footer from "../Footer/Footer.jsx";

const HomePage = () => {
  return (
    <>
      <Header />
      <MainCategories />
      <MainAdd />
      <AdPlacementTop />
      <FreshRecommendation />
      <AdPlacementBottom />
      <TryApp />
      <Footer />
    </>

    // <>
    //  <h1>Home page</h1>
    //     <ul>
    //         <li><Link to="/" >Home</Link></li>
    //         <li><Link to="/listing" >Listing</Link></li>
    //         <li><Link to="/list" >List</Link></li>
    //     </ul>
    // </>
  );
};

export default HomePage;
