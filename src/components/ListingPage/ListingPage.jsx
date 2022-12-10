import "./listingpage.css";
import Header from "../Header/Header.jsx";
import MainCategories from "../MainCategories/MainCategories.jsx";
// import ListingData from "../ListingData/ListingData";
import Footer from "../Footer/Footer.jsx";
import AdPlacementTop from "../AdPlacementTop/AdPlacementTop.jsx"
import ListingHeadPart from "../ListingHeadPart/ListingHeadPart.jsx";


const ListingPage = () => {
    return (
        <>
            <Header />
            <MainCategories />
            <header>
                <div class="wallpaper-ad-body" aria-label="Wallpaper ad body">
                    <div class="wallpaper-ad-body-1-a wallpaper-ad-body-1-b">
                    <div class="wallpaper-ad-body-2-a wallpaper-ad-body-2-b" margin>
                    <AdPlacementTop />
                    <div class="Listing-ad-page-whole-a Listing-ad-page-whole-b Listing-ad-page-whole-c Listing-ad-page-whole-d">
                    <ListingHeadPart />

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