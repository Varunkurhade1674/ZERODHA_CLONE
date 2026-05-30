import React from "react";

function Universe() {
  return (
    <div className="container p-5" style={{ width: "1100px" }}>
      <div className="row text-muted text-center  p-5">
        <h3 className="mt-2">The Zerodha Universe </h3>
        <p style={{ lineHeight: "1.9rem" }}>
          Extend your trading and investment experience even further with our
          partner platforms.
        </p>
        <div className="col-4 mt-4 p-2">
          <img
            src="media\images\zerodhaFundhouse.png"
            style={{ maxWidth: "100%", height: "55px" }}
          ></img>
          <p
            className=""
            style={{ fontSize: ".75rem", display: "block", marginTop: "10px" }}
          >
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 mt-4 p-3.5">
          <img
            src="media\images\sensibullLogo.svg"
            style={{ maxWidth: "100%", height: "40px", top: "10px" }}
          ></img>
          <p
            className=""
            style={{
              fontSize: ".75rem",
              display: "block",
              marginTop: "10px",
              lineheight: "18px",
            }}
          >
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 mt-4 p-2">
          <img
            src="media\images\tijori.png"
            style={{ maxWidth: "100%", height: "55px", top: "10px" }}
          ></img>
          <p
            className=""
            style={{
              fontSize: ".75rem",
              display: "block",
              marginTop: "10px",
              lineheight: "18px",
            }}
          >
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="row mt-4">
          <div className="col-4">
            <img
              src="media\images\streakLogo.png"
              style={{ maxWidth: "100%", height: "55px" }}
            ></img>
            <p
              className=""
              style={{
                fontSize: ".75rem",
                display: "block",
                marginTop: "10px",
              }}
            >
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col-4">
            <img
              src="media\images\smallcaseLogo.png"
              style={{ maxWidth: "100%", height: "55px", top: "10px" }}
            ></img>
            <p
              className=""
              style={{
                fontSize: ".75rem",
                display: "block",
                marginTop: "10px",
                lineheight: "18px",
              }}
            >
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-4">
            <img
              src="media\images\dittoLogo.png"
              style={{ maxWidth: "100%", height: "55px", top: "10px" }}
            ></img>
            <p
              className=""
              style={{
                fontSize: ".75rem",
                display: "block",
                marginTop: "10px",
                lineheight: "18px",
              }}
            >
              Personalized advice on life and health insurance. No spam and no
              mis-selling. Sign up for free
            </p>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Universe;
