const PUBLIC_RESERVED = ['__cmp', '__gpp', '__tcfapi'];
const boundaries = require('./boundaries');

module.exports = {
	'prettier/prettier': 'error',
	'react/react-in-jsx-scope': 'off', // Disable the rule that requires React to be in scope
	'jsx-quotes': ['error', 'prefer-single'],
	'@typescript-eslint/no-explicit-any': 'error',
	'@typescript-eslint/consistent-type-imports': 'error',
	// force barrel-imports
	// https://packages.ecosyste.ms/registries/npmjs.org/packages/eslint-plugin-force-barrel-imports
	'force-barrel-imports/force-barrel-imports': 'error',
	// index
	'index/only-import-export': 'error',
	'index/forbid': 'off',
	// 'boundaries/external': ['error', {}],
	'boundaries/element-types': boundaries.rules.elementTypes,
	'no-restricted-imports': [
		'error',
		{
			patterns: [
				{
					group: ['./', '../'],
					message:
						'Avoid relative imports - use absolute imports instead - through the path aliases',
				},
			],
		},
	],
	'eslint-comments/no-unused-disable': 'warn',
	'eslint-comments/no-unlimited-disable': 'warn',
	'eslint-comments/no-use': [
		'error',
		{
			allow: [
				'eslint-disable',
				'eslint-disable-line',
				'eslint-disable-next-line',
				'eslint-enable',
			],
		},
	],
	'unicorn/prefer-node-protocol': 0,
	'unicorn/no-empty-file': 0,
	'unicorn/filename-case': [
		'error',
		{
			cases: {
				camelCase: true,
				pascalCase: true,
				kebabCase: false,
			},
		},
	],
	'unicorn/numeric-separators-style': 'error',
	// 'unicorn/prefer-logical-operator-over-ternary': 'error',
	'unicorn/prefer-array-find': 'error',
	'unicorn/prefer-array-flat': 'error',
	'unicorn/prefer-array-index-of': 'error',
	'unicorn/prefer-array-some': 'error',
	'unicorn/prefer-includes': 'error',
	'unicorn/prefer-spread': 'error',
	'unicorn/no-array-push-push': 'error',
	'unicorn/no-lonely-if': 'error',
	'unicorn/no-useless-spread': 'error',

	'unicorn/prefer-export-from': ['error', { ignoreUsedVariables: true }],
	'unicorn/consistent-destructuring': 'error',
	'import/no-default-export': 'error',
	'import/no-unresolved': 'error',
	'import/no-self-import': 'error',
	'import/no-cycle': ['error', { maxDepth: 20 }],
	'import/no-deprecated': 'error',
	'import/no-extraneous-dependencies': [
		'error',
		{
			devDependencies: false,
		},
	],
	'@typescript-eslint/array-type': 'error',
	'@typescript-eslint/naming-convention': [
		'error',
		// Allow any naming convention for object keys
		{
			selector: 'objectLiteralProperty',
			format: null,
		},
		// Allow any naming convention for enum members
		{
			selector: 'enumMember',
			format: ['PascalCase'],
			leadingUnderscore: 'forbid',
		},
		{
			selector: 'typeProperty',
			format: ['camelCase', 'PascalCase'],
		},
		// Allow any naming convention for const object keys
		{
			selector: 'variableLike',
			format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
			leadingUnderscore: 'allow',
		},
		// Leading underscore for private members for mangling purposes
		{
			selector: 'memberLike',
			modifiers: ['private'],
			format: ['camelCase'],
			leadingUnderscore: 'require',
		},
		// Leading underscore for protected members for mangling purposes
		{
			selector: 'memberLike',
			modifiers: ['protected'],
			format: ['camelCase'],
			leadingUnderscore: 'require',
		},
		// NO leading underscore for public members because they get mangled and can break the code
		{
			selector: 'memberLike',
			modifiers: ['public'],
			format: ['camelCase'],
			leadingUnderscore: 'forbid',
			filter: {
				regex: `^(${PUBLIC_RESERVED.join('|')})$`,
				match: false,
			},
		},
		// All static props are treated as exported consts so UPPER CASED for readability
		{
			selector: 'classProperty',
			modifiers: ['static'],
			format: ['UPPER_CASE'],
		},
		// Abstract classes should be prefixed with A for readability
		{
			selector: 'class',
			modifiers: ['abstract'],
			format: ['PascalCase'],
			prefix: ['A'],
		},
		// Types should always be prefixed with T, for readability
		{
			selector: 'typeLike',
			format: ['PascalCase'],
			prefix: ['T'],
		},
		// Interfaces should always be prefixed with I for readability
		{
			selector: 'interface',
			format: ['PascalCase'],
			custom: {
				regex: '^I[A-Z]',
				match: true,
			},
		},
		{
			selector: ['variable', 'parameter', 'property', 'accessor'],
			types: ['boolean'],
			format: ['PascalCase'],
			prefix: [
				'is',
				'should',
				'has',
				'have',
				'can',
				'did',
				'will',
				'was',
				'_is',
				'_should',
				'_has',
				'_have',
				'_can',
				'_did',
				'_will',
				'_was',
			],
		},
	],
	// This rule allows you to specify a deny list of disallowed identifier names to avoid this practice.
	// You can turn this rule off if you do not want to restrict the use of certain identifiers.
	'id-denylist': [
		'error',
		'data',
		'info',
		'object',
		'array',
		'err',
		'e',
		'cb',
		'callback',
	],
	'@typescript-eslint/no-extraneous-class': 'error', // Ban classes with only static members
	'@typescript-eslint/no-namespace': 'error', // Ban namespaces
	'@typescript-eslint/consistent-type-assertions': 'error',
	// Use type for type definition and interface when it is extended or implemented
	'@typescript-eslint/consistent-type-definitions': 'off',
	'@typescript-eslint/no-empty-interface': 'error',
	'@typescript-eslint/no-misused-new': 'error',
	'@typescript-eslint/no-non-null-assertion': 'error',
	'@typescript-eslint/no-unused-expressions': 'error',
	'@typescript-eslint/no-unsafe-assignment': 'error',
	'@typescript-eslint/no-unsafe-member-access': 'error',
	'@typescript-eslint/no-unsafe-call': 'error',
	'@typescript-eslint/no-unsafe-return': 'error',
	'@typescript-eslint/restrict-template-expressions': 'error',
	'@typescript-eslint/strict-boolean-expressions': 'error',
	'@typescript-eslint/prefer-ts-expect-error': 'error',
	'@typescript-eslint/prefer-function-type': 'error',
	'@typescript-eslint/prefer-readonly': 'error',
	'@typescript-eslint/unified-signatures': 'error',
	'@typescript-eslint/no-floating-promises': 'error',
	'object-shorthand': 'error',
	'arrow-body-style': 'error',
	'constructor-super': 'error',
	curly: 'error',
	// Disable accessing foo['bar'] as it's very prone to error
	// Global accessibility should be specified in global.d.ts, and never forced this way
	'dot-notation': 'off',
	'@typescript-eslint/dot-notation': 'error',
	eqeqeq: ['error', 'smart'],
	'guard-for-in': 'error',

	'no-bitwise': 'warn',
	'no-caller': 'error',
	'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
	'no-debugger': 'error',
	'no-empty': 'error',
	'no-fallthrough': 'error',
	'no-new-wrappers': 'error',
	// Disallow throwing literals e.g. throw 'error' in favor of error objects
	// We should take extra care when catching promises and throwing custom mesages
	// or enums. We should keep the promise errors as exceptions and not defined
	// communication in the flow
	// This rule cannot analyize if the object thrown is an actual error object
	'no-throw-literal': 'off',
	'@typescript-eslint/no-throw-literal': 'error',
	'no-undef-init': 'error',
	'no-underscore-dangle': 'off',
	'no-unused-expressions': 'error',
	'no-unused-labels': 'error',
	'prefer-const': 'error',
	radix: 'error',
	// Don't allow defining functions that use out of scope variables inside of loops
	// This causes hard to identify issues at runtime
	'no-loop-func': 'error',
	'@typescript-eslint/no-loop-func': 'error',
	// Non-necessary constructor functions that are either empty or call super
	// with exact same parameters should be ommited for easier code digestion
	'no-useless-constructor': 'error',
	'@typescript-eslint/no-useless-constructor': 'error',
	// Don't allow await in loops, as this is usually a mistake as it
	// will wait for each iteration to resolve before going to the next
	// If it's intended then disabling the rule is the way to go forward
	'no-await-in-loop': 'error',
	// Don't allow casting to boolean when it is not needed
	// e.g. let obj = {}; if (!!obj) {} -> the !! is not needed
	// as it is cast the same, and only adds confusion
	'no-extra-boolean-cast': 'error',
	// disable this rule as we have some cases
	// in which we need to compare strings to enums
	'@typescript-eslint/no-unsafe-enum-comparison': 'warn',
	'@typescript-eslint/consistent-type-imports': [
		'error',
		{
			fixStyle: 'separate-type-imports',
		},
	],
	'@typescript-eslint/consistent-type-exports': [
		'error',
		{
			fixMixedExportsWithInlineTypeSpecifier: false,
		},
	],
	'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
	'import/no-duplicates': ['error', { considerQueryString: true }],
	'import/first': 'error',
	'import/newline-after-import': 'error',
	'no-restricted-syntax': [
		'error',
		{
			selector: 'ImportNamespaceSpecifier',
			message:
				'Import as a namespace is not allowed. Use named imports instead.',
		},
		{
			selector: 'ExportSpecifier[exportKind=type]',
			message: 'Inline type exports are not allowed.',
		},
		{
			selector: 'TSEnumDeclaration:not([const=true])',
			message: "Don't declare non-const enums",
		},
	],
	complexity: ['error', 7],
	'prefer-template': 'error',
	'array-callback-return': 'error',
	// Enforce adding default/optional params as last in function params, in order for
	// function calls to be able to omit the optional params
	'default-param-last': 'off',
	'@typescript-eslint/default-param-last': 'error',
	'no-eval': 'error',
	// Encourage the use of let/const instead of var
	'no-var': 'error',
	'no-return-assign': 'error',
	'no-param-reassign': [
		'error',
		{
			props: true,
			// in case of array.reduce the proper
			ignorePropertyModificationsFor: ['accumulator'],
		},
	],
	'no-else-return': [
		'error',
		{
			allowElseIf: false,
		},
	],
	'no-new': 'error',
	// No hoisting allowed, you have to define stuff before you use them
	// Keeps things cleaner and in order
	'no-use-before-define': 'off',
	'@typescript-eslint/no-use-before-define': 'error',
	// Require everything to have accessibility e.g. public methods require the public keyword.
	'@typescript-eslint/explicit-member-accessibility': [
		'error',
		{
			accessibility: 'explicit',
			overrides: {
				constructors: 'no-public',
			},
		},
	],
	// No empty functions to improve readability, exceptions are empty functions which are commented
	'@typescript-eslint/no-empty-function': [
		'error',
		{
			allow: ['private-constructors'],
		},
	],
	'@typescript-eslint/explicit-module-boundary-types': 'warn',
	'@typescript-eslint/ban-ts-comment': 'warn',
	'@typescript-eslint/no-unused-vars': [
		'error',
		{
			argsIgnorePattern: '^_',
		},
	],
	'@typescript-eslint/no-var-requires': 'warn',
	'@typescript-eslint/member-ordering': 'error',
	// validity checking returns are okay
	// e.g. if(something) { return; } -> this is okay
	'no-constructor-return': 'error',
	// Disallow return statements that don't do anything,
	// e.g. at the last line in a function, or inside the last if block in a function
	'no-useless-return': 'error',
	// Force usage of default case in switch statements and for it to be last
	// Allow commenting skipping default if commented with pattern
	// e.g. skip default because etc.
	'default-case-last': 'error',
	'default-case': [
		'error',
		{
			commentPattern: '^skip\\sdefault',
		},
	],
	'max-classes-per-file': ['error', 1],
	// Class methods need to use the this keyword, if they don't use it
	// then these methods can be extracted in either static methods or
	// utility functions. This allows for better unit testability
	'class-methods-use-this': 'error',
	// Disable a subset of magic numbers for easier code readability
	'no-magic-numbers': 'off',
	'@typescript-eslint/no-magic-numbers': [
		'error',
		{
			// Ignore value 0 as they can be default values for counters and such
			// Ignore value 1/-1 as they can be used for index length calculation
			// Ignore value 100 as it is used for percentage calculation
			ignore: [0, 1, 100],
			// Allow accessing arr[0], arr[1] etc, used four touples and such
			ignoreArrayIndexes: true,
			// Allow forms like calculateRatio(number, ratio = 0.2)
			ignoreDefaultValues: true,
			// Allow to set magic numbers when defining objects for example
			// { throttle: 100 } used for our logging
			detectObjects: false,
			// Allow enums to have magic numbers
			ignoreEnums: true,
			// Disallow numeric literal types as there are few cases where these shouldn't
			// be defined in an Enum.
			// IBreakpoints { size: 120 | 240 | 540 | 1080 } -> these should be enum values
			ignoreNumericLiteralTypes: false,
			// Allow magic numbers in readonly properties as they function like consts
			ignoreReadonlyClassProperties: true,
		},
	],
	// Prefer throwing error objects when rejecting promises
	// This is coupled with no-throw-literal to avoid using promise rejects as
	// standard form of promise communication
	'prefer-promise-reject-errors': 'error',
	// Don't specify types in simple inferrable expressions
	// e.g. const NUMBER = 1 -> doesn't need a number type
	// Allow specifying types for params and properties that can be inferred
	// because these are basically default values and default values can be removed in the future
	'@typescript-eslint/no-inferrable-types': [
		'error',
		{
			ignoreParameters: true,
			ignoreProperties: true,
		},
	],
	// Don't allow same named variables defined in outer scope to be redefined in inner scope
	'no-shadow': 'off',
	'@typescript-eslint/no-shadow': [
		'error',
		{
			hoist: 'all',
		},
	],
	'@typescript-eslint/explicit-function-return-type': [
		'error',
		{
			allowExpressions: true,
			allowTypedFunctionExpressions: true,
		},
	],
};
