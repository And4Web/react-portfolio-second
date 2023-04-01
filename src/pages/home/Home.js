import React from 'react'
import banner from '../../img/main-banner.png'


function Home() {

  return (
    <div className='home'>
      <div className="banner-container">
        <img src={banner} alt="site banner" />
      </div>
    </div>
  )
}

export default Home