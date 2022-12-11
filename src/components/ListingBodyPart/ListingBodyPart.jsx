import "./listingbodypart.css";
import ListingFilter from "../ListingFilter/ListingFilter.jsx";
import ListingAds from "../ListingAds/ListingAds.jsx"

const ListingBodyPart = () => {
    return (
        <div className="listing-body-part-div-1-a listing-body-part-div-1-b listing-body-part-div-1-c">
        <ListingFilter />
        <ListingAds />
        </div>
    );
}

export default ListingBodyPart;