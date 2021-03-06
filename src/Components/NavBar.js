import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav>
			<Link exact to="/">
				HOME
			</Link>
			<Link to="/transactions">TRANSACTIONS</Link>
			<Link to="/transactions/new">New Transaction</Link>
		</nav>
	);
};
export default NavBar;
