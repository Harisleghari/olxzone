import "./tryapp.css";

const TryApp = () => {
  return (
    <div class="try-app-div-a try-app-div-b try-app-div-c try-app-div-d">
      <div class="try-app-div-a try-app-div-e">
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
            class="try-app-div-mobile-app-height"
            src="https://www.olx.com.pk/assets/olxMobileApp.f5579f77e849b600ad60857e46165516.webp"
            alt="OLX mobile app"
          />
        </picture>
        <div class="try-app-para-div">
          <div>Try the OLX app</div>
          <div>
            Buy, sell and find just about anything using the app on your mobile.
          </div>
        </div>
        <div class="try-app-div-a try-app-div-line-a">
          <div class="try-app-div-line-b"></div>
        </div>
        <div class="try-app-div-last-colm">
          <div>Get your app today</div>
          <div class="try-app-div-a try-app-div-line-last-colm try-app-div-line-a">
            <a
              href="https://apps.apple.com/pk/app/olx-pakistan/id1551315538"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg"
                alt="App Store"
                class="try-app-div-colm-img"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.olx.pk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg"
                alt="Google Play"
                class="try-app-div-colm-img"
              />
            </a>
            <a
              href="https://appgallery.huawei.com/#/app/C104375435"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg"
                alt="App Gallery"
                class="try-app-div-colm-img"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryApp;
