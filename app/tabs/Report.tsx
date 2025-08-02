import React from "react";
import { Text, View } from "react-native";
import PageLayout from "../../layout/PageLayout";

export default function CreateReportScreen() {
  return (
    <PageLayout>
      <View className="flex-1 items-center justify-center">
        <Text className="text-xl font-bold text-blue-700">
          ➕ Create Report
        </Text>
      </View>
    </PageLayout>
  );
}
