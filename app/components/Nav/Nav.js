import React from 'react';
import { Link } from 'react-router-dom';

require('./nav.scss');

const NavBar = function() {
	return (
		<nav className="navbar">
			<Link to="/">
				<img src="/logo.png" alt="Underlay Logo" />
			</Link>
			<div className="spacer" />
			<a href="/#rfcs" className="right-link">
				RFCs
			</a>
			<a href="https://github.com/underlay" className="right-link">
				Code
			</a>
			
		</nav>
	);
};

export default NavBar;
