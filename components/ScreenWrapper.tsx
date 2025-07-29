import React from "react";
import { Platform, StatusBar, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ScreenWrapperProps = {
  children: React.ReactNode;
  statusBarStyle?: "light-content" | "dark-content";
  statusBarBg?: string;
};

export default function ScreenWrapper({
  children,
  statusBarStyle = "dark-content",
  statusBarBg = "#fff",
}: ScreenWrapperProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: statusBarBg,
        paddingTop: Platform.OS === "android" ? insets.top : 0,
      }}
    >
      <StatusBar barStyle={statusBarStyle} backgroundColor={statusBarBg} />
      {children}
    </View>
  );
}
