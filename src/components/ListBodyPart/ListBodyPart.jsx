import "./listbodypart.css";
import ListBodyLeftPart from "../ListBodyLeftPart/ListBodyLeftPart.jsx";
import ListBodyRightPart from "../ListBodyRightPart/ListBodyRightPart.jsx"

const ListBodyPart = () => {
    return (
        <div className="list-body-part-div-1-a">
        <ListBodyLeftPart />
        <ListBodyRightPart />
        </div>
    );
}

export default ListBodyPart;