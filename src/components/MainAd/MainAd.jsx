/* eslint-disable jsx-a11y/anchor-is-valid */
import "./mainad.css";

const MainAd = () => {
  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators carousel-indicators-custom">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <svg
            className="bd-placeholder-img"
            width="100%"
            height="100%"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          ></svg>

          <div className="container carousel-item-custom">
            <div className="carousel-caption text-start carousel-item--caption-custom">
              <img
                src="https://images.olx.com.pk/thumbnails/309499414-800x600.webp"
                alt="foodpanda img"
                loading="auto"
                className="img-main-ad"
                style={{ borderRadius: "5px" }}
              />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <svg
            className="bd-placeholder-img"
            width="100%"
            height="100%"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          ></svg>

          <div className="container carousel-item-custom">
            <div className="carousel-caption carousel-item--caption-custom">
              <img
                src="https://images.olx.com.pk/thumbnails/310378076-800x600.webp"
                alt="zong img"
                loading="auto"
                className="img-main-ad"
                style={{ borderRadius: "5px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAd;
