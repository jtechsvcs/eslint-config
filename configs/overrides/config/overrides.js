const standard = [];
const typescript = [
	{
		"files": ["*.ts", "*.tsx"],
		"rules": {
			"indent": "off",
		},
	},
	{
		"files": ["*.js", "*.vue"],
		"rules": {
			"@typescript-eslint/indent": "off",
			"@typescript-eslint/no-var-requires": "off",
		},
	},
];
const vue = [
	{
		"files": ["*.vue"],
		"rules": {
			"indent": "off",
		},
	},
];
const react = [];
const vueTypescript = vue.concat(typescript);
const reactTypescript = react.concat(typescript);

module.exports = {
	standard,
	typescript,
	vue,
	react,
	vueTypescript,
	reactTypescript,
};