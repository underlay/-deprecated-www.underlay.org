import React from 'react';
import { Link } from 'react-router-dom';

require('./nav.scss');

const NavBar = function() {
	return (
		<nav className="navbar">
			<Link to="/">
				<img src="/logo.png" alt="Underlay Logo" />
			</Link>
			<span style={{ marginLeft: '250px' }}>Edit Text</span>
		</nav>
	);
};

export default NavBar;
