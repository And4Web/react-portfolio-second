import React from 'react'

import './footer.css'

function Footer() {
  return (
    <div className='footer'>
      <p>Developed and maintained by &#169;And4Web {new Date().getFullYear()}.</p>
    </div>
  )
}

export default Footer