/* eslint-disable jsx-a11y/anchor-is-valid */
import "./listingcard.css";
import { Link } from "react-router-dom";

const ListingCard = (props) => {
    return (
      <>
      {props.initialPosts.map((items, index)=> {
        return (
          <li className="" ariaLabel="Listing" key={items.id}>
            <article className="article-a">
              <div className="article-div-a">
                <Link
                  to={`/list/${items.id}`}
                  title={items.title}
                >
                  <div className="article-div-b"></div>
                </Link>
                <picture className="pic-a">
                  <img
                    role="presentation"
                    alt={items.title}
                    title={items.title}
                    ariaLabel="Cover photo"
                    dataSrc={items.image}
                    className="img-ads"
                    src={items.image}
                    dataWasProcessed="true"
                  />
                </picture>
                <div className="last-div-a" ariaLabel="Featured">
                  <span className="featured-a">Featured</span>
                </div>
              </div>
              <div className="aeticle-last-div-a aeticle-last-div-b">
                <Link
                  to="/list"
                  title={items.title}
                >
                  <div className="article-div-b"></div>
                </Link>
                <div className="f3">
                  <div className="f3-div-a" ariaLabel="Title">
                    {items.title}
                  </div>
                  <div className="price-div-a" ariaLabel="Price">
                    <span>Rs {items.price}</span>
                  </div>
                  <Link
                    to="/list"
                    title={items.title}
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
                  {/* <div className="address-a">
                    <span className="address-a-span" ariaLabel="Location">
                      Sargodha, Punjab<span className="address-b-span">•</span>
                    </span>
                    <span className="address-c-span">
                      <span ariaLabel="Creation date">4 weeks ago</span>
                    </span>
                  </div> */}
                </div>
                <div className="address-a-div"></div>
              </div>
            </article>
          </li>
        )
      }
        
    )
      }
      </>
    )
}

export default ListingCard;