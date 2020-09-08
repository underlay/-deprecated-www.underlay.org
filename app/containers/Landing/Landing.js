import React from 'react';

require('./landing.scss');

const Landing = function() {
	const blocks = [
		{
			title: 'Assertions',
			icon: '/assertions.svg',
			text:
				'The fundamental unit of data in the Underlay. Immutable statements that can specify their provenance and be cryptographically signed to allow for trust- and context-based filtering.',
			spec: 'https://github.com/underlay/arc-protocol/blob/master/assertions.md',
			specText: 'View Assertion Spec',
		},
		{
			title: 'Reduction',
			icon: '/reduction.svg',
			text:
				'The process of taking a set of assertions and merging them to create a consistent state. Reduction allows assertions to be used as immutable transactions that change a larger graph.',
			spec: 'https://github.com/underlay/arc-protocol/blob/master/reduction.md',
			specText: 'View Reduction Spec',
		},
		{
			title: 'Collections',
			icon: '/collections.svg',
			text:
				'Containers that enable curation of a usefully scoped set of graph data. Collections can be versioned and include a set of assertions, a reduction schema, other sub-collections, and metadata.',
			spec: 'https://github.com/underlay/arc-protocol/blob/master/collections.md',
			specText: 'View Collection Spec',
		},
	];

	const readings = [
		{
			rfcNumber: '0',
			title: 'Underlay RFCs',
			date: 'Aug 2, 2020 · Danny Hillis',
			link: 'https://notes.knowledgefutures.org/pub/urfcs/release/1',
		},
		{
			rfcNumber: '-1',
			title: 'Understander: A Science Annotator',
			date: 'May 14, 2020 · Samuel Klein',
			link: 'https://notes.knowledgefutures.org/pub/annotator/release/2',
		},
		{
			rfcNumber: '-2',
			title: 'Open Research Questions (2019)',
			date: 'Nov 26, 2019 · Joel Gustafson',
			link: 'https://notes.knowledgefutures.org/pub/research-questions/release/1',
		},
		{
			rfcNumber: '-3',
			title: 'Content-Addressing Semantic Data',
			date: 'Oct 24, 2019 (updated Aug 31, 2020) · Joel Gustafson',
			link: 'https://notes.knowledgefutures.org/pub/ic0grz58/release/3',
		},
	];

	const joinButtons = [
		{ title: 'Newsletter', icon: '', link: 'https://eepurl.com/gJL39b' },
		{ title: 'Github', icon: '', link: 'https://github.com/underlay' },
		{ title: 'Contact', icon: '', link: 'mailto:team@underlay.org' },
	];

	return (
		<div id="landing-page">
			<section className="intro">
				<h1>The world’s distributed knowledge graph</h1>
				<p>
					The Underlay's purpose is to make knowledge accessible, connectable, and
					inspectable in service of the public good. Like the web, it is an emergent
					system and concept. It is built on a set of open source protocols and tools for
					structuring, storing, and aggregating distributed graph data.
				</p>
			</section>
			<section className="how">
				<h2>How it Works</h2>
				<p>
					The Underlay is premised on the idea that a knowledge graph can be constructed
					from a series of distributed transactions called <b>assertions</b>. Multiple
					assertions are combined through a process called <b>reduction</b> and can be
					curated into useful groupings using <b>collections</b>.
				</p>
				<div className="blocks">
					{blocks.map((item) => {
						return (
							<div className="block">
								<div className="image-wrapper">
									<img className="icon" src={item.icon} alt={item.title} />
								</div>
								<div className="title">{item.title}</div>
								<div className="text">{item.text}</div>
								<div className="link">
									<a className="button" href={item.spec}>
										{item.specText}
									</a>
								</div>
							</div>
						);
					})}
				</div>
				<div className="registry-block">
					<img src="/registry.svg" alt="Registry icon" />
					<div>
						<div className="title">Registries</div>
						<div className="text">
							A hosted service that manages collections and implements usage policies.
							Registries can implement query capabilities, user authentication, or
							other features that make the content and its creation more accessible.
						</div>
						<div className="text">
							A first Underlay registry, R1, is being developed in parallel to the
							protocol and specs.
						</div>
						<div className="link">
							<a className="button" href="https://r1.underlay.org">
								Visit R1
							</a>
						</div>
					</div>
				</div>
			</section>
			<section className="read">
				<h2 id="rfcs">RFCs</h2>
				<p>
					<span>
						The Underlay maintains a RFC (Request for Comments) series to document our
						ideas, proposals, progress, and plans. RFCs represent snapshots of thinking
						and may contain outdated or deprecated ideas. For a more thorough
						description, see{' '}
					</span>
					<a href="https://notes.knowledgefutures.org/pub/urfcs/release/1">
						Danny Hillis's RFC 0
					</a>
					.
				</p>
				<div className="readings">
					{readings.map((item) => {
						return (
							<a className="reading" href={item.link}>
								<div>
									<b>RFC {item.rfcNumber}</b> {item.title}
								</div>
								<div className="date">{item.date}</div>
							</a>
						);
					})}
				</div>
				<p>
					<a
						className="button"
						href="https://github.com/underlay/overview/blob/master/community/RFCs.md"
					>
						View all RFCs
					</a>
				</p>
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
