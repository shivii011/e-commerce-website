import Navigation from "./Navigation";
import SideBar from "./SideBar";

const NavBar = () => {
  return (
	<div>
		<Navigation className={"hidden lg:inline-block"} />
		<SideBar className={"block lg:hidden"} />
	</div>
  )
}

export default NavBar
