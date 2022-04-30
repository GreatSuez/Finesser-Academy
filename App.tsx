import { StatusBar } from 'expo-status-bar';
import  React, {Fragment} from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Fragment>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </Fragment >
      </SafeAreaProvider>
    );
  }
}
