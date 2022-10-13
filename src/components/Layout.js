import NavBar from './shared/NavBar'
import Footer from './shared/Footer'

const Layout = ({ children }) => {
  return (
    <>
        <NavBar />
        <main>{children}</main>
        <Footer />
    </>
  )
}

export default Layout
