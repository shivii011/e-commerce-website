import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Layout from './components/shared/Layout'
import PaymentPage from './pages/PaymentPage'
import LoginPage from './pages/LoginPage'
import WishList from './pages/Wishlist'
import ProductPage from './pages/ProductPage'

const App = () => {
  return (
    <>
		<Router>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} ></Route>
					<Route path="/AboutUs" element={<AboutUs />} ></Route>
					<Route path="/Contact" element={<Contact />} ></Route>
					<Route path="/PaymentPage" element={<PaymentPage />} ></Route>
					<Route path="/LoginPage" element={<LoginPage />} ></Route>
					<Route path="/WishList" element={<WishList />} ></Route>
					<Route path="/ProductPage/:productId" element={<ProductPage />} ></Route>
				</Routes>
      		</Layout>
    	</Router>
    </>
  )
}

export default App

