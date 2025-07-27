// SplashScreen.tsx
import React, { useEffect } from "react";
import { Image, Text } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

export default function SplashScreen({
  onAnimationEnd,
}: {
  onAnimationEnd: () => void;
}) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onAnimationEnd();
    }, 2000); // duration sa splash screen

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut.duration(800)}
      className="flex-1 items-center justify-center bg-background"
    >
      <Image
        source={require("../assets/images/uniclaimlogo.png")}
        className="size-30 mb-5"
      />
      <Text className="text-4xl font-albert-bold text-brand">
        Uni<Text className="text-navyblue">Claim</Text>
      </Text>
    </Animated.View>
  );
}
