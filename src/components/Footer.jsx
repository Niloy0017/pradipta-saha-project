import React from 'react'

export default function Footer() {
  return (
    <div className='p-3'>

      <div className='d-flex justify-content-lg-around row'>

        <div className='footer-1 text-start col-12 col-lg-3 mb-3 d-flex flex-column justify-content-center'>
          <img className='footer-onetaag' src='https://s3-alpha-sig.figma.com/img/b973/3671/3ea070fc6acb4b457046bfb370512ac7?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=imcSvz3OOaPG00I5A9RPLU3ZbVW11Ljh7t21fUQDGbnQfsHdGFdmZHa30bQY6nwg0lY514P-ivw1BpJ9dPEQf3QI6V33vHbr~UlahU~yejR6hEPw0qrZpY3xmfZOU1hNqnY6fUeA23fTEOjerolqq7jLM1P2sRvXNu~k8vLVkp66jQ65lN8TZH-NFEbbAkjJWhrfDx8-3Vr3HfkPpJWJyOtVCxMJe2cNt0VVBK5WgDI20Rbf-FEuMb4v2blgHp3aJVt5u8wePp5bcnyitD5ZJ58aCxAA5eBg-xZLk9QcVc1FfpiGJqLnJiFXU-TzcY1KpBZjRdvbIAFwWyTZtAxYog__' />
          <p className='inter-400 text-start'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa.
          </p>
          <div className='footer-right-icon-width d-flex justify-content-start gap-3 col-12 col-md-3'>
            <img className='footer-right-icon' src='src\assets\facebook (1).png' />
            <img className='footer-right-icon' src='src\assets\instagram (1).png' />
            <img className='footer-right-icon' src='src\assets\telegram.png' />
          </div>
        </div>

        <div className='footer-2  inter-400-20 col-12 col-lg-3 mb-3 d-flex flex-column justify-content-center'>
          <div className='urbanist-800-28 text-start'>Quick Nav</div>
          <div className='urbanist-400-20 text-start'>
            <div>About Us</div>
            <div>Features</div>
            <div>Why Us</div>
            <div>Testimonials</div>
          </div>
        </div>

        <div className='footer-3 col-12 col-lg-3 mb-3 d-flex flex-column justify-content-center'>
          <div className='urbanist-800-28 text-start'>Solution</div>
          <div className='urbanist-400-20 text-start'>
            <div>
              <img className='footer-left-icon' src='src\assets\maps-and-flags.png' />
              <span><span> </span>918 Abner Road, Hudson</span>
            </div>
            <div>
              <img className='footer-left-icon' src='src\assets\email (1).png' />
              <span><span> </span>example@mail.com</span>
            </div>
            <div>
              <img className='footer-left-icon' src='src\assets\phone-call.png' />
              <span><span> </span>+1 234 567 890</span>
            </div>
            <div>
              <img className='footer-left-icon' src='src\assets\clock.png' />
              <span><span> </span>07.00 AM - 23.00 PM</span>
            </div>
          </div>
        </div>

      </div>

      <hr></hr>
      <p className='poppins-400'>Copyright 2024 © Onetaag. All Rights Reserved. | Terms and Conditions | Privacy Policy</p>
    </div>
  )
}
