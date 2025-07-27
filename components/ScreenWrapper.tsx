// components/ScreenWrapper.tsx
import React from "react";
import { View, ViewProps } from "react-native";

type ScreenWrapperProps = {
  children: React.ReactNode;
  className?: string;
} & ViewProps;

export default function ScreenWrapper({
  children,
  className = "",
  ...props
}: ScreenWrapperProps) {
  return (
    <View className="flex-1 bg-background" {...props}>
      {children}
    </View>
  );
}
