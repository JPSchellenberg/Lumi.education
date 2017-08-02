import * as express from 'express';
import boot_newsletter from './newsletter';

export default function boot(server: express.Application) {
	boot_newsletter(server);
}