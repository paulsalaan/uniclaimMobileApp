import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Bell } from 'lucide-react-native' // or any icon library

export default function Header() {
  return (
    <View className="flex-row items-center justify-between px-7 py-3 bg-white">
      {/* Left: Logo + Title */}
      <View className="flex-row items-center space-x-2">
        <Image
          source={require('../assets/images/uniclaimlogo.png')} // your logo path
          className="w-10 h-11"
          resizeMode="contain"
        />
        <Text className="text-2xl font-semibold flex-row text-brand">Uni</Text>
        <Text className="text-2xl font-semibold text-black-500">Claim</Text>
      </View>

      {/* Right: Notification Icon */}
      <TouchableOpacity className="relative">
        <Bell className="text-blue-900" size={24} />
        {/* Badge (optional) */}
        <View className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-red-500" />
      </TouchableOpacity>
    </View>
  )
}
