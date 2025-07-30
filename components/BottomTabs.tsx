import { Ionicons } from "@expo/vector-icons";
import type { JSX } from "react";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

// Your screen imports
import HomeScreen from "../app/tabs/Home";
import Message from "../app/tabs/Message";
import ProfileScreen from "../app/tabs/Profile";
import CreateReportScreen from "../app/tabs/Report";
import MyTicket from "../app/tabs/Ticket";

type TabConfig = {
  key: string;
  iconOutline: keyof typeof Ionicons.glyphMap;
  iconFilled: keyof typeof Ionicons.glyphMap;
  label: string;
  component: () => JSX.Element;
  isCenter?: boolean;
};

export default function CustomTabs() {
  const [currentTab, setCurrentTab] = useState("MyTickets");
  const insets = useSafeAreaInsets();

  const TAB_BAR_HEIGHT = 50;

  const tabs: TabConfig[] = [
    {
      key: "MyTickets",
      iconOutline: "home-outline",
      iconFilled: "home",
      label: "Home",
      component: HomeScreen,
    },
    {
      key: "Ticket",
      iconOutline: "ticket-outline",
      iconFilled: "ticket",
      label: "My Ticket",
      component: MyTicket,
    },
    {
      key: "Messages",
      iconOutline: "chatbubble-outline",
      iconFilled: "chatbubble",
      label: "Messages",
      component: Message,
    },
    {
      key: "CreateReport",
      iconOutline: "add",
      iconFilled: "add",
      label: "",
      component: CreateReportScreen,
      isCenter: true,
    },
    {
      key: "Profile",
      iconOutline: "person-outline",
      iconFilled: "person",
      label: "Profile",
      component: ProfileScreen,
    },
  ];

  const CurrentScreen =
    tabs.find((tab) => tab.key === currentTab)?.component ?? HomeScreen;

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Main Content */}
      <View className="flex-1">
        <CurrentScreen />
      </View>

      {/* Bottom Tab Bar */}
      <View className="relative bg-white py-2">
        {/* Center Floating Button */}
        <View
          style={{
            top: -(TAB_BAR_HEIGHT / 3),
            left: "50%",
            transform: [{ translateX: -32 }], // half of button size (64px)
            position: "absolute",
            zIndex: 50,
            elevation: 6,
          }}
        >
          <TouchableOpacity
            onPress={() => setCurrentTab("CreateReport")}
            className="bg-brand size-16 rounded-full items-center justify-center shadow-md shadow-brand/50"
          >
            <Ionicons name="add" size={28} color="white" />
          </TouchableOpacity>
        </View>

        {/* Tab Buttons */}
        <View
          style={{
            height: TAB_BAR_HEIGHT,
            paddingBottom: 0, // prevent bottom safe area from pushing your icons
          }}
          className="flex-row items-center justify-around pt-5"
        >
          {tabs
            .filter((tab) => !tab.isCenter)
            .map((tab) => {
              const isActive = currentTab === tab.key;
              const marginClass =
                tab.key === "Ticket"
                  ? "mr-7"
                  : tab.key === "Messages"
                    ? "ml-7"
                    : "";

              return (
                <TouchableOpacity
                  key={tab.key}
                  onPress={() => setCurrentTab(tab.key)}
                  className={`items-center justify-center ${marginClass} flex flex-col space-y-1`}
                >
                  <Ionicons
                    name={isActive ? tab.iconFilled : tab.iconOutline}
                    size={22}
                    color={isActive ? "#000" : "#71717a"}
                  />
                  <Text
                    className={`text-xs font-manrope mt-1.5 ${
                      isActive ? "text-black" : "text-zinc-500"
                    }`}
                  >
                    {tab.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
        </View>
      </View>
    </SafeAreaView>
  );
}
