import * as React from 'react';
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home'

class App extends React.Component<IAppProps> {
	render() {
		return(
			<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
			</BrowserRouter>
		)
	}
}

export interface IAppProps {}


export default App;
