import { ActivityIndicator } from 'react-native';

import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from '@expo-google-fonts/nunito-sans';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import { Routes } from '@routes/index';

import theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="transparent" translucent />

      {fontsLoaded ? <Routes /> : <ActivityIndicator color="#1E6F9F" />}
    </ThemeProvider>
  );
}
