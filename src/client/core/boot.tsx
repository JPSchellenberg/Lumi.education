import * as React 					from 'react';
import * as ReactDOM 				from 'react-dom';
import { Provider }           		from 'react-redux';

import { browserHistory } 			from 'react-router';
import { syncHistoryWithStore } 	from 'react-router-redux';

import store 						from './store';
import Router 						from './router';

import * as injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from '../stylesheets/Theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default function boot() {
			const history = syncHistoryWithStore(browserHistory, store);

			ReactDOM.render(
				<Provider store={store}>
					<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
						<Router history={history} />
					</MuiThemeProvider>
				</Provider>
				,
				document.getElementById('root')
			);
}