/* eslint-disable react-hooks/exhaustive-deps */
import "./listpage.css";
import Header from "../Header/Header.jsx";
import MainCategories from "../MainCategories/MainCategories.jsx";
import Footer from "../Footer/Footer.jsx";
import ListHeaderPath from "../ListHeaderPath/ListHeaderPath.jsx";
import ListBodyPart from "../ListBodyPart/ListBodyPart";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios"
import Loader from "../Loader/Loader";

const ListPage = (props) => {
    const [detailList, setDetailList] = useState({})
    let [isLoding, setIsLoading] = useState(true)

    // Get the Id param from the URL.
    const { id } = useParams();
    const product = id;

  useEffect(() => {

    axios.get("https://fakestoreapi.com/products/" + product)
    .then(response => {
      setDetailList(response.data);
      setIsLoading(isLoding=false);
   })
   .catch((e) => console.log(e));
  }, [product]);


    return (
      <div>
      {isLoding? <Loader /> : <div>
      <header>
            <Header />
            <MainCategories />
            <div className="wallpaper-ad-body-1-a wallpaper-ad-body-1-b">
            <div className="wallpaper-ad-body-1-a wallpaper-ad-body-1-b">
            <div className="wallpaper-ad-body-2-a wallpaper-ad-body-2-b" margin>
            <ListHeaderPath />
            <ListBodyPart detailList={detailList}/>
            </div>
            </div>
            </div>
            <Footer />
        </header>
      </div>}
    </div>


      
        
    );
};

export default  ListPage;