import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppRoutes } from './app.routes';

export function Routes() {
  const theme = DefaultTheme;

  return (
    <NavigationContainer theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <AppRoutes />
      </SafeAreaView>
    </NavigationContainer>
  );
}
