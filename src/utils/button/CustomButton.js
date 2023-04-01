import React from 'react'

import './customButton.css'

function CustomButton(props) {
  const {title} = props;
  return (
    <div className='button-container'>
      <button className='custom-button'>{title}</button>
    </div>
  )
}

export default CustomButton