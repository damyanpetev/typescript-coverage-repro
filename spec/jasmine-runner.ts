import Jasmine = require("jasmine");

const jasmineInst = new Jasmine({});

jasmineInst.loadConfig({
	random: false,
	spec_dir: "",
	spec_files: [
		"spec/**/*[sS]pec.js",
		"migrations/**/*[sS]pec.js",
		"schematics/**/*[sS]pec.js"
	]
});

jasmineInst.execute([], null);
