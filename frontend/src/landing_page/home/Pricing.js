import React from "react";

function Pricing() {
  return (
    <div className="container p-2s">
      <div className="row p-5 ">
        <div className="col-4">
          <h2 className="mb-3 text-muted fs-2">Unbeatable pricing</h2>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See pricing{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-8">
          <div className="row text-center">
            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <img src="media/images/0.png" width="80" height="60" />
              <p className="ms-0 fs-15 m-0 text-muted">Free account opening</p>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <img src="media/images/0.png" width="80" height="60" />
              <p className="ms-0 fs-15 m-0 text-muted">
                Free equity delivery and direct mutual funds
              </p>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <img src="media/images/20.png" width="80" height="60" />
              <p className="ms-1 fs-15 m-0 text-muted">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
