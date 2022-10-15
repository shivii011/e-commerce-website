import NavBar from './NavBar'
import Footer from './MainFooter'
import NewsLetter from '../Newslatter'


const Layout = ({ children }) => {
    return (
      <div className='bg-white'>
          <NavBar />
          <main>{children}</main>
          <NewsLetter />
          <Footer />
      </div>
    )
  }
  
  export default Layout