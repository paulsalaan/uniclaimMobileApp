import Header from "@/components/Header";
import React, { PropsWithChildren } from "react";
import { View } from "react-native";
import SearchWithToggle from "../components/Input";

export default function HomeLayout({ children }: PropsWithChildren<{}>) {
  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 px-4">
        <Header />
        <View className="mt-1 space-y-3 flex-1">
          <SearchWithToggle />
          {children}
        </View>
      </View>
    </View>
  );
}
