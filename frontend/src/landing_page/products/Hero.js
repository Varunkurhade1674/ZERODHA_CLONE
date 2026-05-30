import React from 'react';


function Hero() {
    return ( 
        <div className='container'>
            <div className='row text-center text-muted mt-5'>
                <h3 style={{fontWeight:"500", fontsize: "1.75rem",lineheight: "1.8"}}>Zerodha Products</h3>
                <h6 className= "mt-1" style={{fontWeight:"450"}}>Sleek, modern, and intuitive trading platforms</h6>
                <p className='font-size: 1rem;  line-height: 1.8 mt-1'>Check out our <a href='' style={{textDecoration:"none"}}>investment offerings →</a></p>
            </div>
        </div>
    );
}

export default Hero;