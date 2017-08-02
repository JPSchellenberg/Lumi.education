import * as express		from 'express';
import * as request from 'superagent';

export default function notfiy(req: express.Request, res: express.Response, next: express.NextFunction) {
	if (req.path == '/') {
		request
		.post('https://api.clipclip.io/v1/send.php?key='+process.env.NOTIFY_KEY+'&sub=Page_view&msg=viewing_page').
		end();
	}

	next();
}