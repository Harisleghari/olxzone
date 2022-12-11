import "./listingpage.css";
import Header from "../Header/Header.jsx";
import MainCategories from "../MainCategories/MainCategories.jsx";
import Footer from "../Footer/Footer.jsx";
import AdPlacementTop from "../AdPlacementTop/AdPlacementTop.jsx";
import ListingHeadPart from "../ListingHeadPart/ListingHeadPart.jsx";
import ListingBodyPart from "../ListingBodyPart/ListingBodyPart";

const ListingPage = () => {
  return (
    <>
      <Header />
      <MainCategories />
      <header>
        <div className="wallpaper-ad-body" aria-label="Wallpaper ad body">
          <div className="wallpaper-ad-body-1-a wallpaper-ad-body-1-b">
            <div className="wallpaper-ad-body-2-a wallpaper-ad-body-2-b" margin>
              <AdPlacementTop />
              <div className="Listing-ad-page-whole-a Listing-ad-page-whole-b Listing-ad-page-whole-c Listing-ad-page-whole-d">
                <ListingHeadPart />
                <ListingBodyPart />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </header>
    </>
  );
};

export default ListingPage;
