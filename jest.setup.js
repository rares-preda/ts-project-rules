import 'react-native-gesture-handler/jestSetup';

// Mock the useFonts hook
jest.mock('hooks/useFonts', () => ({
	useFonts: jest.fn().mockReturnValue(true),
}));
