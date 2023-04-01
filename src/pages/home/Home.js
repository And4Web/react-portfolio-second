import React from 'react'

import Banner from '../../sections/banner/Banner'
import Services from '../../sections/services/Services';

function Home() {

  return (
    <div className='home'>
      {/* Banner section */}
      <div className="banner-container">
        <Banner/>
      </div>
      
      {/* Services section */}
      <Services/>
      {/* Technical Stack information section */}
      {/* Projects section */}
      {/* Contact section */}
    </div>
  )
}

export default Home