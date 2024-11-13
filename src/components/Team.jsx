import React from 'react'

export default function Team() {
  return (
    <div className='d-flex flex-wrap team p-3 row flex-column-reverse flex-lg-row'>

      <div className='position-relative col-12 col-lg-6 team-right'>
        <img className='team-img' src='https://s3-alpha-sig.figma.com/img/5014/daed/c843ff449108e77e78f117f0c2d77db3?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WSTTmaKqwLovofID~Q8yW-FmrbM~Ujo4aeWM33BlsvVYvxxokynQaSJHahy-AP6gYBzhCSC-MJAjpa39w3OQJvXEh8uRPLshg7NX~GPIRMV02dxVcBr4hMtwdoHRtPMHMznrBCXFi9GzJss0NxjNiu9Hrr9O9X58gBxXjpD1R7oRjinyil1fl-LOiTz-6knOvgwKga-FqzXDkMyjZdsNIjw7jigN0KKf~GbiVIcpkZB~Pau2yX3cpt2etUrA3qfSw4IEq74MEn7IQuUFNlpGwq0oUhhynOiRnnsBzic3Wi9bVFhmXS8MlZqRfZ3dptsTokINLayDTjM-BYIUiAOt1Q__'></img>
        <div className='team-img-rectangle '></div>
      </div>

      <div className='col-12 col-lg-6'>
        <div>
          <div className='urbanist-400-50' >For Teams</div>
          <div className='urbanist-800-42' >The #1 Platform for Teams,</div>
          <div className='urbanist-800-42 text-border' >SMBs & Enterprises</div>
        </div>
        <p className='inter-400' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur.</p>
        <button className='inter-400-b button-radius button-black mb-3 mb-lg-0'>Read More</button>
      </div>

    </div>
  )
}
