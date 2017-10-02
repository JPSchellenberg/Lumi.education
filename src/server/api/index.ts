import * as express from 'express';
import boot_v0 from './v0';
import * as path 	from 'path';

export default function boot(server: express.Application) {

	server.use(express.static(__dirname + '/../public'));

	boot_v0(server);

	server.get('*', function(req, res){
		res.sendfile(path.resolve('build/public/index.html') );
	});
}