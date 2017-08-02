import * as express		from 'express';
import * as bodyParser	from 'body-parser';
import * as cookieParser from 'cookie-parser';

import notify from './notify';
const server: express.Application = express();

server.use(bodyParser.json());

server.use(bodyParser.urlencoded({
	extended: true
}));

server.use(cookieParser());

if (process.env.NODE_ENV === 'production') {
	server.get('/', notify);
}


server.use(express.static(__dirname + '/public'));

server.get('*', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});

export default server;