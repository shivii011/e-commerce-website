import NavBar from './shared/NavBar'
import Footer from './shared/Footer'
import Newslatter from '../Newslatter'

const Layout = ({ children }) => {
  return (
    <>
        <NavBar />
        <main>{children}</main>
        <Newslatter />
        <Footer />
    </>
  )
}

export default Layout