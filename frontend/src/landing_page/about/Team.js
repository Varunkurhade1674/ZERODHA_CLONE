import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row border-top">
        <h1 className=" fs-3 text-center text-muted mt-5 mb-5">People</h1>
        <div className="col-3"></div>
        <div className="col-3 p-2 ">
          <img
            src="media\images\nithinKamath.jpg"
            style={{ width: "250px", borderRadius: "100%", marginLeft: "30px" }}

          ></img>
          <h5 className=" fs-6   text-center text-muted mt-3 ">Nithin Kamath</h5>
          <p className=" text-center text-muted mt-1 ">Founder, CEO</p>
        </div>
        <div className="col-4 p-2 fs-8">
          <p> 
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the 
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on <a href=""style={{textDecoration:"none"}}>Homepage</a> / <a href=""style={{textDecoration:"none"}}>TradingQnA </a> / <a href=""style={{textDecoration:"none"}}>Twitter</a></p>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default Team;
