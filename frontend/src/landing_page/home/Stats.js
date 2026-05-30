import React from 'react';


function Stats() {
    return (  
        <div className='container p-2s'>
            <div className='row p-5 '>
                <div className='col-5 p-5 mt-5'style={{fontSize:"90%"}}>
                    <h1 className='fs-2'>Trust with confidence</h1>
                    <br></br>
                    <h3 className='fs-4 text-muted'>Customer-first always</h3>
                    <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    

                    <h3 className='fs-4 text-muted'>No spam or gimmicks</h3>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>

                    <h3 className='fs-4 text-muted'>The Zerodha universe</h3>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h3 className='fs-4 text-muted'>Do better with money</h3>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-7 p-5'>
                    <img src='media/images/ecosystem.png'style={{width:"100%"}}></img>
                    <div className='text-center'>
                        <a href="" className='mx-5' style={{textDecoration:"none"}}>Explore our products<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                        <a href=""className='my-8'  style={{textDecoration:"none"}}>Try Kite<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
           
        </div>
    );
}

export default Stats;
