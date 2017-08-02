import {
	assign
} from 'lodash';

import {
	Newsletter
} from './newsletter_types';

import {
	NEWSLETTER_SUBSCRIBE_REQUEST,
	NEWSLETTER_SUBSCRIBE_ERROR,
	NEWSLETTER_SUBSCRIBE_SUCCESS,
	NEWSLETTER_SET_EMAIL,
	NEWSLETTER_RESET,
	NEWSLETTER_POPUP_DISMISS
} from './newsletter_constants';

const initialState: Newsletter = {
	email_address: '',
	newsletter_subscription_status: 'init',
	popup_dismissed: false
};


export default function (state: Newsletter = initialState, action): Newsletter {
	switch (action.type) {

		case NEWSLETTER_RESET:
			return assign({}, state, {
				email_address: '',
				newsletter_subscription_status: 'init'
			});

		case NEWSLETTER_SET_EMAIL:
			return assign({}, state, { email_address: action.payload.email_address });

		case NEWSLETTER_SUBSCRIBE_REQUEST:
			return assign({}, state, {
				newsletter_subscription_status: 'pending'
			});

		case NEWSLETTER_SUBSCRIBE_SUCCESS:
			return assign({}, state, {
				newsletter_subscription_status: 'success',
				popup_dismissed: true
			});

		case NEWSLETTER_SUBSCRIBE_ERROR:
			return assign({}, state, {
				newsletter_subscription_status: 'error'
			});

		case NEWSLETTER_POPUP_DISMISS: 
			return assign({}, state, { popup_dismissed: true });

		default:
			return state;
	}

}