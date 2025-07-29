import type { RootStackParamList } from "@/types/navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

// screens
import Home from "../app/tabs/Home";
import Index from "../app/tabs/index";
import Login from "../app/tabs/Login";
import Message from "../app/tabs/Message";
import OnBoarding from "../app/tabs/OnBoarding";
import Profile from "../app/tabs/Profile";
import Register from "../app/tabs/Register";
import Report from "../app/tabs/Report";

// components
import RootBottomTabs from "../components/BottomTabs";
import ScreenWrapper from "../components/ScreenWrapper";

const Stack = createNativeStackNavigator<RootStackParamList>();

const withScreenWrapper = (Component: React.ComponentType) => () => (
  <ScreenWrapper statusBarStyle="dark-content" statusBarBg="#fff">
    <Component />
  </ScreenWrapper>
);

interface NavigationProps {
  hasSeenOnBoarding: boolean;
  setHasSeenOnBoarding: React.Dispatch<React.SetStateAction<boolean>>;
  hasPassedIndex: boolean;
  setHasPassedIndex: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navigation({
  hasSeenOnBoarding,
  setHasSeenOnBoarding,
  hasPassedIndex,
  setHasPassedIndex,
}: NavigationProps) {
  const initial = !hasSeenOnBoarding
    ? "OnBoarding"
    : !hasPassedIndex
      ? "Index"
      : "RootBottomTabs";

  return (
    <Stack.Navigator
      initialRouteName={initial}
      screenOptions={{ headerShown: false, animation: "fade" }}
    >
      {/* 1. Entry screens always registered */}
      <Stack.Screen name="OnBoarding">
        {() => <OnBoarding onFinish={() => setHasSeenOnBoarding(true)} />}
      </Stack.Screen>

      <Stack.Screen name="Index">
        {() => <Index onContinue={() => setHasPassedIndex(true)} />}
      </Stack.Screen>

      {/* 2. Main app screens */}
      <Stack.Screen
        name="RootBottomTabs"
        component={withScreenWrapper(RootBottomTabs)}
      />
      <Stack.Screen name="Login" component={withScreenWrapper(Login)} />
      <Stack.Screen name="Register" component={withScreenWrapper(Register)} />
      <Stack.Screen name="Home" component={withScreenWrapper(Home)} />
      <Stack.Screen name="Report" component={withScreenWrapper(Report)} />
      <Stack.Screen name="Profile" component={withScreenWrapper(Profile)} />
      <Stack.Screen name="Message" component={withScreenWrapper(Message)} />
    </Stack.Navigator>
  );
}
