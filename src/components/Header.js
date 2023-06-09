import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
	<header>
		<h1>Expensify</h1>
		<NavLink to='/' exact activeClassName='active'>
			Dashboard
		</NavLink>
		<NavLink to='/create' activeClassName='active'>
			Create Expense
		</NavLink>
		<NavLink to='/help' activeClassName='active'>
			Help
		</NavLink>
	</header>
);

export default Header;