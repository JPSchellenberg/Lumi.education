import * as _debug from 'debug';

import server from '../core/server';
import boot_api from '../api';

import * as cluster from 'cluster';
import * as os from 'os';

declare var process: any;

const debug = _debug('boot');
const express_debug = _debug('boot:express');

export default function () {



	if (process.env.NODE_ENV == 'development') { boot(); } 
	else {
		const numCPUs = os.cpus().length;

		if (cluster.isMaster) {
			console.log('Master ' + process.pid + ' is running');

			for (let i = 0; i < numCPUs; i++) {
				cluster.fork();
			}

			cluster.on('exit', (deadWorker, code, signal) => {
				console.log(`worker ${deadWorker.process.pid} died`);
				const worker = cluster.fork();
				console.log(`new worker ${worker.process.pid} born.`);
			});
		} else {
			boot();
			console.log(`Worker ${process.pid} started`);
		}
	}
}

function boot() {
	debug('starting boot-sequence');

	boot_api(server);

	const http_server = server.listen(process.env.PORT || 80, function () {
		express_debug('express-server successfully booted: ' + process.env.PORT || 80);
	});

	debug('finished boot-sequence');
}
