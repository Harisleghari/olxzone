/* eslint-disable jsx-a11y/anchor-is-valid */
import "./freshrecommendation.css";
import Card from "../Card/Card.jsx";
import LoadMore from "../LoadMore/LoadMore.jsx";
// import { useEffect, useState } from "react";
// import axios from "axios";

const FreshRecommendation = (props) => {
  // const [message, setMessage] = useState([]);

  //  useEffect(() => {
  //   axios.get("http://localhost:9000/sell")
  //   .then(response => {
  //   setMessage(response.data);
  //   console.log(response.data);
  //  });
  //           }, []);

  return (
    <div className="main-fresh-recommendation-wrap-a main-fresh-recommendation-wrap-b main-fresh-recommendation-wrap-c main-fresh-recommendation-wrap-d main-fresh-recommendation-wrap-e">
      <button className="main-back-to-top-btn-a main-back-to-top-btn-b main-back-to-top-btn-c">
        <img
          src="https://www.olx.com.pk/assets/backToTopIcon_noinline.7b82f4f094ade4510834eaf20d4ce5ab.svg"
          className="main-back-to-top-btn-img"
          alt="Icon arrow back to top"
        />
        <span className="main-back-to-top-btn-span">Back to top</span>
      </button>
      <div className="main-list-fresh-recom">
        <span className="main-list-fresh-recom-name-a">
          Fresh recommendations
        </span>
        <ul className="main-list-ul-a">
          {/* {message.map((items)=> {
          return (
            <h1>{items.title}</h1>
          );
        })} */}
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ul>
      </div>
      <LoadMore />
    </div>
  );
};

export default FreshRecommendation;
