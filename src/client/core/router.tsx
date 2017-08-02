import * as React 					from 'react';

import { 
	Router,
	Redirect,
	Route
} 									from 'react-router';

import App 							from '../container/app';
import Landing 						from '../pages/landing';
import Alpha 						from '../pages/alpha';

interface IProps {
	history: any;
}

interface IState {
}

export default class RouterWrapper extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
	}

	render() {
		return(
			<Router history={this.props.history}>
				
				<Route component={App}>
					<Route path="/" component={Landing} />
					<Route path="/alpha" component={Alpha} />
				</Route>

				<Redirect from="*" to="/" />
				
			</Router>
			);
	}
};