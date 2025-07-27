import React, { useState } from "react";
import { View } from "react-native";
import SplashScreen from "../components/SplashScreen";
import Index from "./tabs/index";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <View className="flex-1">
      {showSplash ? (
        <SplashScreen onAnimationEnd={() => setShowSplash(false)} />
      ) : (
        <Index />
      )}
    </View>
  );
}
