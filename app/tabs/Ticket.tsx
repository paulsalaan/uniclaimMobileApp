import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Search } from "lucide-react-native";
import Header from "@/components/Header";

export default function Ticket() {
  const [activeTab, setActiveTab] = useState<"active" | "completed">("active");

  return (
    <View className="flex-1 bg-white">
      <Header />

      {/* Search Section */}
      <View className="px-8 mt-1 space-y-3">
        <View className="flex-row items-center gap-2">
          {/* Search Input */}
          <View className="flex-[1.3] bg-gray-100 rounded-lg px-3 h-12 flex-row items-center">
            <Search className="text-gray-500 mr-1" size={16} />
            <TextInput
              className="flex-1 text-gray-800 text-[13px] leading-tight"
              placeholder="Search an item"
              placeholderTextColor="#6B7280"
            />
          </View>

          {/* Search Button */}
          <TouchableOpacity className="bg-teal-500 rounded-lg h-12 px-4 justify-center items-center">
            <Text className="text-white font-semibold text-sm">Search</Text>
          </TouchableOpacity>
        </View>

        {/* Toggle Buttons for Active/Completed */}
        <View className="flex-row mt-4 gap-2">
          <TouchableOpacity
            onPress={() => setActiveTab("active")}
            className={`flex-1 py-3 rounded-xl items-center justify-center ${
              activeTab === "active"
                ? "bg-[#002e63]"
                : "bg-gray-200"
            }`}
          >
            <Text
              className={`text-sm font-semibold ${
                activeTab === "active" ? "text-white" : "text-black"
              }`}
            >
              Active Tickets
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveTab("completed")}
            className={`flex-1 py-3 rounded-xl items-center justify-center ${
              activeTab === "completed"
                ? "bg-[#002e63]"
                : "bg-gray-200"
            }`}
          >
            <Text
              className={`text-sm font-semibold ${
                activeTab === "completed" ? "text-white" : "text-black"
              }`}
            >
              Completed Tickets
            </Text>
          </TouchableOpacity>
        </View>
      </View> 
    </View>
  );
}
