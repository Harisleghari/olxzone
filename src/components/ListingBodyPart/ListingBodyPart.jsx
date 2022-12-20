import "./listingbodypart.css";
import ListingFilter from "../ListingFilter/ListingFilter.jsx";
import ListingAds from "../ListingAds/ListingAds.jsx"

const ListingBodyPart = (props) => {
    return (
        <div className="listing-body-part-div-1-a listing-body-part-div-1-b listing-body-part-div-1-c">
        <ListingFilter categoryList={props.categoryList}/>
        <ListingAds categoryList={props.categoryList}/>
        </div>
    );
}

export default ListingBodyPart;