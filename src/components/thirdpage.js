import React from 'react'

function ThirdPage() {
  return (
    <div>
      <div className='gp-props'>
        <div className='gp-para'>
            <h2>
            Get early access today
            </h2>
            <p>
            It only takes a minute to sign up and our free starter tier is extremely generous. 
            If you have any questions, our support team would be happy to help you.
            </p>
        </div>

        <div className='gp-input'>
        <input type="email" placeholder='email@example.com' className='tp-email'/>
        <input type='submit' value='Get Started For Free' className='tp-submit'/>
        </div>
      </div>

      <div className='bp'>
      <img src="./images/logo2.svg" alt="" className='tp-logo'/>
        <div className='bp-props'>
            <div className='bp-icons'>
            <div class="ph"><img src="./images/icon-phone.svg" alt="" width='12px' className='phone'/> <p>Phone: +1-543-123-4567</p></div>
            <div class="em"><img src="./images/icon-email.svg" alt="" width='12px' className='email'/> <p>example@fylo.com</p></div>
            </div>
            <div className='bp-txt1'>
                <p>About Us</p>
                <p>Jobs</p>
                <p>Press</p>
                <p>Blog</p>
            </div>
            <div className='bp-txt2'>
                <p>Contact Us</p>
                <p>Terms</p>
                <p>Privacy</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ThirdPage
