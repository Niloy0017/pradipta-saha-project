import React from 'react'

export default function Work() {
  return (
    <div className='p-3 row'>

      <div className='d-flex justify-content-between mb-2 flex-column flex-lg-row'>
        <div>
          <div className='urbanist-400-36 text-start'>Understanding the Mechanics</div>
          <div className='urbanist-800-50 text-start'>How it works</div>
        </div>
        <button className='inter-400-b button-radius work-button button-black'>Read More</button>
      </div>

      <div className='d-flex justify-content-around flex-wrap '>

        <div className='work-box'>

          <div className="background"></div>

          <div className="work-box-content d-flex flex-column p-3 gap-3 align-items-start">
            <div className='urbanist-800-50'>Step 01</div>
            <img className='work-icon' src='src\assets\order-delivery.png'/>
            <div className='urbanist-800-22'>Order</div>
            <div className='urbanist-400-16 text-start'>
              Select a card and add-ons. Complete the order process and payment.
            </div>
          </div>

        </div>

        <div className='work-box '>

          <div className="background"></div>

          <div className="work-box-content d-flex flex-column p-3 gap-3 align-items-start">
            <div className='urbanist-800-50'>Step 02</div>
            <img className='work-icon' src='src\assets\vector.png'/>
            <div className='urbanist-800-22'>Design</div>
            <div className='urbanist-400-16 text-start'>
              Provide design input and upload your logo through the design portal.
            </div>
          </div>

        </div>

        <div className='work-box'>

          <div className="background"></div>

          <div className="work-box-content d-flex flex-column p-3 gap-3 align-items-start">
            <div className='urbanist-800-50'>Step 03</div>
            <img className='work-icon' src='src\assets\print.png'/>
            <div className='urbanist-800-22'>Review</div>
            <div className='urbanist-400-16 text-start'>
              Review the digital design proof and provide feedback.
            </div>
          </div>

        </div>

        <div className='work-box'>

          <div className="background"></div>

          <div className="work-box-content d-flex flex-column p-3 gap-3 align-items-start">
            <div className='urbanist-800-50'>Step 04</div>
            <img className='work-icon' src='src\assets\printer.png'/>
            <div className='urbanist-800-22'>Print & Ship</div>
            <div className='urbanist-400-16 text-start'>
              After approval we will program, produce and ship your card.
            </div>
          </div>

        </div>
        
      </div>

    </div>
  )
}

