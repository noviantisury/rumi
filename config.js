import { watchFile, unwatchFile } from 'fs';
import chalk from 'chalk';
import { fileURLToPath } from 'url';

global.pairingNumber = 6285763571655;
global.owner = [['6285763571655', 'Kayzen Izumi', true]]
global.mods = [];

global.namebot = 'Kururmi';
global.author = 'Kayzen Izumi';

global.wait = '✨ _Wait bang...';
global.eror = '🚩 Yah eror... hmph~';

global.pakasir =  {
    slug: '', // isi nama slug nya
    apikey: '', //isi pakai apikey lu
    expired: 30, //1 = 1menit. 30 = 30menit
};

global.stickpath = 'created';
global.stickauth = namebot;

global.multiplier = 38; // The higher, The harder levelUp

global.APIs = {
    faa: 'https://api-faa.my.id',
    deline: 'https://api.deline.web.id'
}

/*============== EMOJI ==============*/
global.rpg = {
	emoticon(string) {
		string = string.toLowerCase();
		let emot = {
			level: '📊',
			limit: '🎫',
			health: '❤️',
			stamina: '🔋',
			exp: '✨',
			money: '💹',
			bank: '🏦',
			potion: '🥤',
			diamond: '💎',
			common: '📦',
			uncommon: '🛍️',
			mythic: '🎁',
			legendary: '🗃️',
			superior: '💼',
			pet: '🔖',
			trash: '🗑',
			armor: '🥼',
			sword: '⚔️',
			pickaxe: '⛏️',
			fishingrod: '🎣',
			wood: '🪵',
			rock: '🪨',
			string: '🕸️',
			horse: '🐴',
			cat: '🐱',
			dog: '🐶',
			fox: '🦊',
			petFood: '🍖',
			iron: '⛓️',
			gold: '🪙',
			emerald: '❇️',
			upgrader: '🧰',
		};
		let results = Object.keys(emot)
			.map((v) => [v, new RegExp(v, 'gi')])
			.filter((v) => v[1].test(string));
		if (!results.length) return '';
		else return emot[results[0][0]];
	},
};

let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
	unwatchFile(file);
	console.log(chalk.redBright("Update 'config.js'"));
	import(`${file}?update=${Date.now()}`);
});
