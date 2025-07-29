// app/RootLayout.tsx
import type { RootStackParamList } from "@/types/navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import SplashScreen from "../components/SplashScreen";
import "../global.css";

// screens
import Index from "./tabs/index";
import Login from "./tabs/Login";
import OnBoarding from "./tabs/OnBoarding";
import Register from "./tabs/Register";

// components
import ScreenWrapper from "../components/ScreenWrapper";

const Stack = createNativeStackNavigator<RootStackParamList>();

const withScreenWrapper = (Component: React.ComponentType) => () => (
  <ScreenWrapper statusBarStyle="dark-content" statusBarBg="#fff">
    <Component />
  </ScreenWrapper>
);

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    AlbertSansLight: require("../assets/fonts/AlbertSans-Light.ttf"),
    AlbertSansRegular: require("../assets/fonts/AlbertSans-Regular.ttf"),
    AlbertSansSemiBold: require("../assets/fonts/AlbertSans-SemiBold.ttf"),
    AlbertSansBold: require("../assets/fonts/AlbertSans-Bold.ttf"),
    InterLight: require("../assets/fonts/Inter-Light.ttf"),
    InterRegular: require("../assets/fonts/Inter-Regular.ttf"),
    InterMedium: require("../assets/fonts/Inter-Medium.ttf"),
    InterSemiBold: require("../assets/fonts/Inter-SemiBold.ttf"),
    InterBold: require("../assets/fonts/Inter-Bold.ttf"),
    ManropeExtraLight: require("../assets/fonts/Manrope-ExtraLight.ttf"),
    ManropeLight: require("../assets/fonts/Manrope-Light.ttf"),
    ManropeRegular: require("../assets/fonts/Manrope-Regular.ttf"),
    ManropeMedium: require("../assets/fonts/Manrope-Medium.ttf"),
    ManropeSemiBold: require("../assets/fonts/Manrope-SemiBold.ttf"),
    ManropeBold: require("../assets/fonts/Manrope-Bold.ttf"),
    ManropeExtraBold: require("../assets/fonts/Manrope-ExtraBold.ttf"),
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const [showSplash, setShowSplash] = useState(true);

  // Delay splash screen after fonts are loaded
  useEffect(() => {
    if (fontsLoaded) {
      const timeout = setTimeout(() => {
        setShowSplash(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded || showSplash) {
    return (
      <ScreenWrapper statusBarStyle="dark-content" statusBarBg="#fff">
        <SplashScreen onAnimationEnd={() => {}} />
      </ScreenWrapper>
    );
  }
  return (
    <Stack.Navigator
      initialRouteName="OnBoarding"
      screenOptions={{ headerShown: false, animation: "fade" }}
    >
      <Stack.Screen
        name="OnBoarding"
        component={withScreenWrapper(OnBoarding)}
      />
      <Stack.Screen name="Index" component={withScreenWrapper(Index)} />
      <Stack.Screen name="Login" component={withScreenWrapper(Login)} />
      <Stack.Screen name="Register" component={withScreenWrapper(Register)} />
    </Stack.Navigator>
  );
}
