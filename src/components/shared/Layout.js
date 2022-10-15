import NavBar from './NavBar'
import Footer from './MainFooter'
import NewsLetter from '../Newslatter'


const Layout = ({ children }) => {
    return (
      <>
          <NavBar />
          <main>{children}</main>
          <NewsLetter />
          <Footer />
      </>
    )
  }
  
  export default Layout