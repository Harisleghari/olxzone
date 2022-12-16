import "./card.css";
import { Link } from "react-router-dom";

const Card = () => {
    return (
        <li className="" aria-label="Listing">
            <article className="main-list-articles">
              <div className="main-list-articles-inside-div">
                <Link
                  to="/list"
                  title="original persian kitty&#x27;s"
                >
                  <div className="main-list-arcticles-anchor-inside-div"></div>
                </Link>
                <picture className="main-list-arcticles-images">
                  <img
                    role="presentation"
                    alt="original persian kitty&#x27;s"
                    title="original persian kitty&#x27;s"
                    aria-label="Cover photo"
                    src="https://img.freepik.com/premium-photo/red-persian-cat-with-leash-walking-yard_231786-3022.jpg?w=740"
                    className="main-list-articles-inside-div-images-1"
                  />
                </picture>
                <div className="main-list-articles-inside-div-images-1-simple main-list-articles-inside-div-images-2-simple"></div>
              </div>
              <div className="main-list-articles-inside-2nd-div">
                <Link
                  to="/list"
                  title="original persian kitty&#x27;s"
                >
                  <div className="main-list-arcticles-anchor-inside-div"></div>
                </Link>
                <div className="main-list-articles-inside-2nd-div-1">
                  <div className="main-list-articles-inside-2nd-div-1-a" aria-label="Title">
                    original persian kitty&#x27;s
                  </div>
                  <div className="main-list-articles-inside-2nd-div-price" aria-label="Price">
                    <span>Rs 16,500</span>
                  </div>
                  <Link
                    to="/list"
                    title="original persian kitty&#x27;s"
                  >
                    <div className="main-list-arcticles-anchor-inside-div"></div>
                  </Link>
                  <div className="main-list-articles-inside-2nd-div-1-b">
                    <div className="main-fresh-recommendation-wrap-a">
                      <img
                        src="https://www.olx.com.pk/assets/iconFavoriteUnselected_noinline.5767fec1cf12da79531e7c0b4a94f4e2.svg"
                        className="main-list-articles-inside-2nd-div-1-b-img"
                        alt="favoriteIconUnselected"
                      />
                    </div>
                  </div>
                </div>
                <div className="main-list-articles-inside-2nd-div-2">
                  <div className="main-list-articles-inside-2nd-div-2-a">
                    <span className="main-list-articles-inside-2nd-div-2-span" aria-label="Location">
                      Mughalpura, Lahore<span className="main-list-articles-inside-2nd-div-2-location">•</span>
                    </span>
                    <span className="main-list-articles-inside-2nd-div-2-span-b">
                      <span aria-label="Creation date">0 minutes ago</span>
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </li>
    )
}

export default Card;