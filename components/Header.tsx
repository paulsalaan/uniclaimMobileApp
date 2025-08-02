import { Bell } from "lucide-react-native"; // or any icon library
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Header() {
  return (
    <View className="flex-row items-center justify-between my-4">
      {/* Left: Logo + Title */}
      <View className="flex-row items-center">
        <Image
          source={require("../assets/images/uniclaimlogo.png")} // your logo path
          className="size-10 mr-1"
          resizeMode="contain"
        />
        <Text className="text-2xl font-albert-bold flex-row text-brand">
          Uni
        </Text>
        <Text className="text-2xl font-albert-bold text-black-500">Claim</Text>
      </View>

      {/* Right: Notification Icon */}
      <TouchableOpacity className="">
        <Bell className="text-blue-900" size={26} />
        {/* Badge (optional) */}
      </TouchableOpacity>
    </View>
  );
}
