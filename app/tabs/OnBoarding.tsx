import ScreenWrapper from "@/components/ScreenWrapper";
import { RootStackParamList } from "@/types/navigation";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const slides = [
  {
    key: "1",
    title: "Start a Conversation",
    description:
      "Connect instantly to discuss the item and share important details.",
    image: require("../../assets/images/chat.png"),
  },
  {
    key: "2",
    title: "Report an Item",
    description:
      "Add item info, upload images, and tag where it was lost or found.",
    image: require("../../assets/images/post.png"),
  },
  {
    key: "3",
    title: "Advanced Search Filter",
    description: "Use filters to quickly narrow down lost or found items.",
    image: require("../../assets/images/filter.png"),
  },
];

export default function OnBoarding({ onFinish }: { onFinish: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const flatListRef = useRef<FlatList>(null);

  //   const onNext = () => {
  //     if (currentIndex < slides.length - 1) {
  //       flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
  //     } else {
  //       navigation.replace("Index");
  //     }
  //   };

  const onSkip = () => {
    navigation.replace("Index"); // <- this actually navigates
  };
  return (
    <ScreenWrapper statusBarBg="#ffffff" statusBarStyle="dark-content">
      <SafeAreaView className="flex-1">
        {/* Skip Button */}
        <View className="w-full items-end px-6 pt-5">
          <TouchableOpacity onPress={onSkip} className="flex-row items-center">
            <Text className="text-navyblue font-manrope-medium font-semibold text-base mr-2">
              {currentIndex === slides.length - 1
                ? "Start Using UniClaim"
                : "Skip"}
            </Text>
            <Feather name="arrow-right" className="size-17 text-navyblue" />
          </TouchableOpacity>
        </View>

        {/* Slide Content */}
        <FlatList
          ref={flatListRef}
          data={slides}
          keyExtractor={(item) => item.key}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(e) =>
            setCurrentIndex(Math.round(e.nativeEvent.contentOffset.x / width))
          }
          renderItem={({ item }) => (
            <View className="w-screen items-center justify-center px-6 mt-6">
              <Image
                source={item.image}
                className="size-[20rem] mb-10"
                resizeMode="contain"
              />
              <Text className="text-3xl font-albert-bold text-brand text-center mb-3">
                {item.title}
              </Text>
              <Text className="text-center font-manrope-medium text-base text-gray-600">
                {item.description}
              </Text>
            </View>
          )}
        />

        {/* Progress Bar + Button */}
        <View className="px-6 pb-6">
          <Text className="text-center font-manrope text-zinc-400">
            Swipe right to proceed
          </Text>
          <View className="flex-row justify-center gap-2 mt-4">
            {slides.map((_, i) => (
              <View
                key={i}
                className="w-8 h-1.5 rounded-full bg-gray-300 overflow-hidden"
              >
                {i <= currentIndex && (
                  <View className="absolute left-0 top-0 h-full bg-brand w-full" />
                )}
              </View>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </ScreenWrapper>
  );
}
