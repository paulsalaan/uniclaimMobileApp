import type { RootStackParamList } from "@/types/navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import "../global.css";

// screens
import App from "./App";
import Index from "./tabs";
import Login from "./tabs/Login";
import Register from "./tabs/Register";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootLayout() {
  const [loaded] = useFonts({
    AlbertSansLight: require("../assets/fonts/AlbertSans-Light.ttf"),
    AlbertSansRegular: require("../assets/fonts/AlbertSans-Regular.ttf"),
    AlbertSansSemiBold: require("../assets/fonts/AlbertSans-SemiBold.ttf"),
    AlbertSansBold: require("../assets/fonts/AlbertSans-Bold.ttf"),
    InterLight: require("../assets/fonts/Inter-Light.ttf"),
    InterRegular: require("../assets/fonts/Inter-Regular.ttf"),
    InterMedium: require("../assets/fonts/Inter-Medium.ttf"),
    InterSemiBold: require("../assets/fonts/Inter-SemiBold.ttf"),
    InterBold: require("../assets/fonts/Inter-Bold.ttf"),
    ManropeExtraLight: require("../assets/fonts/Manrope-ExtraLight.ttf"),
    ManropeLight: require("../assets/fonts/Manrope-Light.ttf"),
    ManropeRegular: require("../assets/fonts/Manrope-Regular.ttf"),
    ManropeMedium: require("../assets/fonts/Manrope-Medium.ttf"),
    ManropeSemiBold: require("../assets/fonts/Manrope-SemiBold.ttf"),
    ManropeBold: require("../assets/fonts/Manrope-Bold.ttf"),
    ManropeExtraBold: require("../assets/fonts/Manrope-ExtraBold.ttf"),
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) return null;

  return (
    <Stack.Navigator
      initialRouteName="App"
      screenOptions={{ headerShown: false, animation: "fade" }}
    >
      <Stack.Screen name="Index" component={Index} />
      <Stack.Screen name="App" component={App} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
