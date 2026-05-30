import React from "react";

function Education() {
  return (
    <div className="container p-3">
      <div className="row p-5 ">
        <div className="col-6">
          <img src="media/images/education.svg"></img>
        </div>

        <div className="col-6 p-4">
          <h1 className="text-muted fs-2">Free and open market education</h1>
          <br></br>
          <p className="text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="">
            Varsity<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <br></br>
          <br></br>

          <p className="text-muted">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="">
            TradingQ&A<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
