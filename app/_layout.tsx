// app/RootLayout.tsx
import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import SplashScreen from "../components/SplashScreen";
import "../global.css";

// screens
import Navigation from "@/navigation/Navigation";

// components
import ScreenWrapper from "../components/ScreenWrapper";

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

  const [hasSeenOnBoarding, setHasSeenOnBoarding] = useState(false);
  const [hasPassedIndex, setHasPassedIndex] = useState(false);

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
      <ScreenWrapper statusBarStyle="dark-content" statusBarBg="#FBFDFC">
        <SplashScreen onAnimationEnd={() => {}} />
      </ScreenWrapper>
    );
  }
  return (
    <Navigation
      hasSeenOnBoarding={hasSeenOnBoarding}
      setHasSeenOnBoarding={setHasSeenOnBoarding}
      hasPassedIndex={hasPassedIndex}
      setHasPassedIndex={setHasPassedIndex}
    />
  );
}
