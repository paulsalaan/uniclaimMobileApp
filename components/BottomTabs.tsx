import { Ionicons } from "@expo/vector-icons";
import type { JSX } from "react";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
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
      iconFilled: "ticket", // ← only available in Ionicons v6+
      label: "My Ticket",
      component: MyTicket,
    },
    {
      key: "Messages",
      iconOutline: "chatbubble-outline",
      iconFilled: "chatbubble", // ← filled version
      label: "Messages",
      component: Message,
    },
    {
      key: "CreateReport",
      iconOutline: "add",
      iconFilled: "add", // same icon filled/outline
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

  const tabButtons: JSX.Element[] = [];
  for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];
    const isActive = tab.key === currentTab;

    if (tab.isCenter) {
      tabButtons.push(
        <TouchableOpacity
          key={tab.key}
          onPress={() => setCurrentTab(tab.key)}
          className="bg-brand size-16 rounded-full -top-6 absolute left-1/2 -translate-x-1/2 items-center justify-center shadow-md shadow-brand/50 z-10"
        >
          <Ionicons name={tab.iconOutline} size={28} color="white" />
        </TouchableOpacity>
      );
    } else {
      // Add spacing between My Ticket and Messages
      const marginClass =
        tab.key === "Ticket" ? "mr-7" : tab.key === "Messages" ? "ml-7" : "";

      tabButtons.push(
        <TouchableOpacity
          key={tab.key}
          onPress={() => setCurrentTab(tab.key)}
          className={`flex items-center justify-center ${marginClass}`}
        >
          <Ionicons
            name={isActive ? tab.iconFilled : tab.iconOutline}
            size={22}
            color={isActive ? "#000000" : "#71717a"}
          />
          <Text
            className={`text-xs font-manrope mt-2 ${
              isActive ? "text-black" : "text-zinc-500"
            }`}
          >
            {tab.label}
          </Text>
        </TouchableOpacity>
      );
    }
  }

  return (
    <View className="flex-1">
      {/* Screen */}
      <View className="flex-1">
        <CurrentScreen />
      </View>

      {/* Custom Bottom Tab Bar */}
      <View className="flex-row items-center justify-around h-[80px] bg-white">
        {tabButtons}
      </View>
    </View>
  );
}
