import "./postad.css";
import { Link } from "react-router-dom";

const PostAd = () => {
  return (
    <div
      id="body-wrapper"
      className="post-ad-wrap-a post-ad-wrap-b"
      style={{ top: "unset;" }}
    >
      <header className="post-ad-header">
        <div
          aria-label="Back button"
          className="post-ad-header-div-a post-ad-header-div-b post-ad-header-div-c"
        >
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 1024 1024"
              className="post-ad-header-svg"
            >
              <path d="M512 124.16v54.83L209.7 473.17l676.96.05L925.48 512l-38.82 38.78H209.75L512 845.01v54.87h-56.32L85.33 539.43v-54.86l370.35-360.4H512z"></path>
            </svg>
          </Link>
        </div>
        <div className="post-ads-logo">
          <div className="">
            <Link to="/" className="post-ads-logo-a">
              <img
                src="https://www.olx.com.pk/assets/logo_noinline.1cdf230e49c0530ad4b8d43e37ecc4a4.svg"
                alt="Olx logo"
                className="post-ads-logo-img"
              />
            </Link>
          </div>
        </div>
      </header>
      <div className="post-ad-header-div-a heading-a heading-b">
        <span className="span-a span-b span-c">Post your ad</span>
      </div>
      <div className="select">
        <div className="select-post">
          <div>
            <div className="details-a">
              <form>
                <div className="form-div-a">
                  <span className="span-a span-b span-c">
                    Include some details
                  </span>
                </div>
                <div className="details-form">
                  <div className="details-form-div">
                    <label for="title" className="details-label">
                      <span className="details-span">Ad title</span>
                    </label>
                    <div className="details-div-2">
                      <input
                        id="title"
                        name="title"
                        spellcheck="false"
                        className="details-div-2-inp"
                        maxlength="70"
                        autocomplete="nope"
                        value=""
                      />
                    </div>
                    <div className="details-div-3">
                      <span className="details-div-3-span">
                        <span className="details-div-3-span-a">
                          Mention the key features of your item (e.g. brand,
                          model, age, type)
                        </span>
                      </span>
                      <span className="details-div-3-span-a-a">
                        <span className="details-div-3-span-a">0/70</span>
                      </span>
                    </div>
                  </div>
                  <div className="details-form-div">
                    <label for="description" className="details-label">
                      <span className="details-span">Description</span>
                    </label>
                    <div className="details-div-2 description-div">
                      <textarea
                        id="description"
                        name="description"
                        spellcheck="false"
                        className="details-div-2-inp"
                        maxlength="4096"
                        autocomplete="nope"
                      ></textarea>
                    </div>
                    <div className="details-div-3">
                      <span className="details-div-3-span">
                        <span className="details-div-3-span-a">
                          Include condition, features and reason for selling
                        </span>
                      </span>
                      <span className="details-div-3-span-a-a">
                        <span className="details-div-3-span-a">0/4096</span>
                      </span>
                    </div>
                  </div>
                  <div className="hr-line-a"></div>
                  <div className="set-price-div">
                    <span className="span-a span-b span-c">Set a price</span>
                  </div>
                  <div className="details-form-div">
                    <label for="price" className="details-label">
                      <span className="details-span">Price</span>
                    </label>
                    <div className="details-div-2">
                      <span className="rs-span">
                        <span className="details-div-3-span-a">Rs</span>
                      </span>
                      <input
                        id="price"
                        name="price"
                        spellcheck="false"
                        className="details-div-2-inp"
                        autocomplete="nope"
                        type="text"
                        value=""
                      />
                    </div>
                    <div className="details-div-3"></div>
                  </div>
                  <div className="hr-2"></div>
                  <div className="form-div-a">
                    <span className="span-a span-b span-c">
                      Upload up to 20 photos
                    </span>
                  </div>
                  <div>
                    <label className="images-label">
                      <input
                        type="file"
                        name="photos"
                        accept="image/png, image/jpeg"
                        autocomplete="off"
                        multiple=""
                        className="images-input"
                      />
                      <div className="">
                        <div className="post-ad-header-div-a images-div-2 heading-b post-ad-header-div-c">
                          <img
                            src="https://www.olx.com.pk/assets/iconAddPhoto_noinline.8924e2486f689a28af51da37a7bda6ec.svg"
                            alt=""
                          />
                          <div className="img-borders"></div>
                        </div>
                      </div>
                      <div className="">
                        <div className="post-ad-header-div-a images-div-2 heading-b post-ad-header-div-c">
                          <img
                            src="https://www.olx.com.pk/assets/iconAddPhoto_noinline.8924e2486f689a28af51da37a7bda6ec.svg"
                            alt=""
                          />
                          <div className="img-borders"></div>
                        </div>
                      </div>
                      <div className="">
                        <div className="post-ad-header-div-a images-div-2 heading-b post-ad-header-div-c">
                          <img
                            src="https://www.olx.com.pk/assets/iconAddPhoto_noinline.8924e2486f689a28af51da37a7bda6ec.svg"
                            alt=""
                          />
                          <div className="img-borders"></div>
                        </div>
                      </div>
                    </label>
                    <span className="details-div-3-span">
                      <span className="details-div-3-span-a">
                        For the cover picture we recommend using the landscape
                        mode.
                      </span>
                    </span>
                  </div>
                  <div className="hr-2"></div>
                  <div className="form-div-a">
                    <span className="span-a span-b span-c">
                      Your Ad's Location
                    </span>
                  </div>
                  <div className="location-div" aria-label="Filterable input">
                    <div>
                      <div className="details-form-div">
                        <label for="Location" className="details-label">
                          <span className="details-span">Location</span>
                        </label>
                        <div className="details-div-2">
                          <div
                            id="Location"
                            className="post-ad-header-div-a location-div-inside post-ad-header-div-c"
                          >
                            <span></span>
                          </div>
                          <div className="toggle-c">
                            <img
                              src="https://www.olx.com.pk/assets/iconArrowDown_noinline.ec05eae7013321c193965ef15d4e2174.svg"
                              alt="Select toggle"
                            />
                          </div>
                        </div>
                        <div className="details-div-3">
                          <div className="ed1505d2">
                            <div className="_75bcdc15">
                              <div className="cb8c9afa _43eeff7d">
                                <div className="f6c2c5a2">
                                  <input
                                    spellcheck="false"
                                    className="fc60720d"
                                    autocomplete="nope"
                                    placeholder="Search"
                                    value=""
                                  />
                                </div>
                                <div className="df4e426f"></div>
                              </div>
                            </div>
                            <div className="_345a69e2">
                              <div className="_1075545d _709d3fcb _96d4439a">
                                <img
                                  src="https://www.olx.com.pk/assets/iconCurrentLocation_noinline.6acc646ec0e4ecdee696b5588b92c859.svg"
                                  alt="/assets/iconCurrentLocation_noinline.6acc646ec0e4ecdee696b5588b92c859.svg"
                                />
                                <div className="d35d9456">
                                  <span className="_261203a9 _2e82a662">
                                    Use current location
                                  </span>
                                  <div className="_592eac8b">
                                    <span className="_34a7409b"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="_93edca37">Choose region</div>
                            <div className="a9021c2f">
                              Azad Kashmir, Pakistan
                            </div>
                            <div className="a9021c2f">
                              Balochistan, Pakistan
                            </div>
                            <div className="a9021c2f">
                              Islamabad Capital Territory, Pakistan
                            </div>
                            <div className="a9021c2f">
                              Khyber Pakhtunkhwa, Pakistan
                            </div>
                            <div className="a9021c2f">
                              Northern Areas, Pakistan
                            </div>
                            <div className="a9021c2f">Punjab, Pakistan</div>
                            <div className="a9021c2f">Sindh, Pakistan</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hr-2"></div>
                  <div className="form-div-a">
                    <span className="span-a span-b span-c">
                      Review your details
                    </span>
                  </div>
                  <div className="post-ad-header-div-a">
                    <div className="profile-pic">
                      <img
                        className="profile-img-a profile-img-b"
                        src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"
                        alt="User profile"
                      />
                    </div>
                    <div className="details-form-div">
                      <label for="name" className="details-label">
                        <span className="details-span">Name</span>
                      </label>
                      <div className="details-div-2">
                        <input
                          id="name"
                          name="name"
                          spellcheck="false"
                          className="details-div-2-inp"
                          autocomplete="nope"
                          type="text"
                          value=""
                        />
                      </div>
                      <div className="details-div-3"></div>
                    </div>
                  </div>
                  <div>
                    <span className="span-a span-b">
                      Let's verify your account
                    </span>
                  </div>
                  <div className="details-form-div">
                    <label for="phone_number" className="details-label">
                      <span className="details-span">Mobile Phone Number</span>
                    </label>
                    <div className="details-div-2 phone-a">
                      <span className="rs-span">
                        <span className="details-div-3-span-a">+92</span>
                      </span>
                      <input
                        id="phone_number"
                        name="phone_number"
                        spellcheck="false"
                        className="details-div-2-inp d4b3e258"
                        autocomplete="nope"
                        type="text"
                        placeholder="Phone number"
                        value=""
                      />
                    </div>
                    <div className="details-div-3"></div>
                  </div>
                  <div className="hr-2"></div>
                  <div className="button-div">
                    <button className="button-div-a button-div-b" type="submit">
                      <span className="button-div-span span-b">Post now</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostAd;
