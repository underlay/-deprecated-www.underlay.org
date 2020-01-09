import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Route, withRouter, Switch } from 'react-router-dom';
import Landing from 'containers/Landing/Landing';
import NoMatch from 'containers/NoMatch/NoMatch';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';

require('./app.scss');

const propTypes = {
	location: PropTypes.object.isRequired,
};

const App = function(props) {
	const { location } = props;
	return (
		<div className="app">
			<Helmet>
				<title>Underlay</title>
				<meta name="description" content="Open, distributed graph data" />
			</Helmet>

			<Nav location={location} />

			<Switch>
				<Route exact path="/" component={Landing} />
				<Route path="/404.html" component={NoMatch} />
				<Route path="/*" component={NoMatch} />
			</Switch>

			<Footer />
		</div>
	);
};

App.propTypes = propTypes;
export default withRouter(App);
