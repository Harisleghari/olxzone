/* eslint-disable jsx-a11y/anchor-is-valid */
import "./listingcard.css";
import { Link } from "react-router-dom";

const ListingCard = () => {
    return (
        <li className="" aria-label="Listing">
            <article className="article-a">
              <div className="article-div-a">
                <Link
                  to="/list"
                  title="Iphone 13 pro max with box 256 GB  Non PTA (Sierra Blue)"
                >
                  <div className="article-div-b"></div>
                </Link>
                <picture className="pic-a">

                  <source
                    type="image/webp"
                    data-srcset="https://images.olx.com.pk/thumbnails/302118445-240x180.webp"
                    srcset="https://images.olx.com.pk/thumbnails/302118445-240x180.webp"
                  />
                  <img
                    role="presentation"
                    alt="Iphone 13 pro max with box 256 GB  Non PTA (Sierra Blue)"
                    title="Iphone 13 pro max with box 256 GB  Non PTA (Sierra Blue)"
                    aria-label="Cover photo"
                    data-src="https://images.olx.com.pk/thumbnails/302118445-240x180.jpeg"
                    className="img-ads"
                    src="https://images.olx.com.pk/thumbnails/302118445-240x180.jpeg"
                    data-was-processed="true"
                  />
                </picture>
                <div className="last-div-a" aria-label="Featured">
                  <span className="featured-a">Featured</span>
                </div>
              </div>
              <div className="aeticle-last-div-a aeticle-last-div-b">
                <Link
                  to="/list"
                  title="Iphone 13 pro max with box 256 GB  Non PTA (Sierra Blue)"
                >
                  <div className="article-div-b"></div>
                </Link>
                <div className="f3">
                  <div className="f3-div-a" aria-label="Title">
                    Iphone 13 pro max with box 256 GB Non PTA (Sierra Blue)
                  </div>
                  <div className="price-div-a" aria-label="Price">
                    <span>Rs 250,000</span>
                  </div>
                  <Link
                    to="/list"
                    title="Iphone 13 pro max with box 256 GB  Non PTA (Sierra Blue)"
                  >
                    <div className="article-div-b"></div>
                  </Link>
                  <div className="ef">
                    <div className="listing-div-a-1">
                      <img
                        src="https://www.olx.com.pk/assets/iconFavoriteUnselected_noinline.5767fec1cf12da79531e7c0b4a94f4e2.svg"
                        className="img-heart"
                        alt="favoriteIconUnselected"
                      />
                    </div>
                  </div>
                </div>
                <div className="address">
                  <div className="address-a">
                    <span className="address-a-span" aria-label="Location">
                      Sargodha, Punjab<span className="address-b-span">•</span>
                    </span>
                    <span className="address-c-span">
                      <span aria-label="Creation date">4 weeks ago</span>
                    </span>
                  </div>
                </div>
                <div className="address-a-div"></div>
              </div>
            </article>
          </li>
    )
}

export default ListingCard;