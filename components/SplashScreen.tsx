import { View, Image } from 'react-native';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function CustomSplashScreen() {
  const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  return (
    <View 
      className="flex-1 items-center justify-center bg-white" 
      onLayout={onLayoutRootView}
    >
      {/* <Image
        source={require('../assets/splash.png')}
        className="w-[200px] h-[200px]"
        resizeMode="contain"
      /> */}
    </View>
  );
} 