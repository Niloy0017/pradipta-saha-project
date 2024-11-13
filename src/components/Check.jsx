import React, { useState } from 'react'

export default function Check() {

  const [frontimage, setFrontimage] = useState(true);

  const imagehandler = () => {
    if (frontimage) {
      setFrontimage(false)
    }
    else {
      setFrontimage(true)
    }
  }

  return (
    <div className='check d-flex flex-column align-items-center p-3 gap-3'>

      <div className='urbanist-800-50-75'>
        Check Out These <span className='text-border'>Customers</span>
      </div>

      <div className='check-para urbanist-400-16-22'>
        Companies big and small love digital business cards. We have onboarded over 25,000 teams including
        international banks, construction companies, retail, roofing, plumbing, marketing agencies, hospitals
        and many more.
      </div>

      <div>
        <img src='src\assets\back.png' className='col-1 mx-3' onClick={imagehandler} />
        <span></span>
        {
          frontimage ? (<img src='src\assets\blogdot-front.jpg' className='col-7 col-lg-9'/>)
            :
            (<img src='src\assets\blogdot-back.jpg' className='col-8 col-lg-10' />)
        }
        <span></span>
        <img src='src\assets\right-arrow.png' className='col-1 mx-3' onClick={imagehandler} />
      </div>

      <div className='d-flex gap-3'>
        <button className='urbanist-400-16 button-radius button-black' onClick={imagehandler} >Front/Back</button>
        <button className='urbanist-400-16 button-radius button-white'>Design my own</button>
      </div>
    </div>

  )
}
