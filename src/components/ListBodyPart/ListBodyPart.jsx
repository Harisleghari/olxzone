/* eslint-disable jsx-a11y/anchor-is-valid */
import "./listbodypart.css";

const ListBodyPart = () => {
  return (
    <div>
      <div class="container-fluid">
        <div class="row m-3">
          <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-12 bg-dark">
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="https://images.olx.com.pk/thumbnails/310879983-400x300.webp"
                    class="d-block w-100"
                    alt="..."
                    height="500px"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://images.olx.com.pk/thumbnails/310880001-400x300.webp"
                    class="d-block w-100"
                    alt="..."
                    height="600px"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://images.olx.com.pk/thumbnails/310880003-400x300.webp"
                    class="d-block w-100"
                    alt="..."
                    height="600px"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://images.olx.com.pk/thumbnails/310879984-400x300.webp"
                    class="d-block w-100"
                    alt="..."
                    height="500px"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://images.olx.com.pk/thumbnails/310879985-400x300.webp"
                    class="d-block w-100 mt-3"
                    alt="..."
                    height="500px"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://images.olx.com.pk/thumbnails/310879986-400x300.webp"
                    class="d-block w-100 mt-3"
                    alt="..."
                    height="500px"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://images.olx.com.pk/thumbnails/310879996-400x300.webp"
                    class="d-block w-100 mt-3"
                    alt="..."
                    height="500px"
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          {/*row 2/ right-Side*/}
          <div class="col-lg-5 col-md-5 col-sm-12 col-12 ">
            <div class="row m-2">
              <div class="border p-4 w-100 rounded">
                <div class="d-flex justify-content-between">
                  <div>
                    {" "}
                    <b>
                      <span class="font-weight-bold h2">Rs 3,300,000</span>
                    </b>
                  </div>
                  <div>
                    <img
                      src="https://www.olx.com.pk/assets/iconShare_noinline.41d8fa8326fea7b27bc24d3eca8b598a.svg"
                      alt="icon share"
                    />
                    <img
                      src="https://www.olx.com.pk/assets/iconFavoriteUnselected_noinline.5767fec1cf12da79531e7c0b4a94f4e2.svg"
                      alt=""
                      width="24px"
                      height="24px"
                    />
                  </div>
                </div>
                <p class="text-secondary">Orchard 5 marla non develop</p>
                <small class="text-secondary">
                  Bahria Town Phase 8 - Bahria Orchard, Rawalpindi
                </small>
              </div>

              {/*Row2/ Seller Description*/}
              <div class="border p-4 rounded  w-100 mt-5">
                <span class="fs-5">
                  <strong>Seller Description</strong>
                </span>
                <div class="d-flex mt-3 mb-3">
                  <div class="m-1">
                    <img
                      src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"
                      alt=""
                      width="64px"
                      height="64px"
                    />
                  </div>
                  <div class="m-2">
                    <span class="fs-4 fw-normal">Hassan Nadeem</span>
                    <p>Member since jul 2022</p>
                  </div>
                </div>
                <button type="submit" class="box">
                  <span>Chat with Seller</span>
                </button>
                <div class="d-flex justify-content-around m-4">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyicQZ5C5ob5iZsgWpAbCdIwHoHhAyj2CdA08q188&s"
                    alt=""
                    width="40px"
                    height="40px"
                  />
                  <span class="">*********</span>
                  <a href="">
                    <u>Show number</u>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Section 2/ Detailes Section*/}
      <div class="container-fluid">
        <div class="row m-3">
          <div class="col-lg-7 col-md-6 col-sm-12">
            <div class="border p-4 rounded w-100 mt-5">
              <p>
                <h3>Detailes</h3>
              </p>
              <div class="row text-secondary">
                <div class="col-lg-10 col-md-12 col-sm-12 d-flex justify-content-between">
                  <p>price</p>
                  <p>3,300,000</p>
                  <p>type</p>
                  <p>Residential Plots</p>
                </div>
                <div class="col-lg-8 col-md-12 col-sm-12 d-flex justify-content-between">
                  <p>Area Unit</p>
                  <p>Marla</p>
                  <p>Area</p>
                  <p>5</p>
                </div>
                <hr />
                <h4>
                  <b class="text-dark">Description</b>
                </h4>
                <div class="text-secondary">
                  <p>Orchard bahria town Rawalpindi</p>
                  <p>5 marla </p>
                  <p>best for investment</p>
                  <p>good location plot </p>
                  <p>for more details contact us</p>
                </div>
              </div>
            </div>
          </div>

          {/*Post section*/}

          <div class="col-lg-5 col-md-6 col-sm-12 box1">
            <div class="border  rounded  w-100 mt-5">
              <p class="p-3 fw-normal fs-4">
                <b>Posted in</b>
              </p>
              <small class="p-3 text-secondary">
                Bahria Town Phase 8 - Bahria Orchard, Rawalpindi
              </small>
              <div class="box2">
                <img
                  src="https://www.olx.com.pk/assets/mapPlaceholder_noinline.af3a4b7300a65b66f974eed7023840ac.svg"
                  alt=""
                  width="100%"
                  class="mt-3"
                />
              </div>
              <div class="d-flex justify-content-between">
                <a href="#">
                  {" "}
                  <button class="box5">SEE LOCATION</button>
                </a>
                <a href="#">
                  {" "}
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfq50FJLOts07Zp-uJPVOyLaqDfQuqwDYCsA&usqp=CAU"
                    alt=""
                    width="25px"
                    height="25px"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListBodyPart;
