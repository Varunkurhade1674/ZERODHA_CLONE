import React from "react";

function LeftScetion({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  Coin,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 border-top">
      <div className="row text-muted mt-5 p-3">
        <div className="col-1 mt-5"></div>
        <div className="col-6 p-3">
          <img src={imageURL} style={{ width: "500px" }} />
        </div>
        <div className="col-3 mt-5">
          <h2 className="fs-5 mt-1">{productName}</h2>
          <p className="mt-4">{productDescription}</p>
          <div
            className="mb-4"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "265px",
            }}
          >
              {learnMore && (
              <a href={learnMore} style={{ textDecoration: "none" }}>
                Learn more <i className="fa fa-long-arrow-right"></i>
              </a>
            )}

            {tryDemo && (
              <a href={tryDemo} style={{ textDecoration: "none" }}>
                Try Demo <i className="fa fa-long-arrow-right"></i>
              </a>
            )}  

             {Coin && (
              <a href={Coin} style={{ textDecoration: "none" }}>
                Coin <i className="fa fa-long-arrow-right"></i>
              </a>
            )}  
          </div>

          <div style={{ display: "flex", gap: "25px" }}>
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="Google Play" />
            </a>

            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" alt="App Store" />
            </a>
          </div>
        </div>
        <div className="col-1 mt-5"></div>
      </div>
    </div>




  );
}

export default LeftScetion;
