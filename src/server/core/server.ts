import * as express		from 'express';
import * as bodyParser	from 'body-parser';
import * as cookieParser from 'cookie-parser';

const server: express.Application = express();

server.use(bodyParser.json());

server.use(bodyParser.urlencoded({
	extended: true
}));

server.use(cookieParser());

export default server;