/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import axios from "axios";
import "./maincategories.css";
import { Link } from "react-router-dom";
import camelCase from 'camelcase';
import Loader from "../Loader/Loader";

const MainCategories = () => {
  const [mode, setMode] = useState(true);
  const [categories, setCategories] = useState([]);
  let [isLoding, setIsLoading] = useState(true);

  const clickHandler = () => {
    setMode(!mode);
  };


  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories")
    .then(response => {
      setCategories(response.data);
      setIsLoading(isLoding=false);
   })
   .catch((e) => console.log(e));
  }, []);
  return (
    <>
      {isLoding ? <Loader /> :
      <div className="main-categories-div">
      <div className="main-categories-div-a main-categories-div-b">
      <div className="main-all-categories-div">
          <div className="main-all-categories-div-a" onClick={clickHandler}>
            All categories
            <img
              src="https://www.olx.com.pk/assets/iconArrowDown_noinline.ec05eae7013321c193965ef15d4e2174.svg"
              className="main-all-categories-div-a-img"
              style={mode ? null : { transform:"rotate(180deg)"}}
              alt="Dropdown arrow"
            />
          </div>
          <div>
            <div
              style={mode ? { display: "none" } : { display: "block" }}
              id="dropdown"
            >
              <div className="all-categories-dropdown-a" aria-label="Categories">
              {categories.map((item) => {
                return (
                  <>
                  <div className="all-categories-dropdown-a-1">
                  <div className="all-categories-dropdown-a-1-a">
                    <Link to={`/listing/${item}`} className="all-categories-dropdown-a-1-a-link">
                    {camelCase(item, {pascalCase: true})}
                    </Link>
                  </div>
                  {/* <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Mobile Phones
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Accessories
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Smart Watches
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Tablets
                    </a>
                  </div> */}
                </div>
                </>
                )
                
              })
              }



                {/* <div className="all-categories-dropdown-a-1">
                  <div className="all-categories-dropdown-a-1-a">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Mobiles
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Mobile Phones
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Accessories
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Smart Watches
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Tablets
                    </a>
                  </div>
                </div>
                <div className="all-categories-dropdown-a-1">
                  <div className="all-categories-dropdown-a-1-a">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Vehicles
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Cars
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Cars Accessories
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Spare Parts
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Buses, Vans &amp; Trucks
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Rickshaw &amp; Chingchi
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Tractors &amp; Trailers
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Cars on Installments
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Boats
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Other Vehicles
                    </a>
                  </div>
                </div>
                <div className="all-categories-dropdown-a-1">
                  <div className="all-categories-dropdown-a-1-a">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Property for Sale
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Land &amp; Plots
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Houses
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Apartments &amp; Flats
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Shops - Offices - Commercial Space
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Portions &amp; Floors
                    </a>
                  </div>
                </div>
                <div className="all-categories-dropdown-a-1">
                  <div className="all-categories-dropdown-a-1-a">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Property for Rent
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Houses
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Portions &amp; Floors
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Apartments &amp; Flats
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Shops - Offices - Commercial Space
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Rooms
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Roommates &amp; Paying Guests
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Vacation Rentals - Guest Houses
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Land &amp; Plots
                    </a>
                  </div>
                </div>
                <div className="all-categories-dropdown-a-1">
                  <div className="all-categories-dropdown-a-1-a">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Electronics &amp; Home Appliances
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Computers &amp; Accessories
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      TV - Video - Audio
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Other Home Appliances
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Generators, UPS &amp; Power Solutions
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Cameras &amp; Accessories
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Kitchen Appliances
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Games &amp; Entertainment
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Fridges &amp; Freezers
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      AC &amp; Coolers
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Washing Machines &amp; Dryers
                    </a>
                  </div>
                </div>
                <div className="all-categories-dropdown-a-1">
                  <div className="all-categories-dropdown-a-1-a">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Bikes
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Motorcycles
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Bicycles
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Spare Parts
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Scooters
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      ATV &amp; Quads
                    </a>
                  </div>
                </div>
                <div className="all-categories-dropdown-a-1">
                  <div className="all-categories-dropdown-a-1-a">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Business, Industrial &amp; Agriculture
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Other Business &amp; Industry
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Food &amp; Restaurants
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Medical &amp; Pharma
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Trade &amp; Industrial
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Construction &amp; Heavy Machinery
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="-#" className="all-categories-dropdown-a-1-a-link">
                      Business for Sale
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Agriculture
                    </a>
                  </div>
                </div>
                <div className="all-categories-dropdown-a-1">
                  <div className="all-categories-dropdown-a-1-a">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Services
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Other Services
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Education &amp; Classes
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Car Rental
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Maids &amp; Domestic Help
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Web Development
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Home &amp; Office Repair
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Electronics &amp; Computer Repair
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Travel &amp; Visa
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Event Services
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Farm &amp; Fresh Food
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Drivers &amp; Taxi
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Movers &amp; Packers
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Health &amp; Beauty
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Catering &amp; Restaurant
                    </a>
                  </div>
                </div>
                <div className="all-categories-dropdown-a-1">
                  <div className="all-categories-dropdown-a-1-a">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Jobs
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Online
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Part Time
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Other Jobs
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Marketing
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Sales
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Education
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Customer Service
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Domestic Staff
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Hotels &amp; Tourism
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      IT &amp; Networking
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Medical
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Human Resources
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Accounting &amp; Finance
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Manufacturing
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Clerical &amp; Administration
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Advertising &amp; PR
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Restaurants &amp; Hospitality
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Graphic Design
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Security
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Real Estate
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Content Writing
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="i#" className="all-categories-dropdown-a-1-a-link">
                      Engineering
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Delivery Riders
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Internships
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Architecture &amp; Interior Design
                    </a>
                  </div>
                </div>
                <div className="all-categories-dropdown-a-1">
                  <div className="all-categories-dropdown-a-1-a">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Animals
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Birds
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Hens &amp; Aseel
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Cats
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Dogs
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Livestock
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Pet Food &amp; Accessories
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Other Animals
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Fish &amp; Aquariums
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Horses
                    </a>
                  </div>
                </div>
                <div className="all-categories-dropdown-a-1">
                  <div className="all-categories-dropdown-a-1-a">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Furniture &amp; Home Decor
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Sofa &amp; Chairs
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Beds &amp; Wardrobes
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Home Decoration
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Other Household Items
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Tables &amp; Dining
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Office Furniture
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Garden &amp; Outdoor
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Painting &amp; Mirrors
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="-#" className="all-categories-dropdown-a-1-a-link">
                      Curtains &amp; Blinds
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Rugs &amp; Carpets
                    </a>
                  </div>
                </div>
                <div className="all-categories-dropdown-a-1">
                  <div className="all-categories-dropdown-a-1-a">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Fashion &amp; Beauty
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Clothes
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Watches
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Skin &amp; Hair
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Footwear
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Wedding
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Jewellery
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Accessories
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Other Fashion
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Make Up
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Lawn &amp; Pret
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Couture
                    </a>
                  </div>
                </div>
                <div className="all-categories-dropdown-a-1">
                  <div className="all-categories-dropdown-a-1-a">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Books, Sports &amp; Hobbies
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Other Hobbies
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Gym &amp; Fitness
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Sports Equipment
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Musical Instruments
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Books &amp; Magazines
                    </a>
                  </div>
                </div>
                <div className="all-categories-dropdown-a-1">
                  <div className="all-categories-dropdown-a-1-a">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Kids
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Toys
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Kids Accessories
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Kids Furniture
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Kids Bikes
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Prams &amp; Walkers
                    </a>
                  </div>
                  <div className="all-categories-dropdown-a-1-a-categories">
                    <a href="#" className="all-categories-dropdown-a-1-a-link">
                      Swings &amp; Slides
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>





        
        {categories.map((item => {
          return (
            <>
            <div className="horizontal-categories-list">
            <Link to={`/listing/${item}`} className="all-categories-dropdown-a-1-a-link">
            {camelCase(item, {pascalCase: true})}
          </Link>
            </div>
            </>
          )
        }))}

        {/* <div className="horizontal-categories-list">
            <Link to="/listing" className="all-categories-dropdown-a-1-a-link">
            Mobile Phones
          </Link>
        </div> 
        <div className="horizontal-categories-list">
          <Link to="/listing" className="all-categories-dropdown-a-1-a-link">
            Cars
          </Link>
        </div>
        <div className="horizontal-categories-list">
          <Link to="/listing" className="all-categories-dropdown-a-1-a-link">
            Motorcycles
          </Link>
        </div>
        <div className="horizontal-categories-list">
          <Link to="/listing" className="all-categories-dropdown-a-1-a-link">
            Houses
          </Link>
        </div>
        <div className="horizontal-categories-list">
          <Link to="/listing" className="all-categories-dropdown-a-1-a-link">
            TV - Video - Audio
          </Link>
        </div>
        <div className="horizontal-categories-list">
          <Link to="/listing" className="all-categories-dropdown-a-1-a-link">
            Tablets
          </Link>
        </div>
        <div className="horizontal-categories-list">
          <Link to="/listing" className="all-categories-dropdown-a-1-a-link">
            Land &amp; Plots
          </Link>
        </div> */}
      </div>
    </div> 
      }
    </>
  );
};

export default MainCategories;
