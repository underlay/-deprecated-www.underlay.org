import React from 'react';

require('./footer.scss');

const Footer = function() {
	return (
		<div className="footer-component">
			<a href="https://www.knowledgefutures.org">
				<span>A project of the</span>
				<img className="logo" src="/kfgMini.svg" alt="KFG logo" />
			</a>
		</div>
	);
};

export default Footer;
