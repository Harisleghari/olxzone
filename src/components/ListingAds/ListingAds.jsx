/* eslint-disable jsx-a11y/anchor-is-valid */
import "./listingads.css";
import ListingCard from "../ListingCard/ListingCard.jsx";

const ListingAds = () => {
  return (
    <div className="listing-ads-div">
      <div className="listing-div-a-1 listing-div-a-2 listing-div-a-3 listing-div-a-4">
        <div className="listing-div-a-1 below-btn-a below-btn-b listing-div-a-2">
          <div className="ads-count" aria-label="Ads count">
            10,000+ ads
          </div>
          <div className="listing-div-a-1 view-side">
            <a href="#">
              <div className="listing-div-a-1 view-side-a listing-div-a-2">
                <div className="listing-div-a-1 view-side-div-a">
                  <input
                    type="checkbox"
                    className="view-side-checkbox"
                    readonly=""
                  />
                  <label className="label-view-side">
                    <span className="view-side-span-a">Only with photos</span>
                  </label>
                </div>
              </div>
            </a>
            <div className="listing-div-a-1 f9 listing-div-a-2">
              <span className="view-side-span-a view-side-span-b view-side-span-c">
                View
              </span>
              <button className="span-btn-a span-btn-b">
                <img
                  src="https://www.olx.com.pk/assets/iconList_noinline.fc368d8e5a57a18cef128d2179dc9b51.svg"
                  alt="List layout"
                />
              </button>
              <button className="span-btn-a span-btn-b">
                <img
                  src="https://www.olx.com.pk/assets/iconGrid_noinline.20d3115f90d4e01862afb7d21be83420.svg"
                  alt="Grid layout"
                />
              </button>
              <button className="span-btn-a span-btn-b">
                <img
                  src="https://www.olx.com.pk/assets/iconGallery_noinline.0812d3e7194bb21f539ef9e77bdd3a1c.svg"
                  alt="Gallery layout"
                />
              </button>
            </div>
            <div className="listing-div-a-1 short-a listing-div-a-2">
              <button className="span-btn-a">
                <span className="view-side-span-a view-side-span-b view-side-span-c">
                  Sort by:{" "}
                </span>
                <span className="view-side-span-a">Newly listed</span>
                <img
                  src="https://www.olx.com.pk/assets/iconArrowDown_noinline.ec05eae7013321c193965ef15d4e2174.svg"
                  alt="Sort options dropdown"
                  className="drop-down-a"
                />
              </button>
              <div></div>
            </div>
          </div>
        </div>
        <ul className="ul-div-a ul-div-b">
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
        </ul>
      </div>
    </div>
  );
};

export default ListingAds;
