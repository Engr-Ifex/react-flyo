import React from 'react'
import Navbar from './navBar'

function FirstPage() {
  return (
    <div>
      <div>
        <Navbar/>
        </div>
      <div className='fp-props'>
        <div className='fp-text'>
            <div class="txt">
                <h1>
                All your files in one secure location, accessible anywhere.
                </h1>
                <p>
                Fylo stores your most important files in one secure location.
                Access them wherever you need, share and collaborate with friends,
                family, and co-workers.
                </p>
            </div>
            <form className='fp-inputs'>
                <input type="email" required placeholder='Enter your email...' className='fp-email'/>
                <input type='submit' value='Get Started' className='fp-submit'/>
            </form>
        </div>
        <div>
        <img src="./images/illustration-1.svg" alt="" width='650px' className='fp-img'/>
        </div>
      </div>
    </div>
    
  )
}

export default FirstPage;
