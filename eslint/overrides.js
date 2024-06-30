module.exports = [
	{
		files: [
			'**/*.spec.ts',
			'**/*.spec.tsx',
			'**/*.test.ts',
			'**/*.test.tsx',
		],
		rules: {
			'local/virtual-module': 'off',
			'no-magic-numbers': 'off',
			'@typescript-eslint/no-magic-numbers': 'off',
			'no-restricted-syntax': 'off',
			'import/no-extraneous-dependencies': 'off',
			'unicorn/no-null': 'off',
			'unicorn/no-useless-undefined': 'off',
			'@typescript-eslint/naming-convention': 'off',
			'@typescript-eslint/no-unsafe-assignment': 'off',
			'@typescript-eslint/no-var-requires': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-unsafe-return': 'off',
			'unicorn/prefer-module': 'off',
			'react/display-name': 'off',
			'@typescript-eslint/no-unsafe-member-access': 'off',
			'@typescript-eslint/no-unsafe-call': 'off',
			'@typescript-eslint/require-await': 'off',
		},
	},
];
