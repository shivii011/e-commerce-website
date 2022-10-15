import React from 'react'
import Footer from './Footer'
import Footer2 from './Footer2'
function MainFooter() {
  return (
  <div>
      <div><Footer className={"hidden lg:block"} /></div>
      <div><Footer2 className={"block lg:hidden"} /></div>
  </div>
  )
}

export default MainFooter