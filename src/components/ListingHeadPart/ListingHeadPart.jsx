/* eslint-disable jsx-a11y/anchor-is-valid */
import "./listingheadpart.css";

const ListingHeadPart = () => {
  return (
    <div class="listing-head-part-div-1-a listing-head-part-div-1-b listing-head-part-div-1-c">
      <div class="listing-head-part-div-2">
        <div>
          <span class="listing-span-header-a listing-span-header-b">Popular Searches:</span>
          <ul class="ul-header">
            <li class="li-header">
              <a href="#" class="a-header">
                iphone
              </a>
            </li>
            <span class="listing-span-header-a listing-span-header-c">-</span>
            <li class="li-header">
              <a href="#" class="a-header">
                infinix
              </a>
            </li>
            <span class="listing-span-header-a listing-span-header-c">-</span>
            <li class="li-header">
              <a href="#" class="a-header">
                oppo
              </a>
            </li>
            <span class="listing-span-header-a listing-span-header-c">-</span>
            <li class="li-header">
              <a href="#" class="a-header">
                samsung
              </a>
            </li>
            <span class="listing-span-header-a listing-span-header-c">-</span>
            <li class="li-header">
              <a href="#" class="a-header">
                vivo
              </a>
            </li>
            <span class="listing-span-header-a listing-span-header-c">-</span>
            <li class="li-header">
              <a href="#" class="a-header">
                motorola
              </a>
            </li>
            <span class="listing-span-header-a listing-span-header-c">-</span>
            <li class="li-header">
              <a href="#" class="a-header">
                huawei
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="listing-head-part-div-3">
        <div class="listing-head-part-divs" aria-label="Breadcrumb">
          <ul
            itemscope=""
            itemtype="https://schema.org/BreadcrumbList"
            class="listing-ul-div-3"
          >
            <li
              itemscope=""
              itemprop="itemListElement"
              itemtype="https://schema.org/ListItem"
              class="listing-li-div-3"
            >
              <a href="/" itemprop="item" title="Home" class="anchor-div-of-header">
                Home
                <meta itemprop="name" content="Home" />
              </a>
              <meta itemprop="position" content="1" />
            </li>
            <li class="anchor-div-of-header anchor-div-of-header-a">/</li>
            <li
              itemscope=""
              itemprop="itemListElement"
              itemtype="https://schema.org/ListItem"
              class="listing-li-div-3"
            >
              <a
                href="#"
                itemprop="item"
                data-testid="breadcrumbSearchLink"
                title="Mobiles"
                class="anchor-div-of-header"
              >
                Mobiles
                <meta itemprop="name" content="Mobiles" />
              </a>
              <meta itemprop="position" content="2" />
            </li>
          </ul>
        </div>
      </div>
      <div class="listing-head-part-div-1-a listing-head-part-div-4">
        <h1 class="header-heading">Mobile Phones</h1>
      </div>
    </div>
  );
};

export default ListingHeadPart;
