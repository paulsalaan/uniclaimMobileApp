import Layout from "@/layout/HomeLayout";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const [activeButton, setActiveButton] = useState<"lost" | "found">("lost");

  return (
    <Layout>
      <View className="flex-1">
        {/* Lost & Found Buttons */}
        <View className="flex-row mt-5 gap-2">
          <TouchableOpacity
            onPress={() => setActiveButton("lost")}
            className={`flex-1 h-14 rounded-lg items-center justify-center ${
              activeButton === "lost" ? "bg-navyblue" : "bg-zinc-200"
            }`}
          >
            <Text
              className={`font-semibold text-base font-manrope-medium ${
                activeButton === "lost" ? "text-white" : "text-black"
              }`}
            >
              Lost Item
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveButton("found")}
            className={`flex-1 h-14 rounded-lg items-center justify-center ${
              activeButton === "found" ? "bg-navyblue" : "bg-zinc-200"
            }`}
          >
            <Text
              className={`font-semibold text-base font-manrope-medium ${
                activeButton === "found" ? "text-white" : "text-black"
              }`}
            >
              Found Item
            </Text>
          </TouchableOpacity>
        </View>

        {/* dummy-posts only */}
        <ScrollView
          className="mt-5"
          contentContainerStyle={{ paddingBottom: 15 }}
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-col gap-4">
            {[...Array(10)].map((_, index) => (
              <View
                key={index}
                className="bg-gray-100 rounded-lg w-full h-[25rem] items-center justify-center"
              >
                <Text className="text-gray-700 font-manrope">
                  {activeButton === "lost" ? "Lost Item" : "Found Item"} #
                  {index + 1}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
}
