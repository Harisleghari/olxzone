import "./listpage.css";
import Header from "../Header/Header.jsx";
import MainCategories from "../MainCategories/MainCategories.jsx";
import Footer from "../Footer/Footer.jsx";
import ListHeaderPath from "../ListHeaderPath/ListHeaderPath.jsx";
import ListBodyPart from "../ListBodyPart/ListBodyPart";

const ListPage = () => {
    return (
        <header>
            <Header />
            <MainCategories />
            <div className="wallpaper-ad-body-1-a wallpaper-ad-body-1-b">
            <div className="wallpaper-ad-body-1-a wallpaper-ad-body-1-b">
            <div className="wallpaper-ad-body-2-a wallpaper-ad-body-2-b" margin>
            <ListHeaderPath />
            <ListBodyPart />
            </div>
            </div>
            </div>
            <Footer />
        </header>
        
    );
};

export default  ListPage;