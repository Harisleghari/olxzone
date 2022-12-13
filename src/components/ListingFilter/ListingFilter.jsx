/* eslint-disable jsx-a11y/anchor-is-valid */
import "./listingfilter.css";

const ListingFilter = () => {
  return (
    <div class="listing-fliter-div" aria-label="Filters list">
      <div class="listing-div-body-2-a listing-div-body-2-b listing-div-body-2-c">
        <span class="span-a span-b">Filters</span>
      </div>
      <div class="cate-filters" aria-label="Categories filter">
        <div class="cate-filters-div-a">
          <span class="span-a span-b span-c">Categories</span>
        </div>
        <div>
          <a href="#" rel="follow">
            <div class="cate-1">
              <span class="filters-span-a ">All categories</span>
            </div>
          </a>
          <a href="#" rel="follow">
            <div style={{ marginLeft: "16px" }}>
              <div class="cate-1">
                <span class="filters-span-a ">Mobiles</span>
              </div>
            </div>
          </a>
          <a href="#" rel="follow">
            <div style={{ marginLeft: "32px;" }}>
              <div class="cate-1">
                <span class="filters-span-a  filters-span-c">Mobile Phones</span>
                <span class="filters-span-a numbers-a">(152781)</span>
              </div>
            </div>
          </a>
          <a href="#" rel="follow">
            <div style={{ marginLeft: "32px" }}>
              <div class="cate-1">
                <span class="filters-span-a ">Accessories</span>
                <span class="filters-span-a numbers-a">(32334)</span>
              </div>
            </div>
          </a>
          <a href="#" rel="follow">
            <div style={{ marginLeft: "32px" }}>
              <div class="cate-1">
                <span class="filters-span-a filters-span-b">Smart Watches</span>
                <span class="filters-span-a numbers-a">(8644)</span>
              </div>
            </div>
          </a>
          <a href="#" rel="follow">
            <div style={{ marginLeft: "32px" }}>
              <div class="cate-1">
                <span class="filters-span-a filters-span-b">Tablets</span>
                <span class="filters-span-a numbers-a">(5960)</span>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="listing-div-body-2-a listing-body-2-1-b">
        <div class="feb">
          <span class="span-a span-b span-c">Locations</span>
        </div>
        <div class="feb">
          <div class="feb-div-1" aria-label="Location input">
            <div>
              <div class="feb-div-1-a">
                <div class="feb-div-1-b">
                  <input
                    spellcheck="false"
                    class="feb-div-inp"
                    autocomplete="location-search"
                    placeholder="Search city, area or locality"
                    value="Pakistan"
                  />
                  <div class="listing-div-body-2-a feb-div-1-c">
                    <img
                      src="https://www.olx.com.pk/assets/iconArrowDown_noinline.ec05eae7013321c193965ef15d4e2174.svg"
                      alt="Dropdown trigger"
                      class="feb-div-img"
                    />
                  </div>
                </div>
                {/* <div class="ff"></div> */}
              </div>
            </div>
          </div>
        </div>
        <div class="cate-filters">
          <div>
            <div style={{ marginLeft: "0px" }}>
              <a href="#">
                <div class="cate-1">
                  <span class="filters-span-a filters-span-b">Pakistan</span>
                </div>
              </a>
            </div>
            <div style={{ marginLeft: "16px" }}>
              <div>
                <a href="#">
                  <div class="cate-1">
                    <span class="filters-span-a filters-span-b">Punjab</span>
                    <span class="filters-span-a numbers-a">(94570)</span>
                  </div>
                </a>
                <a href="#">
                  <div class="cate-1">
                    <span class="filters-span-a filters-span-b">Sindh</span>
                    <span class="filters-span-a numbers-a">(36062)</span>
                  </div>
                </a>
                <a href="#">
                  <div class="cate-1">
                    <span class="filters-span-a filters-span-b">Khyber Pakhtunkhwa</span>
                    <span class="filters-span-a numbers-a">(11224)</span>
                  </div>
                </a>
                <a href="#">
                  <div class="cate-1">
                    <span class="filters-span-a filters-span-b">
                      Islamabad Capital Territory
                    </span>
                    <span class="filters-span-a numbers-a">(8477)</span>
                  </div>
                </a>
                <a href="#">
                  <div class="cate-1">
                    <span class="filters-span-a filters-span-b">Balochistan</span>
                    <span class="filters-span-a numbers-a">(1368)</span>
                  </div>
                </a>
                <div class="view-more-cls">
                  <a href="#">
                    <div class="cate-1">
                      <span class="filters-span-a filters-span-b">Azad Kashmir</span>
                      <span class="filters-span-a numbers-a">(936)</span>
                    </div>
                  </a>
                  <a href="#">
                    <div class="cate-1">
                      <span class="filters-span-a filters-span-b">Northern Areas</span>
                      <span class="filters-span-a numbers-a">(110)</span>
                    </div>
                  </a>
                </div>
              </div>
              <button class="btn-view-more">View more</button>
            </div>
          </div>
        </div>
      </div>
      <div class="cate-filters">
        <div class="cate-filters-div-a">
          <span class="span-a span-b span-c">Price</span>
        </div>
        <div>
          <div class="price-div-a price-div-b">
            <div class="price-div-a-1">
              <div class="feb-div-1-a bef-div-1">
                <div class="feb-div-1-b">
                  <input
                    spellcheck="false"
                    class="feb-div-inp"
                    autocomplete="nope"
                    type="text"
                    placeholder="Min"
                    value="250"
                  />
                </div>
                <div class="ff">
                  <span class="ff-span-a">
                    <span class="ff-span-b">PKR 250</span>
                  </span>
                </div>
              </div>
            </div>
            <div class="price-div-a-1">
              <div class="feb-div-1-a bef-div-1">
                <div class="feb-div-1-b">
                  <input
                    spellcheck="false"
                    class="feb-div-inp"
                    autocomplete="nope"
                    type="text"
                    placeholder="Max"
                    value="1,000,000"
                  />
                </div>
                <div class="ff">
                  <span class="ff-span-a">
                    <span class="ff-span-b">PKR 10 Lacs</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cate-filters">
        <div class="cate-filters-div-a">
          <span class="span-a span-b span-c">Brand</span>
        </div>
        <div>
          <div>
            <a href="#">
              <div class="brand-div">
                <span class="filters-span-a brand-span-a">Apple iPhone</span>
                <span class="filters-span-a brand-span-b">(56485)</span>
              </div>
            </a>
            <a href="#">
              <div class="brand-div">
                <span class="filters-span-a brand-span-a">Samsung Mobile</span>
                <span class="filters-span-a brand-span-b">(21886)</span>
              </div>
            </a>
            <a href="#">
              <div class="brand-div">
                <span class="filters-span-a brand-span-a">Vivo</span>
                <span class="filters-span-a brand-span-b">(13363)</span>
              </div>
            </a>
            <a href="#">
              <div class="brand-div">
                <span class="filters-span-a brand-span-a">OPPO</span>
                <span class="filters-span-a brand-span-b">(10968)</span>
              </div>
            </a>
            <a href="#">
              <div class="brand-div">
                <span class="filters-span-a brand-span-a">Infinix</span>
                <span class="filters-span-a brand-span-b">(7402)</span>
              </div>
            </a>
            <div class="view-more-cls">
              <a href="#">
                <div class="brand-div">
                  <span class="filters-span-a brand-span-a">One Plus</span>
                  <span class="filters-span-a brand-span-b">(5330)</span>
                </div>
              </a>
              <a href="#">
                <div class="brand-div">
                  <span class="filters-span-a brand-span-a">Huawei</span>
                  <span class="filters-span-a brand-span-b">(5118)</span>
                </div>
              </a>
              <a href="#">
                <div class="brand-div">
                  <span class="filters-span-a brand-span-a">Other Mobiles</span>
                  <span class="filters-span-a brand-span-b">(5077)</span>
                </div>
              </a>
              <a href="#">
                <div class="brand-div">
                  <span class="filters-span-a brand-span-a">Xiaomi</span>
                  <span class="filters-span-a brand-span-b">(5066)</span>
                </div>
              </a>
              <a href="#">
                <div class="brand-div">
                  <span class="filters-span-a brand-span-a">Tecno</span>
                  <span class="filters-span-a brand-span-b">(4036)</span>
                </div>
              </a>
              <a href="#">
                <div class="brand-div">
                  <span class="filters-span-a brand-span-a">Google</span>
                  <span class="filters-span-a brand-span-b">(3435)</span>
                </div>
              </a>
              <a href="#">
                <div class="brand-div">
                  <span class="filters-span-a brand-span-a">Nokia</span>
                  <span class="filters-span-a brand-span-b">(3043)</span>
                </div>
              </a>
              <a href="#">
                <div class="brand-div">
                  <span class="filters-span-a brand-span-a">Motorola</span>
                  <span class="filters-span-a brand-span-b">(3021)</span>
                </div>
              </a>
              <a href="#">
                <div class="brand-div">
                  <span class="filters-span-a brand-span-a">Realme</span>
                  <span class="filters-span-a brand-span-b">(2876)</span>
                </div>
              </a>
              <a href="#">
                <div class="brand-div">
                  <span class="filters-span-a brand-span-a">Sony</span>
                  <span class="filters-span-a brand-span-b">(1167)</span>
                </div>
              </a>
              <a href="#">
                <div class="brand-div">
                  <span class="filters-span-a brand-span-a">LG</span>
                  <span class="filters-span-a brand-span-b">(1166)</span>
                </div>
              </a>
              <a href="#">
                <div class="brand-div">
                  <span class="filters-span-a brand-span-a">Honor</span>
                  <span class="filters-span-a brand-span-b">(670)</span>
                </div>
              </a>
              <a href="#">
                <div class="brand-div">
                  <span class="filters-span-a brand-span-a">QMobile</span>
                  <span class="filters-span-a brand-span-b">(576)</span>
                </div>
              </a>
              <a href="#">
                <div class="brand-div">
                  <span class="filters-span-a brand-span-a">Mobilink JazzX</span>
                  <span class="filters-span-a brand-span-b">(325)</span>
                </div>
              </a>
              <a href="#">
                <div class="brand-div">
                  <span class="filters-span-a brand-span-a">HTC</span>
                  <span class="filters-span-a brand-span-b">(185)</span>
                </div>
              </a>
            </div>
          </div>
          <button class="btn-view-more">View more</button>
        </div>
      </div>
      <div class="cate-filters">
        <div class="cate-filters-div-a">
          <span class="span-a span-b span-c">Condition</span>
        </div>
        <div>
          <div>
            <a href="#">
              <div class="listing-div-body-2-a condition-div-a feb-div-1-c">
                <div class="listing-div-body-2-a condition-div-b">
                  <input
                    type="checkbox"
                    id="used"
                    name="used"
                    class="condition-checkbox-a condition-checkbox-b"
                  />
                  <label class="condition-label" for="used">
                    <span class="filters-span-a">Used</span>
                    <span class="filters-span-a condition-span-a">(111785)</span>
                  </label>
                </div>
              </div>
            </a>
            <a href="#">
              <div class="listing-div-body-2-a condition-div-a feb-div-1-c">
                <div class="listing-div-body-2-a condition-div-b">
                  <input
                    type="checkbox"
                    id="new"
                    name="new"
                    class="condition-checkbox-a condition-checkbox-b"
                  />
                  <label class="condition-label" for="new">
                    <span class="filters-span-a">New</span>
                    <span class="filters-span-a condition-span-a">(30893)</span>
                  </label>
                </div>
              </div>
            </a>
            <a href="#">
              <div class="listing-div-body-2-a condition-div-a feb-div-1-c">
                <div class="listing-div-body-2-a condition-div-b">
                  <input
                    type="checkbox"
                    id="open-box"
                    name="open-box"
                    class="condition-checkbox-a condition-checkbox-b"
                  />
                  <label class="condition-label" for="open-box">
                    <span class="filters-span-a">Open Box</span>
                    <span class="filters-span-a condition-span-a">(8407)</span>
                  </label>
                </div>
              </div>
            </a>
            <a href="#">
              <div class="listing-div-body-2-a condition-div-a feb-div-1-c">
                <div class="listing-div-body-2-a condition-div-b">
                  <input
                    type="checkbox"
                    id="for-parts-or-not-working"
                    name="for-parts-or-not-working"
                    class="condition-checkbox-a condition-checkbox-b"
                  />
                  <label class="condition-label" for="for-parts-or-not-working">
                    <span class="filters-span-a">For Parts or Not Working</span>
                    <span class="filters-span-a condition-span-a">(1354)</span>
                  </label>
                </div>
              </div>
            </a>
            <a href="#">
              <div class="listing-div-body-2-a condition-div-a feb-div-1-c">
                <div class="listing-div-body-2-a condition-div-b">
                  <input
                    type="checkbox"
                    id="refurbished"
                    name="refurbished"
                    class="condition-checkbox-a condition-checkbox-b"
                  />
                  <label class="condition-label" for="refurbished">
                    <span class="filters-span-a">Refurbished</span>
                    <span class="filters-span-a condition-span-a">(341)</span>
                  </label>
                </div>
              </div>
            </a>
            <div class="view-more-cls"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingFilter;
