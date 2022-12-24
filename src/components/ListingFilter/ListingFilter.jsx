/* eslint-disable jsx-a11y/anchor-is-valid */
import "./listingfilter.css";
import {Link} from "react-router-dom"

const ListingFilter = (props) => {
  return (
    <div className="listing-fliter-div" aria-label="Filters list">
      <div className="listing-div-body-2-a listing-div-body-2-b listing-div-body-2-c">
        <span className="span-a span-b">Filters</span>
      </div>
      <div className="cate-filters" aria-label="Categories filter">
        <div className="cate-filters-div-a">
          <span className="span-a span-b span-c">Categories</span>
        </div>
        <div>
          <Link to="#" rel="follow">
            <div className="cate-1">
              <span className="filters-span-a ">All categories</span>
            </div>
          </Link>

          {/* <a href="#" rel="follow">
            <div style={{ marginLeft: "16px" }}>
              <div className="cate-1">
                <span className="filters-span-a ">Mobiles</span>
              </div>
            </div>
          </a>
          <a href="#" rel="follow">
            <div style={{ marginLeft: "32px;" }}>
              <div className="cate-1">
                <span className="filters-span-a  filters-span-c filters-span-b">Mobile Phones</span>
                <span className="filters-span-a numbers-a">(152781)</span>
              </div>
            </div>
          </a>
          <a href="#" rel="follow">
            <div style={{ marginLeft: "32px" }}>
              <div className="cate-1">
                <span className="filters-span-a ">Accessories</span>
                <span className="filters-span-a numbers-a">(32334)</span>
              </div>
            </div>
          </a>
          <a href="#" rel="follow">
            <div style={{ marginLeft: "32px" }}>
              <div className="cate-1">
                <span className="filters-span-a">Smart Watches</span>
                <span className="filters-span-a numbers-a">(8644)</span>
              </div>
            </div>
          </a>
          <a href="#" rel="follow">
            <div style={{ marginLeft: "32px" }}>
              <div className="cate-1">
                <span className="filters-span-a">Tablets</span>
                <span className="filters-span-a numbers-a">(5960)</span>
              </div>
            </div>
          </a> */}
        </div>
      </div>
      <div className="listing-div-body-2-a listing-body-2-1-b">
        <div className="feb">
          <span className="span-a span-b span-c">Locations</span>
        </div>
        <div className="feb">
          <div className="feb-div-1" aria-label="Location input">
            <div>
              <div className="feb-div-1-a">
                <div className="feb-div-1-b">
                  <input
                    spellCheck="false"
                    className="feb-div-inp"
                    autoComplete="nope"
                    placeholder="Search city, area or locality"
                    value="Pakistan"
                    readOnly
                  />
                  {/* <div className="listing-div-body-2-a feb-div-1-c">
                    <img
                      src="https://www.olx.com.pk/assets/iconArrowDown_noinline.ec05eae7013321c193965ef15d4e2174.svg"
                      alt="Dropdown trigger"
                      className="feb-div-img"
                    />
                  </div> */}
                </div>
                {/* <div className="ff"></div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="cate-filters">
          <div>
            <div style={{ marginLeft: "0px" }}>
              <a href="#">
                <div className="cate-1">
                  <span className="filters-span-a filters-span-b">
                    Pakistan
                  </span>
                </div>
              </a>
            </div>
            {/* <div style={{ marginLeft: "16px" }}>
              <div>
                <a href="#">
                  <div className="cate-1">
                    <span className="filters-span-a filters-span-b">Punjab</span>
                    <span className="filters-span-a numbers-a">(94570)</span>
                  </div>
                </a>
                <a href="#">
                  <div className="cate-1">
                    <span className="filters-span-a filters-span-b">Sindh</span>
                    <span className="filters-span-a numbers-a">(36062)</span>
                  </div>
                </a>
                <a href="#">
                  <div className="cate-1">
                    <span className="filters-span-a filters-span-b">Khyber Pakhtunkhwa</span>
                    <span className="filters-span-a numbers-a">(11224)</span>
                  </div>
                </a>
                <a href="#">
                  <div className="cate-1">
                    <span className="filters-span-a filters-span-b">
                      Islamabad Capital Territory
                    </span>
                    <span className="filters-span-a numbers-a">(8477)</span>
                  </div>
                </a>
                <a href="#">
                  <div className="cate-1">
                    <span className="filters-span-a filters-span-b">Balochistan</span>
                    <span className="filters-span-a numbers-a">(1368)</span>
                  </div>
                </a>
                <div className="view-more-cls">
                  <a href="#">
                    <div className="cate-1">
                      <span className="filters-span-a filters-span-b">Azad Kashmir</span>
                      <span className="filters-span-a numbers-a">(936)</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="cate-1">
                      <span className="filters-span-a filters-span-b">Northern Areas</span>
                      <span className="filters-span-a numbers-a">(110)</span>
                    </div>
                  </a>
                </div>
              </div>
              <button className="btn-view-more">View more</button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="cate-filters">
        <div className="cate-filters-div-a">
          <span className="span-a span-b span-c">Price</span>
        </div>
        <div>
          <div className="price-div-a price-div-b">
            <div className="price-div-a-1">
              <div className="feb-div-1-a bef-div-1">
                <div className="feb-div-1-b">
                  <input
                    spellCheck="false"
                    className="feb-div-inp"
                    autoComplete="nope"
                    type="text"
                    placeholder="Min"
                    value={props.minPrice}
                    readOnly
                  />
                </div>
                <div className="ff">
                  <span className="ff-span-a">
                    <span className="ff-span-b">Min {props.minPrice}</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="price-div-a-1">
              <div className="feb-div-1-a bef-div-1">
                <div className="feb-div-1-b">
                  <input
                    spellCheck="false"
                    className="feb-div-inp"
                    autoComplete="nope"
                    type="text"
                    placeholder="Max"
                    value={props.maxPrice}
                    readOnly
                  />
                </div>
                <div className="ff">
                  <span className="ff-span-a">
                    <span className="ff-span-b">Max {props.maxPrice}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="range-a">
            <input
              type="range"
              name="price"
              min={props.minPrice}
              max={props.maxPrice}
            />
          </div> */}
        </div>
      </div>
      {/* <div className="cate-filters">
        <div className="cate-filters-div-a">
          <span className="span-a span-b span-c">Brand</span>
        </div>
        <div>
          <div>
            <a href="#">
              <div className="brand-div">
                <span className="filters-span-a brand-span-a">Apple iPhone</span>
                <span className="filters-span-a brand-span-b">(56485)</span>
              </div>
            </a>
            <a href="#">
              <div className="brand-div">
                <span className="filters-span-a brand-span-a">Samsung Mobile</span>
                <span className="filters-span-a brand-span-b">(21886)</span>
              </div>
            </a>
            <a href="#">
              <div className="brand-div">
                <span className="filters-span-a brand-span-a">Vivo</span>
                <span className="filters-span-a brand-span-b">(13363)</span>
              </div>
            </a>
            <a href="#">
              <div className="brand-div">
                <span className="filters-span-a brand-span-a">OPPO</span>
                <span className="filters-span-a brand-span-b">(10968)</span>
              </div>
            </a>
            <a href="#">
              <div className="brand-div">
                <span className="filters-span-a brand-span-a">Infinix</span>
                <span className="filters-span-a brand-span-b">(7402)</span>
              </div>
            </a>
            <div className="view-more-cls">
              <a href="#">
                <div className="brand-div">
                  <span className="filters-span-a brand-span-a">One Plus</span>
                  <span className="filters-span-a brand-span-b">(5330)</span>
                </div>
              </a>
              <a href="#">
                <div className="brand-div">
                  <span className="filters-span-a brand-span-a">Huawei</span>
                  <span className="filters-span-a brand-span-b">(5118)</span>
                </div>
              </a>
              <a href="#">
                <div className="brand-div">
                  <span className="filters-span-a brand-span-a">Other Mobiles</span>
                  <span className="filters-span-a brand-span-b">(5077)</span>
                </div>
              </a>
              <a href="#">
                <div className="brand-div">
                  <span className="filters-span-a brand-span-a">Xiaomi</span>
                  <span className="filters-span-a brand-span-b">(5066)</span>
                </div>
              </a>
              <a href="#">
                <div className="brand-div">
                  <span className="filters-span-a brand-span-a">Tecno</span>
                  <span className="filters-span-a brand-span-b">(4036)</span>
                </div>
              </a>
              <a href="#">
                <div className="brand-div">
                  <span className="filters-span-a brand-span-a">Google</span>
                  <span className="filters-span-a brand-span-b">(3435)</span>
                </div>
              </a>
              <a href="#">
                <div className="brand-div">
                  <span className="filters-span-a brand-span-a">Nokia</span>
                  <span className="filters-span-a brand-span-b">(3043)</span>
                </div>
              </a>
              <a href="#">
                <div className="brand-div">
                  <span className="filters-span-a brand-span-a">Motorola</span>
                  <span className="filters-span-a brand-span-b">(3021)</span>
                </div>
              </a>
              <a href="#">
                <div className="brand-div">
                  <span className="filters-span-a brand-span-a">Realme</span>
                  <span className="filters-span-a brand-span-b">(2876)</span>
                </div>
              </a>
              <a href="#">
                <div className="brand-div">
                  <span className="filters-span-a brand-span-a">Sony</span>
                  <span className="filters-span-a brand-span-b">(1167)</span>
                </div>
              </a>
              <a href="#">
                <div className="brand-div">
                  <span className="filters-span-a brand-span-a">LG</span>
                  <span className="filters-span-a brand-span-b">(1166)</span>
                </div>
              </a>
              <a href="#">
                <div className="brand-div">
                  <span className="filters-span-a brand-span-a">Honor</span>
                  <span className="filters-span-a brand-span-b">(670)</span>
                </div>
              </a>
              <a href="#">
                <div className="brand-div">
                  <span className="filters-span-a brand-span-a">QMobile</span>
                  <span className="filters-span-a brand-span-b">(576)</span>
                </div>
              </a>
              <a href="#">
                <div className="brand-div">
                  <span className="filters-span-a brand-span-a">Mobilink JazzX</span>
                  <span className="filters-span-a brand-span-b">(325)</span>
                </div>
              </a>
              <a href="#">
                <div className="brand-div">
                  <span className="filters-span-a brand-span-a">HTC</span>
                  <span className="filters-span-a brand-span-b">(185)</span>
                </div>
              </a>
            </div>
          </div>
          <button className="btn-view-more">View more</button>
        </div>
      </div> */}
      {/* <div className="cate-filters">
        <div className="cate-filters-div-a">
          <span className="span-a span-b span-c">Condition</span>
        </div>
        <div>
          <div>
            <a href="#">
              <div className="listing-div-body-2-a condition-div-a feb-div-1-c">
                <div className="listing-div-body-2-a condition-div-b">
                  <input
                    type="checkbox"
                    id="used"
                    name="used"
                    className="condition-checkbox-a condition-checkbox-b"
                  />
                  <label className="condition-label" for="used">
                    <span className="filters-span-a">Used</span>
                    <span className="filters-span-a condition-span-a">(111785)</span>
                  </label>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="listing-div-body-2-a condition-div-a feb-div-1-c">
                <div className="listing-div-body-2-a condition-div-b">
                  <input
                    type="checkbox"
                    id="new"
                    name="new"
                    className="condition-checkbox-a condition-checkbox-b"
                  />
                  <label className="condition-label" for="new">
                    <span className="filters-span-a">New</span>
                    <span className="filters-span-a condition-span-a">(30893)</span>
                  </label>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="listing-div-body-2-a condition-div-a feb-div-1-c">
                <div className="listing-div-body-2-a condition-div-b">
                  <input
                    type="checkbox"
                    id="open-box"
                    name="open-box"
                    className="condition-checkbox-a condition-checkbox-b"
                  />
                  <label className="condition-label" for="open-box">
                    <span className="filters-span-a">Open Box</span>
                    <span className="filters-span-a condition-span-a">(8407)</span>
                  </label>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="listing-div-body-2-a condition-div-a feb-div-1-c">
                <div className="listing-div-body-2-a condition-div-b">
                  <input
                    type="checkbox"
                    id="for-parts-or-not-working"
                    name="for-parts-or-not-working"
                    className="condition-checkbox-a condition-checkbox-b"
                  />
                  <label className="condition-label" for="for-parts-or-not-working">
                    <span className="filters-span-a">For Parts or Not Working</span>
                    <span className="filters-span-a condition-span-a">(1354)</span>
                  </label>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="listing-div-body-2-a condition-div-a feb-div-1-c">
                <div className="listing-div-body-2-a condition-div-b">
                  <input
                    type="checkbox"
                    id="refurbished"
                    name="refurbished"
                    className="condition-checkbox-a condition-checkbox-b"
                  />
                  <label className="condition-label" for="refurbished">
                    <span className="filters-span-a">Refurbished</span>
                    <span className="filters-span-a condition-span-a">(341)</span>
                  </label>
                </div>
              </div>
            </a>
            <div className="view-more-cls"></div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ListingFilter;
