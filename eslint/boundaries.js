const BOUNDARIES_MODE = {
	FOLDER: 'folder',
	FULL: 'full',
};

const BOUNDARIES = {
	INDEX: 'index',
	APP: 'app',
	APP_TEST: 'app.test',
	SCREENS: 'screens',
	NAVIGATIONS: 'navigations',
	COMPONENTS: 'components',
	CONSTANTS: 'constants',
	HELPERS: 'helpers',
	HOOKS: 'hooks',
	SERVICES: 'services',
	STORE: 'store',
	TYPES: 'types',
	STYLES: 'styles',
	ASSETS: 'assets',
};

const IMPORT_RULE = {
	TYPES: ['type'],
	TYPES_AND_VALUES: ['type', 'value'],
};

const BOUNDARIES_CONFIG = {
	[BOUNDARIES.INDEX]: {
		[BOUNDARIES.APP]: IMPORT_RULE.TYPES_AND_VALUES,
	},
	[BOUNDARIES.APP]: {
		[BOUNDARIES.NAVIGATIONS]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.SCREENS]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.HOOKS]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.STYLES]: IMPORT_RULE.TYPES_AND_VALUES,
	},
	[BOUNDARIES.APP_TEST]: {
		[BOUNDARIES.APP]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.SCREENS]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.NAVIGATIONS]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.HOOKS]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.STYLES]: IMPORT_RULE.TYPES_AND_VALUES,
	},
	[BOUNDARIES.NAVIGATIONS]: {
		[BOUNDARIES.NAVIGATIONS]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.SCREENS]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.CONSTANTS]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.HELPERS]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.TYPES]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.STYLES]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.ASSETS]: IMPORT_RULE.TYPES_AND_VALUES,
	},
	[BOUNDARIES.SCREENS]: {
		[BOUNDARIES.NAVIGATIONS]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.COMPONENTS]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.SERVICES]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.STYLES]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.TYPES]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.CONSTANTS]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.HELPERS]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.ASSETS]: IMPORT_RULE.TYPES_AND_VALUES,
	},
	[BOUNDARIES.COMPONENTS]: {
		[BOUNDARIES.COMPONENTS]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.CONSTANTS]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.HELPERS]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.TYPES]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.STYLES]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.SERVICES]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.ASSETS]: IMPORT_RULE.TYPES_AND_VALUES,
	},
	[BOUNDARIES.SERVICES]: {
		[BOUNDARIES.SERVICES]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.STORE]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.HOOKS]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.HELPERS]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.TYPES]: IMPORT_RULE.TYPES,
		[BOUNDARIES.CONSTANTS]: IMPORT_RULE.TYPES_AND_VALUES,
	},
	[BOUNDARIES.STORE]: {
		[BOUNDARIES.STORE]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.HELPERS]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.TYPES]: IMPORT_RULE.TYPES,
		[BOUNDARIES.CONSTANTS]: IMPORT_RULE.TYPES_AND_VALUES,
	},
	[BOUNDARIES.HOOKS]: {
		[BOUNDARIES.HOOKS]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.CONSTANTS]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.HELPERS]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.TYPES]: IMPORT_RULE.TYPES,
	},
	[BOUNDARIES.HELPERS]: {
		[BOUNDARIES.HELPERS]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.CONSTANTS]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.TYPES]: IMPORT_RULE.TYPES,
	},
	[BOUNDARIES.CONSTANTS]: {
		[BOUNDARIES.CONSTANTS]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.TYPES]: IMPORT_RULE.TYPES,
	},
	[BOUNDARIES.STYLES]: {
		[BOUNDARIES.STYLES]: IMPORT_RULE.TYPES_AND_VALUES,
		[BOUNDARIES.CONSTANTS]: IMPORT_RULE.TYPES_AND_VALUES,
	},
	[BOUNDARIES.TYPES]: {
		[BOUNDARIES.TYPES]: IMPORT_RULE.TYPES,
	},
};

const BOUNDARIES_RULES = Object.entries(BOUNDARIES_CONFIG).flatMap(
	([from, config]) =>
		Object.entries(config).map(([allow, importKind]) => ({
			from,
			allow,
			importKind,
		})),
);

const getSrcPatternByType = function (type) {
	return 'src/' + type;
};

module.exports = {
	elements: [
		{
			type: BOUNDARIES.INDEX,
			pattern: 'src/index.ts',
			mode: BOUNDARIES_MODE.FULL,
		},
		{
			type: BOUNDARIES.APP,
			pattern: 'src/App.tsx',
			mode: BOUNDARIES_MODE.FULL,
		},
		{
			type: BOUNDARIES.APP_TEST,
			pattern: 'src/App.test.tsx',
			mode: BOUNDARIES_MODE.FULL,
		},
		{
			type: BOUNDARIES.SCREENS,
			pattern: getSrcPatternByType(BOUNDARIES.SCREENS),
			mode: BOUNDARIES_MODE.FOLDER,
		},
		{
			type: BOUNDARIES.NAVIGATIONS,
			pattern: getSrcPatternByType(BOUNDARIES.NAVIGATIONS),
			mode: BOUNDARIES_MODE.FOLDER,
		},
		{
			type: BOUNDARIES.COMPONENTS,
			pattern: getSrcPatternByType(BOUNDARIES.COMPONENTS),
			mode: BOUNDARIES_MODE.FOLDER,
		},
		{
			type: BOUNDARIES.CONSTANTS,
			pattern: getSrcPatternByType(BOUNDARIES.CONSTANTS),
			mode: BOUNDARIES_MODE.FOLDER,
		},
		{
			type: BOUNDARIES.HELPERS,
			pattern: getSrcPatternByType(BOUNDARIES.HELPERS),
			mode: BOUNDARIES_MODE.FOLDER,
		},
		{
			type: BOUNDARIES.HOOKS,
			pattern: getSrcPatternByType(BOUNDARIES.HOOKS),
			mode: BOUNDARIES_MODE.FOLDER,
		},
		{
			type: BOUNDARIES.SERVICES,
			pattern: getSrcPatternByType(BOUNDARIES.SERVICES),
			mode: BOUNDARIES_MODE.FOLDER,
		},
		{
			type: BOUNDARIES.STORE,
			pattern: getSrcPatternByType(BOUNDARIES.STORE),
			mode: BOUNDARIES_MODE.FOLDER,
		},
		{
			type: BOUNDARIES.TYPES,
			pattern: getSrcPatternByType(BOUNDARIES.TYPES),
			mode: BOUNDARIES_MODE.FOLDER,
		},
		{
			type: BOUNDARIES.STYLES,
			pattern: getSrcPatternByType(BOUNDARIES.STYLES),
			mode: BOUNDARIES_MODE.FOLDER,
		},
		{
			type: BOUNDARIES.ASSETS,
			pattern: BOUNDARIES.ASSETS,
			mode: BOUNDARIES_MODE.FOLDER,
		},
	],
	rules: {
		elementTypes: [
			'error',
			{
				default: 'disallow',
				message:
					'${file.type} is not allowed to import from ${dependency.type}',
				rules: BOUNDARIES_RULES.map(({ from, allow, importKind }) => ({
					from,
					allow,
					importKind,
				})),
			},
		],
	},
};