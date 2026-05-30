import React from "react";

function Hero() {
  return (
    <section className="container-fluid " id="supporthero">
      <div className=" p-3 mb-2" id="supportWrapper">
        <h3 className="fs-5">Support Portal</h3>
        <a href="">Track Tickets</a>
      </div>
      <div className=" row mb-2 p-2">
        <div className=" col-6 mb-5 p-5 ">
          <h3>
            Search for an answer or browse help topics to create a ticket{" "}
          </h3>
          <input
            style={{
              width: "400px",
              padding: "12px 16px",
              margin: "10px 0",
              fontSize: "16px",
              borderRadius: "8px",
            }}
            placeholder="Eg. how do I activate F&Q, why is my order getting rejected..."
          />
          <br />
          <a href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">intraday.</a>
          <br/>
          <a href="">margins</a>
          <a href="">Kite user manual</a>
        </div>
        <div className=" col-1"></div>
        <div className=" col-5 mb-5 p-5">  
          <h3>Featured</h3>
          <ol className="fs-6">
            <li>
              <a href="">Current Takeovers and Deadline - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
