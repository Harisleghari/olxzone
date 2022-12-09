/* eslint-disable jsx-a11y/anchor-is-valid */
import "./mainad.css";

const MainAd = () => {
  return (
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators carousel-indicators-custom">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          class="active"
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
      <div class="carousel-inner">
        <div class="carousel-item active">
          <svg
            class="bd-placeholder-img"
            width="100%"
            height="100%"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          ></svg>

          <div class="container carousel-item-custom">
            <div class="carousel-caption text-start carousel-item--caption-custom">
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
        <div class="carousel-item">
          <svg
            class="bd-placeholder-img"
            width="100%"
            height="100%"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          ></svg>

          <div class="container carousel-item-custom">
            <div class="carousel-caption carousel-item--caption-custom">
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
