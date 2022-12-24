/* eslint-disable react-hooks/exhaustive-deps */
import "./listingpage.css";
import Header from "../Header/Header.jsx";
import MainCategories from "../MainCategories/MainCategories.jsx";
import Footer from "../Footer/Footer.jsx";
import ListingHeadPart from "../ListingHeadPart/ListingHeadPart.jsx";
import ListingBodyPart from "../ListingBodyPart/ListingBodyPart.jsx";
import Loader from "../Loader/Loader.jsx";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ListingPage = () => {
  const [categoryList, setCategoryList] = useState([]);
  let [isLoding, setIsLoading] = useState(true);
  let priceArray = categoryList.map((priceList) => priceList.price);
  let maxPrice = priceArray.reduce(
    (initialVal, curVal) => Math.max(initialVal, curVal),
    0
  );
  let minPrice = 0;

  // Get the category param from the URL.
  const { category } = useParams();
  const categoryName = category;

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/" + categoryName)
      .then((response) => {
        setCategoryList(response.data);
        setIsLoading((isLoding = false));
      })
      .catch((e) => console.log(e));
  }, [categoryName]);
  return (
    <>
      {isLoding ? (
        <Loader />
      ) : (
        <>
          <Header />
          <MainCategories />
          <header>
            <div className="wallpaper-ad-body" aria-label="Wallpaper ad body">
              <div className="wallpaper-ad-body-1-a wallpaper-ad-body-1-b">
                <div className="wallpaper-ad-body-2-a wallpaper-ad-body-2-b">
                  <div className="Listing-ad-page-whole-a Listing-ad-page-whole-b Listing-ad-page-whole-c Listing-ad-page-whole-d">
                    <ListingHeadPart categoryName={categoryName} />
                    <ListingBodyPart
                      categoryList={categoryList}
                      maxPrice={maxPrice}
                      minPrice={minPrice}
                    />
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </header>
        </>
      )}
    </>
  );
};

export default ListingPage;
