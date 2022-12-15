/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
// import CheckBox from "../CheckBox/CheckBox";
import "./header.css";
import {Link} from "react-router-dom";

const Header = () => {
  const [mode, setMode] = useState(true);

  const clickHandle = () => {
    setMode(!mode);
  }

  return (
    <header className="header-a">
      <div className="header-div-a-1 header-div-a-2">
        <div classNameName="header-div-a-logo">
          <Link to="/" className="header-div-a-logo-1">
            <svg
              height="20"
              viewBox="0 0 36.289 20.768"
              alt="Olx logo"
              className="svg-logo-a"
            >
              <path d="M18.9 20.77V0h4.93v20.77zM0 10.39a8.56 8.56 0 1 1 8.56 8.56A8.56 8.56 0 0 1 0 10.4zm5.97-.01a2.6 2.6 0 1 0 2.6-2.6 2.6 2.6 0 0 0-2.6 2.6zm27 5.2l-1.88-1.87-1.87 1.88H25.9V12.3l1.9-1.9-1.9-1.89V5.18h3.27l1.92 1.92 1.93-1.92h3.27v3.33l-1.9 1.9 1.9 1.9v3.27z"></path>
            </svg>
          </Link>
        </div>
        <a href="#" className="header-div-a-logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="88.9"
            height="33"
            alt="OLX Motors"
            className="svg-motors-a"
          >
            <defs>
              <linearGradient
                id="a"
                x1=".5"
                x2=".5"
                y2="1"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stop-color="#ddd"></stop>
                <stop offset="1" stop-color="#fff"></stop>
              </linearGradient>
            </defs>
            <path
              stroke="rgba(0,0,0,0)"
              d="M40 20.5h1v-6.2l3 6.2h.6l2.8-6.2v6.2h1v-8.3h-1L44.1 19l-3-6.8H40zm18.3-4.2A4.1 4.1 0 0 0 54 12a4.1 4.1 0 0 0-4.2 4.3 4.1 4.1 0 0 0 4.2 4.3 4.1 4.1 0 0 0 4.2-4.3zm-7.3 0a3 3 0 0 1 3-3.3 3 3 0 0 1 3.2 3.3 3 3 0 0 1-3 3.3 3 3 0 0 1-3.2-3.3zm8.2-3.3h2.3v7.5h1V13H65v-1h-5.7zm15 3.3A4.1 4.1 0 0 0 70 12a4.1 4.1 0 0 0-4.2 4.3 4.1 4.1 0 0 0 4.2 4.3 4.1 4.1 0 0 0 4.2-4.3zm-7.2 0a3 3 0 0 1 3-3.3 3 3 0 0 1 3 3.3 3 3 0 0 1-3 3.3 3 3 0 0 1-3-3.3zm13.2-1.7c0 1-.6 1.6-1.8 1.6h-1.6V13h1.6c1.2 0 1.8.6 1.8 1.6zM75.7 12v8.4h1V17H78l2 3.4h1.3l-2-3.5a2.4 2.4 0 0 0 2-2.4c0-1.4-1-2.5-3-2.5zm12.7 6c0-3-4.5-1.7-4.5-3.8 0-1 .7-1.4 1.6-1.4a1.5 1.5 0 0 1 1.6 1.2h1.2a2.5 2.5 0 0 0-2.7-2.1c-1.7 0-2.8 1-2.8 2.3 0 3 4.5 1.7 4.5 4 0 .7-.6 1.3-1.7 1.3a1.5 1.5 0 0 1-1.7-1.4h-1.2c0 1.4 1.3 2.4 3 2.4a2.5 2.5 0 0 0 2.7-2.4z"
            ></path>
            <path
              fill="url(#a)"
              d="M0 16.5a16.5 16.5 0 1 1 33 0 16.5 16.5 0 0 1-33 0z"
              opacity=".6"
            ></path>
            <path d="M24.7 13.5a1.1 1.1 0 0 0-1.4-.7l-.6.2-1-2.2-.4-.1a16 16 0 0 0-4.8-.7 12 12 0 0 0-4.3.7l-.3.1-1 2.3h-.5a1.1 1.1 0 0 0-.6 2v.2a4 4 0 0 0-.4 1.5v4a2.1 2.1 0 0 0 0 .6.7.7 0 0 0 .8.5h1.6a.7.7 0 0 0 .8-.5 2.1 2.1 0 0 0 0-.7v-.3a47.1 47.1 0 0 0 8.3 0v.3a2.1 2.1 0 0 0 0 .7.7.7 0 0 0 .8.5h1.6a.7.7 0 0 0 .7-.5 2.1 2.1 0 0 0 .1-.7v-4a3.7 3.7 0 0 0-.4-1.5V15h.3a1.1 1.1 0 0 0 .7-1.5zm-12.2-2.1a11.3 11.3 0 0 1 4-.6 15.2 15.2 0 0 1 4.6.6l.9 1.8a17.6 17.6 0 0 1-4.3.4H17a28.2 28.2 0 0 1-5.4-.3zm-.6 9.3a2.2 2.2 0 0 1 0 .4h-1.7a2.2 2.2 0 0 1 0-.4V20a1 1 0 0 0 .3 0l1.4.2v.4zm11.4 0a2.2 2.2 0 0 1 0 .4h-1.6a2.2 2.2 0 0 1 0-.4v-.4H23a1 1 0 0 0 .4-.2zm.5-6.5l-1.2.4.5 1a3 3 0 0 1 .3 1.2V18l-.1.7c0 .3-.2.7-.5.7-3 .3-4.5.5-6 .5s-3-.2-6.2-.5c-.2 0-.3-.3-.4-.6V18a17 17 0 0 1 0-1 3.2 3.2 0 0 1 .3-1.3l.5-1-1-.2a.3.3 0 0 1-.2-.4.3.3 0 0 1 .4-.3l1.1.4a23.6 23.6 0 0 0 5 .3h1.4a17.9 17.9 0 0 0 4.6-.5h.3l1-.4a.3.3 0 0 1 .4.3.3.3 0 0 1-.2.4z"></path>
            <path d="M12 16a1.2 1.2 0 1 0 1.1 1.2A1.2 1.2 0 0 0 12 16zm0 1.6a.4.4 0 1 1 .3-.4.4.4 0 0 1-.4.4zm9.6-1.6a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2zm0 1.6a.4.4 0 1 1 .5-.4.4.4 0 0 1-.5.4zm-7.8.2h6v.8h-6z"></path>
          </svg>
        </a>
        <a
          href="#"
          className="header-div-a-logo"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="97.25"
            height="33"
            alt="OLX Property"
            className="svg-motors-a"
          >
            <defs>
              <linearGradient
                id="a"
                x1=".5"
                x2=".5"
                y2="1"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stop-color="#ddd"></stop>
                <stop offset="1" stop-color="#fff"></stop>
              </linearGradient>
            </defs>
            <path
              stroke="rgba(0,0,0,0)"
              d="M41.1 16.64v-3.07h1.6c1.25 0 1.78.58 1.78 1.55 0 .94-.53 1.52-1.78 1.52zm4.5-1.52c0-1.37-.93-2.45-2.9-2.45H40v8.36h1.1v-3.49h1.6c2.08 0 2.9-1.15 2.9-2.42zm5.82.01c0 .94-.54 1.6-1.77 1.6h-1.6v-3.16h1.6c1.25 0 1.77.61 1.77 1.57zm-4.47-2.46v8.36h1.1v-3.42h1.31l2 3.42h1.3l-2.1-3.5a2.36 2.36 0 0 0 2-2.4c0-1.36-.94-2.45-2.9-2.45zm15.3 4.18a4.12 4.12 0 0 0-4.2-4.28 4.13 4.13 0 0 0-4.2 4.28 4.13 4.13 0 0 0 4.2 4.27 4.12 4.12 0 0 0 4.2-4.27zm-7.3 0a3.05 3.05 0 0 1 3.1-3.33 3.05 3.05 0 0 1 3.07 3.33 3.06 3.06 0 0 1-3.08 3.32 3.06 3.06 0 0 1-3.09-3.32zm9.82-.2v-3.08h1.6c1.25 0 1.78.58 1.78 1.55 0 .94-.53 1.52-1.77 1.52zm4.5-1.53c0-1.36-.93-2.44-2.9-2.44h-2.7v8.35h1.1v-3.49h1.6c2.08 0 2.9-1.15 2.9-2.42zm5.85-2.46h-4.5v8.37h4.5v-.9h-3.4v-2.88h3.04v-.9h-3.04v-2.8h3.4zm6.14 2.48c0 .93-.54 1.6-1.78 1.6h-1.6v-3.17h1.6c1.25 0 1.78.61 1.78 1.57zm-4.48-2.47v8.36h1.1v-3.42h1.32l1.98 3.42h1.3l-2.1-3.5a2.36 2.36 0 0 0 2-2.4c0-1.36-.94-2.45-2.9-2.45zm6.78.9h2.29v7.46h1.1v-7.47h2.27v-.89h-5.66zm9.04 4.3v3.16h1.1v-3.15l2.72-5.2h-1.2l-2.07 4.23-2.07-4.24h-1.2z"
            ></path>
            <path
              fill="url(#a)"
              d="M0 16.5a16.5 16.5 0 1 1 33 0 16.5 16.5 0 0 1-33 0z"
              opacity=".57"
            ></path>
            <path d="M25.03 21.92v-9.35l-4.99-1.66v1.05l4 1.33v8.59h-5V7.85h-8.38v14.08h-.4v1h15.17v-1zm-6.98-11.68v11.68h-6.4V8.84h6.4z"></path>
            <path d="M15.17 10.3h1.61v.8h-1.6zm-2.42 0h1.6v.8h-1.6zm2.42 1.6h1.61v.81h-1.6zm-2.42 0h1.6v.81h-1.6zm2.42 2.42h1.61v.81h-1.6zm-2.42 0h1.6v.81h-1.6zm2.42 1.62h1.61v.8h-1.6zm-2.42 0h1.6v.8h-1.6zm2.42 2.42h1.61v.8h-1.6zm-2.42 0h1.6v.8h-1.6zm8.87-4.04h.8v.81h-.8zm-1.62 0h.8v.81H20zm1.62 1.62h.8v.8h-.8zm-1.62 0h.8v.8H20zm1.62 2.42h.8v.8h-.8zm-1.62 0h.8v.8H20z"></path>
          </svg>
        </a>
      </div>
      <div className="header-div-a-1 header-div-b-2">
        <div className="main-logo">
          <Link to="/">
            <svg
              height="20"
              viewBox="0 0 36.289 20.768"
              alt="Olx logo"
              className="svg-main-logo"
            >
              <path d="M18.9 20.77V0h4.93v20.77zM0 10.39a8.56 8.56 0 1 1 8.56 8.56A8.56 8.56 0 0 1 0 10.4zm5.97-.01a2.6 2.6 0 1 0 2.6-2.6 2.6 2.6 0 0 0-2.6 2.6zm27 5.2l-1.88-1.87-1.87 1.88H25.9V12.3l1.9-1.9-1.9-1.89V5.18h3.27l1.92 1.92 1.93-1.92h3.27v3.33l-1.9 1.9 1.9 1.9v3.27z"></path>
            </svg>
          </Link>
        </div>
        <div className="header-inp-location" aria-label="Location input">
          <div>
            <div className="header-inp-location-div-b-1 header-inp-location-div-b-2">
              <div className="header-inp-location-search-icon-1 header-inp-location-search-icon-2 header-inp-location-search-icon-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 1024 1024"
                  className="svg-main-inp-a"
                >
                  <path d="M448 725.33c-152.92 0-277.33-124.41-277.33-277.33S295.08 170.67 448 170.67 725.33 295.08 725.33 448 600.92 725.33 448 725.33zm436.44 98.78v.02L732.52 672.19c48.77-61.78 78.15-139.54 78.15-224.19 0-199.98-162.7-362.67-362.67-362.67S85.33 248.03 85.33 448c0 199.98 162.69 362.67 362.67 362.67 84.63 0 162.41-29.38 224.17-78.15l206.14 206.15h60.36v-60.33l-54.23-54.23z"></path>
                </svg>
              </div>
              <input
                type="text"
                spellcheck="false"
                className="input-location-a"
                autoComplete="location-search"
                placeholder="Search city, area or locality"
              />
              <div className="input-location-drop-a input-location-drop-b">
                <img
                  src="https://www.olx.com.pk/assets/iconArrowDown_noinline.ec05eae7013321c193965ef15d4e2174.svg"
                  alt="Dropdown trigger"
                  className="dropdown-trigger-a"
                  onClick = {clickHandle}
                />
              </div>
            </div>
            <div className="location-dropdown" aria-label="Locations Dropdown" style={mode? {display: "none"}: {display:"block"}}>
            <div className="current-location-div-a current-location-div-b current-location-div-c">
              <div className="current-location-div-a-1 current-location-div-b-1 current-location-div-c-1">
                <img src="https://www.olx.com.pk/assets/iconCurrentLocation_noinline.6acc646ec0e4ecdee696b5588b92c859.svg" alt="icon current location" />
                <div className="current-location-text-wrap">
                <span className="current-location-text-wrap-span-a current-location-text-wrap-span-b">Use current location</span>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="find-bar">
          <div className="find-bar-a">
            <div
              aria-label="Search input"
              className="find-bar-search-a find-bar-search-b"
            >
              <div className="find-bar-search-c">
                <div className="find-bar-search-d find-bar-search-e">
                  <input
                    type="search"
                    spellcheck="false"
                    className="find-bar-search-inp"
                    autoComplete="free-text-search"
                    placeholder="Find Cars, Mobile Phones and more..."
                  />
                  {/* <CheckBox /> */}
                </div>
                
              </div>
              <button
                aria-label="Search"
                className="find-bar-search-btn-a find-bar-search-btn-b"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 1024 1024"
                  className=""
                >
                  <path d="M448 725.33c-152.92 0-277.33-124.41-277.33-277.33S295.08 170.67 448 170.67 725.33 295.08 725.33 448 600.92 725.33 448 725.33zm436.44 98.78v.02L732.52 672.19c48.77-61.78 78.15-139.54 78.15-224.19 0-199.98-162.7-362.67-362.67-362.67S85.33 248.03 85.33 448c0 199.98 162.69 362.67 362.67 362.67 84.63 0 162.41-29.38 224.17-78.15l206.14 206.15h60.36v-60.33l-54.23-54.23z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="login-main-a">
          <div>
          <Link to="#">
            <button
              aria-label="Login"
              className="login-main-btn-a login-main-btn-b"
            >
              <span className="login-main-btn-span-a">Login</span>
            </button>
            </Link>
          </div>
        </div>
        <div className="header-sell">
        <Link to="/postad">
          <button title="Sell" className="header-sell-a">
          
            <img
              src="https://www.olx.com.pk/assets/iconSellBorder_noinline.d9eebe038fbfae9f90fd61d971037e02.svg"
              className=""
              alt="Sell-img"
            />
            <div className="header-sell-c">
              <img
                src="https://www.olx.com.pk/assets/iconPlusSell_noinline.75fc7ea23e80b50447cf5757d8ef083a.svg"
                className="header-sell-img-b"
                alt="lmg-sell"
              />
              <span className="header-sell-span-a header-sell-span-b header-sell-span-c">
                Sell
              </span>
            </div>
          </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
