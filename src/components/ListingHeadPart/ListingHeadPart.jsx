/* eslint-disable jsx-a11y/anchor-is-valid */
import "./listingheadpart.css";

const ListingHeadPart = (props) => {
  return (
    <div className="listing-head-part-div-1-a listing-head-part-div-1-b listing-head-part-div-1-c">
      <div className="listing-head-part-div-2">
        {/* <div>
          <span className="listing-span-header-a listing-span-header-b">
            Popular Searches:
          </span>
          <ul className="ul-header">
            <li className="li-header">
              <a href="#" className="a-header">
                iphone
              </a>
            </li>
            <span className="listing-span-header-a listing-span-header-c">
              -
            </span>
            <li className="li-header">
              <a href="#" className="a-header">
                infinix
              </a>
            </li>
            <span className="listing-span-header-a listing-span-header-c">
              -
            </span>
            <li className="li-header">
              <a href="#" className="a-header">
                oppo
              </a>
            </li>
            <span className="listing-span-header-a listing-span-header-c">
              -
            </span>
            <li className="li-header">
              <a href="#" className="a-header">
                samsung
              </a>
            </li>
            <span className="listing-span-header-a listing-span-header-c">
              -
            </span>
            <li className="li-header">
              <a href="#" className="a-header">
                vivo
              </a>
            </li>
            <span className="listing-span-header-a listing-span-header-c">
              -
            </span>
            <li className="li-header">
              <a href="#" className="a-header">
                motorola
              </a>
            </li>
            <span className="listing-span-header-a listing-span-header-c">
              -
            </span>
            <li className="li-header">
              <a href="#" className="a-header">
                huawei
              </a>
            </li>
          </ul>
        </div> */}
      </div>
      <div className="listing-head-part-div-3">
        <div className="listing-head-part-divs" aria-label="Breadcrumb">
          {/* <ul
            itemscope=""
            itemtype="https://schema.org/BreadcrumbList"
            className="listing-ul-div-3"
          >
            <li
              itemscope=""
              itemprop="itemListElement"
              itemtype="https://schema.org/ListItem"
              className="listing-li-div-3"
            >
              <Link
                to="/"
                itemprop="item"
                title="Home"
                className="anchor-div-of-header"
              >
                Home
                <meta itemprop="name" content="Home" />
              </Link>
              <meta itemprop="position" content="1" />
            </li>
            <li className="anchor-div-of-header anchor-div-of-header-a">/</li>
            <li
              itemscope=""
              itemprop="itemListElement"
              itemtype="https://schema.org/ListItem"
              className="listing-li-div-3"
            >
              <a
                href="#"
                itemprop="item"
                data-testid="breadcrumbSearchLink"
                title="Mobiles"
                className="anchor-div-of-header"
              >
                Mobiles
                <meta itemprop="name" content="Mobiles" />
              </a>
              <meta itemprop="position" content="2" />
            </li>
          </ul> */}
        </div>
      </div>
      <div className="listing-head-part-div-1-a listing-head-part-div-4">
        <h1 className="header-heading">{props.categoryName.toUpperCase()}</h1>
      </div>
    </div>
  );
};

export default ListingHeadPart;
