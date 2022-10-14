import React from 'react'
import Footer from './Footer'
import Footer2 from './Footer2'
function MainFooter() {
  return (
  <div>
      <div><Footer Name={'hidden sm:hidden md:hidden lg:block'}/></div>
    <div><Footer2 Name=" sm:block md:block lg:hidden"/></div>
  </div>
  )
}

export default MainFooter