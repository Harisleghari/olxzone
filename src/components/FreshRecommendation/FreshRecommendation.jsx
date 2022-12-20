/* eslint-disable jsx-a11y/anchor-is-valid */
import "./freshrecommendation.css";
import React, { useState, useEffect } from "react";
import { slice } from "lodash";
import Card from "../Card/Card.jsx";
import LoadMore from "../LoadMore/LoadMore.jsx";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
import axios from "axios";

const FreshRecommendation = (props) => {
  const [post, setPost] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [index, setIndex] = useState(12);
  const initialPosts = slice(post, 0, index);
  const loadMore = () => {
    setIndex(index + 4);
    console.log(index);
    if (index >= post.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setPost(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="main-fresh-recommendation-wrap-a main-fresh-recommendation-wrap-b main-fresh-recommendation-wrap-c main-fresh-recommendation-wrap-d main-fresh-recommendation-wrap-e">
      <ScrollToTopButton />
      <div className="main-list-fresh-recom">
        <span className="main-list-fresh-recom-name-a">
          Fresh recommendations
        </span>
        <ul className="main-list-ul-a">
          <Card initialPosts={initialPosts} />
        </ul>
        <LoadMore isCompleted={isCompleted} loadMore={loadMore} />
      </div>

  
    </div>
  );
};

export default FreshRecommendation;
