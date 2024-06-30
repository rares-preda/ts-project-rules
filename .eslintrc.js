module.exports = {
	root: true,
	extends: require('./eslint/extends'),
	plugins: require('./eslint/plugins'),
	rules: require('./eslint/rules'),
	overrides: require('./eslint/overrides'),
	ignorePatterns: ['**/*.d.ts', '**/*.js'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2024,
		sourceType: 'module',
		project: './tsconfig.json',
	},
	settings: {
		react: {
			version: 'detect',
		},
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
			typescript: {
				alwaysTryTypes: true,
				project: ['tsconfig.json', '**/**/tsconfig.json'],
			},
		},
		'boundaries/elements': require('./eslint/boundaries').elements,
		'boundaries/include': ['**/*.ts', '**/*.tsx', '**/*.svg'],
	},
	env: {
		browser: true,
		es2021: true,
		jest: true,
		node: true,
	},
};
