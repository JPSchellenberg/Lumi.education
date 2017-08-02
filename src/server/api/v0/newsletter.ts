import * as express from 'express';
import * as request from 'superagent';
import { assign } 	from 'lodash';
import * as _debug from 'debug';

const debug = _debug('api:newsletter');

export default function boot(server: express.Application) {

	server.post('/api/v0/newsletter', (req: express.Request, res: express.Response, next: express.NextFunction) => {

		debug('email subscription requested', req.body);

		request
		.post( process.env.NEWSLETTER_API )
		.auth('anykey', process.env.NEWSLETTER_API_KEY )
		.send({ 
			'email_address': req.body.email_address,
			'merge_fields': req.body.merge_fields,
			'status':'pending'
		})
		.end((err, response) => {
			
			if (err) { 
				debug('email error', req.body.email_address);
				res.status(400).end(); 
			}
			else {
				debug('email subscribed', req.body.email_address);
				res.status(200).end();
			}
		} );
	});
}