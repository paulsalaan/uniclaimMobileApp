import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Layout from "@/components/AppLayout";


export default function Home() {
  const [activeButton, setActiveButton] = useState<"lost" | "found">("lost");

  return (
    <Layout>

      {/* Lost & Found Buttons */}
      <View className="flex-row px-4 mt-4 space-x-2 gap-2">
        <TouchableOpacity
          onPress={() => setActiveButton("lost")}
          className={`flex-1 py-3 rounded-xl items-center justify-center ${
            activeButton === "lost" ? "bg-teal-500" : "bg-gray-300"
          }`}
        >
          <Text
            className={`font-semibold text-sm ${
              activeButton === "lost" ? "text-white" : "text-black"
            }`}
          >
            Lost Item
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setActiveButton("found")}
          className={`flex-1 py-3 rounded-xl items-center justify-center ${
            activeButton === "found" ? "bg-teal-500" : "bg-gray-300"
          }`}
        >
          <Text
            className={`font-semibold text-sm ${
              activeButton === "found" ? "text-white" : "text-black"
            }`}
          >
            Found Item
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}
