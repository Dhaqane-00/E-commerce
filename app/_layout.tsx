import { Stack } from "expo-router";
import { useEffect } from "react";
import useFonts from "../hooks/useFonts";
import CustomSplashScreen from "../components/SplashScreen";

export default function RootLayout() {
  const fontsLoaded = useFonts();

  if (!fontsLoaded) {
    return <CustomSplashScreen />;
  }

  return <Stack screenOptions={{headerShown:false}} />;
}
