import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

//Pages
import Home from './pages/Home';
import Banners from './pages/Banners';

export default class App extends React.Component {
	render() {
		return (
			<Switch>
			  <Route exact path="/" component={Home} />
			  <Route path="/banners" component={Banners} />
			</Switch>
		)
	}
}
