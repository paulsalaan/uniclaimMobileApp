import ScreenWrapper from "@/components/ScreenWrapper";
import Navigation from "@/navigation/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import SplashScreen from "../components/SplashScreen";

export default function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [hasSeenOnBoarding, setHasSeenOnBoarding] = useState(false);
  const [hasPassedIndex, setHasPassedIndex] = useState(false);

  const handleSplashEnd = () => {
    setIsSplashVisible(false);
  };

  return (
    <ScreenWrapper>
      {isSplashVisible ? (
        <SplashScreen onAnimationEnd={handleSplashEnd} />
      ) : (
        <NavigationContainer>
          <Navigation
            hasSeenOnBoarding={hasSeenOnBoarding}
            setHasSeenOnBoarding={setHasSeenOnBoarding}
            hasPassedIndex={hasPassedIndex}
            setHasPassedIndex={setHasPassedIndex}
          />
        </NavigationContainer>
      )}
    </ScreenWrapper>
  );
}
