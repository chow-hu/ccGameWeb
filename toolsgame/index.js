
const argv = process.argv
let relative = require('./relative');
var os_tool = require('./os_tool');
var tools = require('./core/tools');
let ostype = process.argv[2];
function collect_os_params(params) {
	let os_parm = {};
	for (let index = 0; index < params.length; index++) {
		let os_index = params[index];
		if (/^--/.test(os_index)) {
			os_parm[os_index] = 1;
			let os_value = params[index + 1];
			if (os_value && ! /^ --/.test(os_value)) {
				os_parm[os_index] = os_value;
				index++;
			}
		}
	}
	return os_parm;
}
function _main_(params) {
	relative.load();
	let os_parm = collect_os_params(params);
	if (argv.length <= 2) {
		ostype = "--h";
	}
	if (ostype === "--h") {
		if (argv.length <= 3) {
			console.log('\n请输入要查看的指令 node asset --h ___\n')
			let os_list = relative.data(`os`, {});
			console.log(Object.keys(os_list).join(' | '));
			tools.input('指令').then(os_t => {
				os_tool.run(os_t, { '--h': 1 });
			})
			return;
		}
		os_tool.run(argv[3], { '--h': 1 });
		return;
	}
	os_tool.run(ostype, os_parm);
}

if (true) {
	let parms = {};
	if (argv.length >= 3) {
		parms = argv.slice(3, argv.length);
	}
	_main_(parms);
}