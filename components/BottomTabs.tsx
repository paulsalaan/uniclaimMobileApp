import { Ionicons } from "@expo/vector-icons";

import type { JSX } from "react";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Screens
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
};

export default function CustomTabs() {
  const [currentTab, setCurrentTab] = useState("MyTickets");
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
      key: "CreateReport",
      iconOutline: "add-circle",
      iconFilled: "add-circle",
      label: "Create a report",
      component: CreateReportScreen,
    },
    {
      key: "Messages",
      iconOutline: "chatbubble-outline",
      iconFilled: "chatbubble",
      label: "Messages",
      component: Message,
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
      {/* Main Screen */}
      <View className="flex-1">
        <CurrentScreen />
      </View>

      {/* Bottom Tabs */}
      <View
        className="bg-white py-4"
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -3 }, // Top shadow
          shadowOpacity: 0.08,
          shadowRadius: 6,
          elevation: 100,
        }}
      >
        <View
          style={{ height: TAB_BAR_HEIGHT }}
          className="flex-row items-center justify-around mx-4"
        >
          {tabs.map((tab) => {
            const isActive = currentTab === tab.key;
            const isAddTab = tab.key === "CreateReport";

            return (
              <TouchableOpacity
                key={tab.key}
                onPress={() => setCurrentTab(tab.key)}
                className="items-center justify-center flex flex-col space-y-1"
              >
                <Ionicons
                  name={isActive ? tab.iconFilled : tab.iconOutline}
                  size={isAddTab ? 28 : 22} // 👈 Enlarge only "CreateReport"
                  color={isActive ? "#00B894" : "#000"}
                />
                <Text
                  className={`text-[9px] font-manrope ${
                    isAddTab ? "mt-1" : "mt-2"
                  } ${isActive ? "text-brand" : "text-black"}`}
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
