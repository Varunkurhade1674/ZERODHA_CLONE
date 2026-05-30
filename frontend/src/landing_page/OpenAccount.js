import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mb-10">
      <div className="row text-center text-muted">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-4"
        />
        <h1 className="mt-5 fs-3"> Open a Zerodha account </h1>
        <p>
          {" "}
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "15%", margin: "0 auto" }}
        >
          SignUp for Free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
