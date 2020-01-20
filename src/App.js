import React, { Component } from 'react';
import { HashRouter, Route } from "react-router-dom";
import cv from './components/cv/cv';

class App extends Component {
	render() {
	  return (
		<HashRouter>
		<div>
			<div className="">
				<Route path="/es" component={cv} exact />
				<Route path="/en" component={cv} exact />
			</div>
		</div>

	</HashRouter>   
	  );
	}
  }

export default App;