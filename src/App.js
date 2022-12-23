import HomePage from "./components/HomePage/HomePage.jsx";
import ListingPage from "./components/ListingPage/ListingPage.jsx";
import ListPage from "./components/ListPage/ListPage.jsx";
import PostAd from "./components/PostAd/PostAd.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listing/:category" element={<ListingPage />} />
        <Route path="/list/:id" element={<ListPage />} />
        <Route path="/postad" element={<PostAd />} />
      </Routes>
    </div>
  );
}

export default App;
