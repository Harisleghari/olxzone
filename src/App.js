
import HomePage from "./components/HomePage/HomePage.jsx";
import ListingPage from "./components/ListingPage/ListingPage.jsx";
import ListPage from "./components/ListPage/ListPage.jsx";
import PostAd from "./components/PostAd/PostAd.jsx";

import {BrowserRouter, Routes, Route} from "react-router-dom"; 


import "./App.css";


function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/listing" element={<ListingPage />}/>
        <Route path="/list" element={<ListPage />}/>
        <Route path="/postad" element={<PostAd />}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
