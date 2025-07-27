import ScreenWrapper from "@/components/ScreenWrapper";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <ScreenWrapper>
      <SafeAreaView className="flex-col items-center justify-center px-5 bg-rose-300">
        <Text className="text-3xl text-brand font-albert text-center">
          Hello, NativeWind!
        </Text>
      </SafeAreaView>
    </ScreenWrapper>
  );
}
