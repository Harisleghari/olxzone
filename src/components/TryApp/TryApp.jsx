/* eslint-disable jsx-a11y/anchor-is-valid */
import "./tryapp.css";

const TryApp = () => {
  return (
    <div className="try-app-div-a try-app-div-b try-app-div-c try-app-div-d">
      <div className="try-app-div-a try-app-div-e">
        <picture>
          <source
            srcSet="https://www.olx.com.pk/assets/olxMobileApp.f5579f77e849b600ad60857e46165516.webp"
            type="image/webp"
          />
          <source
            srcSet="https://www.olx.com.pk/assets/olxMobileApp.4f5c782de5b951f7b49a8d2729313206.jpg"
            type="image/jpg"
          />
          <img
            className="try-app-div-mobile-app-height"
            src="https://www.olx.com.pk/assets/olxMobileApp.f5579f77e849b600ad60857e46165516.webp"
            alt="OLX mobile app"
          />
        </picture>
        <div className="try-app-para-div">
          <div>Try the OLX app</div>
          <div>
            Buy, sell and find just about anything using the app on your mobile.
          </div>
        </div>
        <div className="try-app-div-a try-app-div-line-a">
          <div className="try-app-div-line-b"></div>
        </div>
        <div className="try-app-div-last-colm">
          <div>Get your app today</div>
          <div className="try-app-div-a try-app-div-line-last-colm try-app-div-line-a">
            <a
              href="#"
              
              rel="noopener noreferrer"
            >
              <img
                src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg"
                alt="App Store"
                className="try-app-div-colm-img"
              />
            </a>
            <a
              href="#"
              
              rel="noopener noreferrer"
            >
              <img
                src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg"
                alt="Google Play"
                className="try-app-div-colm-img"
              />
            </a>
            <a
              href="#"
              
              rel="noopener noreferrer"
            >
              <img
                src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg"
                alt="App Gallery"
                className="try-app-div-colm-img"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryApp;
