import React from "react";

function RightScetion({
  productName,
  productDescription,
  learnMore,
  KiteConnect,
  imageURL,
}) {
  return (
    <div className="container mt-3 border-top mb-1">
      <div className="row text-muted  p-5">
        <div className="col-1 p-5 mt-5"></div>
        <div className="col-4  mt-5  p-5">
          <h2 className="fs-5 mt-5   ">{productName}</h2>
          <p className="mt-4">{productDescription}</p>
          <div>
            {learnMore && (
              <a href={learnMore} style={{ textDecoration: "none" }}>
                Learn more <i className="fa fa-long-arrow-right"></i>
              </a>
            )}

            {KiteConnect && (
              <a href={KiteConnect} style={{ textDecoration: "none" }}>
                Kite Connect <i className="fa fa-long-arrow-right"></i>
              </a>
            )}
          </div>
        </div>
        <div className="col-5 p-2">
          <img src={imageURL} style={{ width: "500px" }} />
        </div>
        <div className="col-2 p-5"></div>
      </div>
    </div>
  );
}

export default RightScetion;
