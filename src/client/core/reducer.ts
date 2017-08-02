import { combineReducers }         from 'redux';
import { routerReducer }           from 'react-router-redux';

import newsletter                  from '../modules/newsletter/newsletter_reducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    newsletter
});

export default rootReducer;