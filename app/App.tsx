import ScreenWrapper from "@/components/ScreenWrapper";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import RootLayout from "../app/_layout"; // or wherever your navigator is
import SplashScreen from "../components/SplashScreen";

export default function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  const handleSplashEnd = () => {
    setIsSplashVisible(false);
  };

  return (
    <ScreenWrapper>
      {isSplashVisible ? (
        <SplashScreen onAnimationEnd={handleSplashEnd} />
      ) : (
        <NavigationContainer>
          <RootLayout /> {/* Your main stack or tab navigator */}
        </NavigationContainer>
      )}
    </ScreenWrapper>
  );
}
