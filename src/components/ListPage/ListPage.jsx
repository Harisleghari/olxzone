import "./listpage.css";
import Header from "../Header/Header.jsx";
import MainCategories from "../MainCategories/MainCategories.jsx";
import Footer from "../Footer/Footer.jsx";
import ListHeaderPath from "../ListHeaderPath/ListHeaderPath.jsx";
import ListBodyPart from "../ListBodyPart/ListBodyPart";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

const ListPage = (props) => {
    const [detailList, setDetailList] = useState({})

    // Get the Id param from the URL.
    const { id } = useParams();
    const product = id;

  useEffect(() => {

    axios.get("https://fakestoreapi.com/products/" + product)
    .then(response => {
      setDetailList(response.data);
   })
   .catch((e) => console.log(e));
  }, [product]);


    return (
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
        
    );
};

export default  ListPage;