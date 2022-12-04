import Header from "./components/Header/Header.jsx";
import MainCategories from "./components/MainCategories/MainCategories.jsx";
import MainAdd from "./components/MainAd/MainAd.jsx";
import AdPlacementTop from "./components/AdPlacementTop/AdPlacementTop.jsx";
import FreshRecommendation from "./components/FreshRecommendation/FreshRecommendation.jsx";
import LoadMore from "./components/LoadMore/LoadMore.jsx";
import AdPlacementBottom  from "./components/AdPlacementBottom/AdPlacementBottom.jsx";
import TryApp from "./components/TryApp/TryApp.jsx";
import Footer from "./components/Footer/Footer.jsx";

import "./App.css";


function App() {
  return (
    <div className="app -wraper-a app -wraper-b app -wraper-c app -wraper-d">
      <Header/>
      <MainCategories />
      <MainAdd />
      <AdPlacementTop />
      <FreshRecommendation />
      <LoadMore />
      <AdPlacementBottom />
      <TryApp />
      <Footer />
    </div>
  );
}

export default App;
