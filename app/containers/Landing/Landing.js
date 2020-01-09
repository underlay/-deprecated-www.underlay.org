import React from 'react';

require('./landing.scss');

const Landing = function() {
	const blocks = [
		{
			title: 'Messages',
			icon: 'icon',
			text: 'Hello',
		},
		{
			title: 'Packages',
			icon: 'icon',
			text: 'Hello',
		},
		{
			title: 'Registries',
			icon: 'icon',
			text: 'Hello',
		},
	];

	const readings = [
		{ title: 'Whitepaper', link: '' },
		{ title: 'FAQ', link: '' },
	];

	const joinButtons = [
		{ title: 'Newsletter', icon: '', link: '' },
		{ title: 'Github', icon: '', link: '' },
		{ title: 'Donate', icon: '', link: '' },
		{ title: 'Contact', icon: '', link: '' },
	];

	return (
		<div id="landing-page">
			<section className="intro">
				<h1>Open Distributed Graph Data</h1>
				<p>
					The Underlay is a free and open source system for structuring, storing, and
					aggregating open, distributed graph data.
				</p>
				<a className="button" href="https://registry.knowledgefutures.org">
					Explore the KFG Underlay Registry
				</a>
			</section>
			<section className="how">
				<h2>How it Works</h2>
				<div className="blocks">
					{blocks.map((item) => {
						return (
							<div className="block">
								<div className="title">{item.title}</div>
								<div className="icon">{item.icon}</div>
								<div className="text">{item.text}</div>
							</div>
						);
					})}
				</div>
			</section>
			<section className="read">
				<h2>Read More</h2>
				<div className="readings">
					{readings.map((item) => {
						return (
							<a className="reading" href={item.link}>
								<div className="title">{item.title}</div>
							</a>
						);
					})}
				</div>
			</section>
			<section className="join">
				<h2>Join the Effort</h2>
				<div className="join-buttons">
					{joinButtons.map((item) => {
						return (
							<a className="button" href={item.link}>
								{item.title}
							</a>
						);
					})}
				</div>
			</section>
		</div>
	);
};

export default Landing;
