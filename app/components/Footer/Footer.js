import React from 'react';
import { Link } from 'react-router-dom';

require('./footer.scss');


const Footer = function() {
	return (
		<nav className="footer">
			<a href="https://www.knowledgefutures.org">
				The Underlay is built and maintained by the Knowledge Futures Group
			</a>
		</nav>
	);
};

export default Footer;
