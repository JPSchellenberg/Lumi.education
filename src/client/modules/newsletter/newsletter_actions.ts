import {
	NEWSLETTER_SUBSCRIBE_REQUEST,
	NEWSLETTER_SUBSCRIBE_SUCCESS,
	NEWSLETTER_SUBSCRIBE_ERROR,
	NEWSLETTER_SET_EMAIL,
	NEWSLETTER_RESET,
	NEWSLETTER_POPUP_DISMISS
} from './newsletter_constants';

import * as API from './newsletter_api';

export function newsletter_subscribe(email_address: string, merge_fields: Object) {
	return dispatch => {

		dispatch({
			type: NEWSLETTER_SUBSCRIBE_REQUEST,
			payload: { email_address, merge_fields }
		});

		API.newsletter_subscribe(email_address, merge_fields)
			.then(res => {
				switch (res.status) {
					case 200:
						dispatch({
							type: NEWSLETTER_SUBSCRIBE_SUCCESS,
							payload: { email_address, merge_fields }
						});
						break;
					default:
					case 400:
						dispatch({
							type: NEWSLETTER_SUBSCRIBE_ERROR,
							payload: {
								error: 400,
								email_address,
								merge_fields
							}
						})
						break;
				}
			})
			.catch(err => {
				dispatch({
					type: NEWSLETTER_SUBSCRIBE_ERROR,
					payload: {
						error: 400,
						email_address,
						merge_fields
					}
				})
			})
	}
}

export function newsletter_set_email(email_address: string) {
	return {
		type: NEWSLETTER_SET_EMAIL,
		payload: { email_address }
	};
}

export function newsletter_reset() {
	return {
		type: NEWSLETTER_RESET
	};
}

export function newsletter_popup_dismiss() {
	return {
		type: NEWSLETTER_POPUP_DISMISS
	};
}