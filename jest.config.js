module.exports = {
	preset: 'jest-expo',
	roots: ['<rootDir>/src'],
	moduleDirectories: ['node_modules', 'src'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	setupFilesAfterEnv: [
		'@testing-library/jest-native/extend-expect',
		'./jest.setup.js',
	],
	setupFiles: ['dotenv/config'],
	transformIgnorePatterns: [
		'node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base)',
	],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	},
	collectCoverage: true,
	collectCoverageFrom: [
		'**/*.{ts,tsx}',
		'!**/*.d.ts',
		'!**/index.ts',
		'!**/coverage/**',
		'!**/node_modules/**',
	],
	coverageThreshold: {
		global: {
			branches: 70,
			functions: 70,
			lines: 70,
			statements: 70,
		},
		'./src/App.ts': {
			branches: 50,
		},
	},
	coveragePathIgnorePatterns: [
		'<rootDir>/src/.*\\.type\\.ts$', // Pattern to ignore all *.type.ts files in src
		'<rootDir>/src/.*\\.style\\.ts$', // Pattern to ignore all *.style.ts files in src
		'<rootDir>/src/constants/*',
		'<rootDir>/src/styles/*',
		'<rootDir>/src/helpers/logging.ts',
	],
};
