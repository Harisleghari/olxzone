
import HomePage from "./components/HomePage/HomePage.jsx";
import ListingPage from "./components/ListingPage/ListingPage.jsx";
import ListPage from "./components/ListPage/ListPage.jsx";
import PostAd from "./components/PostAd/PostAd.jsx";
import LogIn from "./components/LogIn/LogIn.jsx";

import {BrowserRouter, Routes, Route} from "react-router-dom"; 

import "./App.css";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/listing" element={<ListingPage />}/>
        <Route path="/list" element={<ListPage />}/>
        <Route path="/postad" element={<PostAd />}/>
        <Route path="/login" element={<LogIn />}/>

      </Routes>
      </BrowserRouter>
    </div>

    // <div className="app-wraper-a app-wraper-b app-wraper-c app-wraper-d">
    
    // </div>
  );
}

export default App;
