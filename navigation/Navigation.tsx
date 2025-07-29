// screens
import type { RootStackParamList } from "@/types/navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Index from "../app/tabs/index";
import Login from "../app/tabs/Login";
import OnBoarding from "../app/tabs/OnBoarding";
import Register from "../app/tabs/Register";

// app/RootLayout.tsx
import React from "react";

// components
import ScreenWrapper from "../components/ScreenWrapper";

const Stack = createNativeStackNavigator<RootStackParamList>();

const withScreenWrapper = (Component: React.ComponentType) => () => (
  <ScreenWrapper statusBarStyle="dark-content" statusBarBg="#fff">
    <Component />
  </ScreenWrapper>
);

export default function Navigation() {
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
