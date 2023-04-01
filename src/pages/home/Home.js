import React from 'react'
import { useSelector } from 'react-redux'

import Dropdown from '../../components/dropdown/Dropdown'

function Home() {
  const dropdownIsActive = useSelector(store=>store.dropdownIsActive);

  return (
    <div>
      {dropdownIsActive && <Dropdown/>}
    </div>
  )
}

export default Home