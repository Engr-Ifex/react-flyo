import React from 'react'

function SecondPage() {
    return(
        <div className='secpag'>
            <div className='sp-props'>
                <h1 >
                Stay productive, wherever you are
                </h1>

                <p className='sp-props-p'>
                Never let location be an issue when accessing your files. Fylo has you 
                covered for all of your file storage needs.
                </p>

                <p className='sp-props-p pad'>
                Securely share files and folders with friends, family and colleagues for 
                live collaboration. No email attachments required!   
                </p>

                <div class="ancrow"><a href="#" className='anchor'>See how Fylo works  <img src="./images/icon-arrow.svg" alt=""  className='arrow'/></a></div>

                <div className='sp-card'>
                    <div className='sp-para'>
                    <img src="./images/icon-quotes.svg" alt="" width='18px' className='quote'/> 
                    <p className='sp-txt'>
                    Fylo has improved our team productivity by an order of magnitude. Since 
                    making the switch our team has become a well-oiled collaboration machine.
                    </p>
                    </div>

                    <div className='sp-ceo'>
                    <div className='sp-pix'>
                        <img src="./images/avatar-testimonial.jpg" alt="" width='30px' className='avatar'/>
                    </div>

                    <div className='sp-title'>
                        <h1>
                        Kyle Burton
                        </h1>

                        <p>
                        Founder & CEO, Huddle
                        </p>
                    </div>

                    </div>
                </div>

            </div>
            <div>
            <img src="./images/illustration-2.svg" alt="" width='500px' className='sp-img'/>
            </div>
        </div>
    )
}

export default SecondPage;