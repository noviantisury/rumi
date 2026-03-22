console.log('🐾 Starting...');

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';
import { start } from './config';

export const __dirname = dirname(fileURLToPath(import.meta.url));
export const rl = readline.createInterface(process.stdin, process.stdout);

export let worker = null;
export let running = false;
export let restartTimer = null;

export function restart() {
	if (worker) {
		try {
			worker.terminate();
		} catch {}
	}
	running = false;

	start('main.js');
}

start('main.js');
