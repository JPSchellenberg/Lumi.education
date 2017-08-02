import * as request from 'superagent';

export function newsletter_subscribe(email_address: string, merge_fields: Object) {
	return request('post', '/api/v0/newsletter')
		.send({
			email_address,
			merge_fields
		});
}
