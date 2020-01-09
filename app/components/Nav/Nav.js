import React from 'react';
import { Link } from 'react-router-dom';

require('./nav.scss');

const NavBar = function() {
	return (
		<nav className="navbar">
			<Link to="/">
				<img src="/logo.png" alt="Underlay Logo" />
			</Link>
			<a
				href="https://docs.google.com/document/d/13KpOrtMo4cWFNrmf0Qf12G-kQ9kgN4AlLRmNSNiGdKE/edit?usp=sharing"
				style={{ marginLeft: '250px' }}
			>
				Edit Text
			</a>
		</nav>
	);
};

export default NavBar;
