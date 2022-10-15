import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/AboutUs'
import Contact from './pages/Contact'
import Layout from './components/Layout'

const App = () => {
  return (
    <>
		<Router>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} ></Route>
					<Route path="/About" element={<About />} ></Route>
					<Route path="/Contact" element={<Contact />} ></Route>
				</Routes>
      		</Layout>
    	</Router>
    </>
  )
}

export default App

