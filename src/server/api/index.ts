import * as express from 'express';
import boot_v0 from './v0';

export default function boot(server: express.Application) {
	boot_v0(server);

	server.use(express.static('public'));
}