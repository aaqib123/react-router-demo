import { Link } from "react-router-dom";

const Header = () => {
	return (
		<nav className="header">
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/lists">Lists</Link>
			<Link to="/lists/1">List</Link>
		</nav>
	);
};

export default Header;
