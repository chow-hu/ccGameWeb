let relative = require('./relative');
let tools = require('./core/tools');
//========================================================================================
let os_handler = function (os_t) {
	let os = relative.data(`os.${os_t}`, null);
	if (!os) {
		return null;
	}
	try {
		return require('./' + os.js);
	} catch (error) {
		console.error(error);
		return null;
	}
}
let un_exit_os_type = function (os_t) {
	console.log(`==========命令[${os_t}]不存在==========`);
	console.log('\n=========node tools --h 查看可操作指令=========\n');

}
let valid_force_parm = function (os_parm, force) {
	for (let index = 0; index < force.length; index++) {
		const element = force[index];
		if (!Object.prototype.hasOwnProperty.call(os_parm, element)) {
			return element;
		}
	}
	return '';
}
let valid_default_parm = function (os_t, os_parm) {
	let default_parm = relative.data(`os.${os_t}.default`, {});
	for (const key in default_parm) {
		if (Object.prototype.hasOwnProperty.call(default_parm, key)) {
			const element = default_parm[key];
			if (!Object.prototype.hasOwnProperty.call(os_parm, key)) {
				os_parm[key] = element;
			}
		}
	}
}
let valid_filter_parm = function (os_t, os_parm) {
	let cmd_config = relative.data(`os.${os_t}.cmd`, {});
	let keys = Object.keys(os_parm);
	keys.forEach(key => {
		const config = cmd_config[key];
		if (config.filter && config.filter.length > 0) {
			config.filter.forEach(element => {
				delete os_parm[element];
			});
		}
	});
}

let run_os_valid = function (handler, os_t, os_parm) {
	let force = relative.data(`os.${os_t}.force`, []);
	let force_parm = valid_force_parm(os_parm, force);
	if (force_parm) {
		let parm_name = relative.data(`os.${os_t}.cmd.${force_parm}.name`, '');
		tools.input(force_parm + "|" + parm_name).then(parm => {
			if (!parm) {
				run_os_valid(handler, os_t, os_parm);
				return;
			}
			os_parm[force_parm] = parm;
			run_os_valid(handler, os_t, os_parm);
		})
		return;
	}
	valid_default_parm(os_t, os_parm);
	valid_filter_parm(os_t, os_parm);
	run_os(handler, os_parm);
}

let run_os = function (handler, os_parm) {
	console.log("> os_parm:", os_parm);
	try {
		handler.run(os_parm);
	} catch (error) {
		console.error(error);
	}
}

let run = function (os_t, os_parm) {
	console.log("> os_type:", os_t);
	let handler = os_handler(os_t);
	if (handler) {
		if (os_parm['--h']) {
			let desc = relative.data(`os.${os_t}.desc`, '');
			if (desc) {
				console.log("--h\n\x1B[36m%s\x1B[0m", desc.join('\n'));
			} else {
				console.log(`===============请补充命令[${os_t}]描述===============`);
			}
			return;
		}
		run_os_valid(handler, os_t, os_parm);
	} else {
		un_exit_os_type(os_t);
	}
}
module.exports = {
	run
}