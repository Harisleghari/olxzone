/* eslint-disable jsx-a11y/anchor-is-valid */
import "./listheaderpath.css";
// import {Link} from "react-router-dom";

const ListHeaderPath = () => {
  return (
    <div className="list-header-div">
      <div className="bread-crumb" aria_label="Breadcrumb">
        <ul itemType="https://schema.org/BreadcrumbList" className="list-ul">
          {/* <li
          
            itemProp="itemListElement"
            itemType="https://schema.org/ListItem"
            className="list-li"
          >
            <Link to="/" itemProp="item" title="Home" className="home-path">
              Home
              <meta itemProp="name" content="Home" />
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          <li className="home-path home-path-a">/</li> */}
          {/* <li
          
            itemProp="itemListElement"
            itemType="https://schema.org/ListItem"
            className="list-li"
          >
            <a
              href="#"
              itemProp="item"
              data_testid="breadcrumbSearchLink"
              title="Property for Sale"
              className="home-path"
            >
              Property for Sale
              <meta itemProp="name" content="Property for Sale" />
            </a>
            <meta itemProp="position" content="2" />
          </li> */}
          {/* <li className="home-path home-path-a">/</li>
          <li
          
            itemProp="itemListElement"
            itemType="https://schema.org/ListItem"
            className="list-li"
          >
            <a
              href="#"
              itemProp="item"
              data_testid="breadcrumbSearchLink"
              title="Houses"
              className="home-path"
            >
              Houses
              <meta itemProp="name" content="Houses" />
            </a>
            <meta itemProp="position" content="3" />
          </li>
          <li className="home-path home-path-a">/</li>
          <li
          
            itemProp="itemListElement"
            itemType="https://schema.org/ListItem"
            className="list-li"
          >
            <a
              href="#"
              itemProp="item"
              data_testid="breadcrumbSearchLink"
              title="Houses in Islamabad Capital Territory"
              className="home-path"
            >
              Houses in Islamabad Capital Territory
              <meta
                itemProp="name"
                content="Houses in Islamabad Capital Territory"
              />
            </a>
            <meta itemProp="position" content="4" />
          </li>
          <li className="home-path home-path-a">/</li>
          <li
          
            itemProp="itemListElement"
            itemType="https://schema.org/ListItem"
            className="list-li"
          >
            <a
              href="#"
              itemProp="item"
              data_testid="breadcrumbSearchLink"
              title="Houses in Islamabad"
              className="home-path"
            >
              Houses in Islamabad
              <meta itemProp="name" content="Houses in Islamabad" />
            </a>
            <meta itemProp="position" content="5" />
          </li>
          <li className="home-path home-path-a">/</li>
          <li
          
            itemProp="itemListElement"
            itemType="https://schema.org/ListItem"
            className="list-li"
          >
            <a
              href="#"
              itemProp="item"
              data_testid="breadcrumbSearchLink"
              title="Houses in Top City 1"
              className="home-path"
            >
              Houses in Top City 1
              <meta itemProp="name" content="Houses in Top City 1" />
            </a>
            <meta itemProp="position" content="6" />
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default ListHeaderPath;
