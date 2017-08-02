import { 
	createStore,
	applyMiddleware,
	compose
} 								from 'redux';

import { throttle } 			from 'lodash';

import thunk 		   			from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { Router, Route, browserHistory } from 'react-router';

import rootReducer              from './reducer';

declare var window: any;
declare var process: any;

export function loadState() {
	try {
		const serializedState = localStorage.getItem('state');
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch(err) { return undefined; }
}

export function saveState(state) {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('state', serializedState);
	} catch (err) {
		debugger;
	}
}


const persistentState = loadState(); 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore<any>(rootReducer, persistentState, composeEnhancers(applyMiddleware(thunk, routerMiddleware(browserHistory)) ));


store.subscribe(throttle( () => {
	saveState( store.getState() );
}, 1000) );

export default store;