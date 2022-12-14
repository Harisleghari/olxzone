/* eslint-disable jsx-a11y/anchor-is-valid */
import "./listheaderpath.css";

const ListHeaderPath = () => {
  return (
    <div className="list-header-div">
      <div className="bread-crumb" aria-label="Breadcrumb">
        <ul
          itemscope=""
          itemtype="https://schema.org/BreadcrumbList"
          className="list-ul"
        >
          <li
            itemscope=""
            itemprop="itemListElement"
            itemtype="https://schema.org/ListItem"
            className="list-li"
          >
            <a href="/" itemprop="item" title="Home" className="home-path">
              Home
              <meta itemprop="name" content="Home" />
            </a>
            <meta itemprop="position" content="1" />
          </li>
          <li className="home-path home-path-a">/</li>
          <li
            itemscope=""
            itemprop="itemListElement"
            itemtype="https://schema.org/ListItem"
            className="list-li"
          >
            <a
              href="#"
              itemprop="item"
              data-testid="breadcrumbSearchLink"
              title="Property for Sale"
              className="home-path"
            >
              Property for Sale
              <meta itemprop="name" content="Property for Sale" />
            </a>
            <meta itemprop="position" content="2" />
          </li>
          <li className="home-path home-path-a">/</li>
          <li
            itemscope=""
            itemprop="itemListElement"
            itemtype="https://schema.org/ListItem"
            className="list-li"
          >
            <a
              href="#"
              itemprop="item"
              data-testid="breadcrumbSearchLink"
              title="Houses"
              className="home-path"
            >
              Houses
              <meta itemprop="name" content="Houses" />
            </a>
            <meta itemprop="position" content="3" />
          </li>
          <li className="home-path home-path-a">/</li>
          <li
            itemscope=""
            itemprop="itemListElement"
            itemtype="https://schema.org/ListItem"
            className="list-li"
          >
            <a
              href="#"
              itemprop="item"
              data-testid="breadcrumbSearchLink"
              title="Houses in Islamabad Capital Territory"
              className="home-path"
            >
              Houses in Islamabad Capital Territory
              <meta
                itemprop="name"
                content="Houses in Islamabad Capital Territory"
              />
            </a>
            <meta itemprop="position" content="4" />
          </li>
          <li className="home-path home-path-a">/</li>
          <li
            itemscope=""
            itemprop="itemListElement"
            itemtype="https://schema.org/ListItem"
            className="list-li"
          >
            <a
              href="#"
              itemprop="item"
              data-testid="breadcrumbSearchLink"
              title="Houses in Islamabad"
              className="home-path"
            >
              Houses in Islamabad
              <meta itemprop="name" content="Houses in Islamabad" />
            </a>
            <meta itemprop="position" content="5" />
          </li>
          <li className="home-path home-path-a">/</li>
          <li
            itemscope=""
            itemprop="itemListElement"
            itemtype="https://schema.org/ListItem"
            className="list-li"
          >
            <a
              href="#"
              itemprop="item"
              data-testid="breadcrumbSearchLink"
              title="Houses in Top City 1"
              className="home-path"
            >
              Houses in Top City 1
              <meta itemprop="name" content="Houses in Top City 1" />
            </a>
            <meta itemprop="position" content="6" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ListHeaderPath;
