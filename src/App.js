import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import cv from './components/cv/cv';

class App extends Component {
	render() {
	  return (
		<HashRouter>
		<div>
			<div className="">
				<Route path="/" component={cv} exact />
				<Route path="/es" component={cv} exact />
				<Route path="/en" component={cv} exact />
			</div>
		</div>

	</HashRouter>   
	  );
	}
  }

export default App;