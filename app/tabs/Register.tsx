import type { RootStackParamList } from "@/types/navigation";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Register() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleRegister = () => {
    const newErrors: { [key: string]: string } = {};

    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";
    if (!contactNumber.trim())
      newErrors.contactNumber = "Contact number is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(email)) newErrors.email = "Invalid email address";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 8)
      newErrors.password = "Password must be at least 8 characters";

    if (!confirmPassword) newErrors.confirmPassword = "Please confirm password";
    else if (confirmPassword !== password)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Proceed with registration logic
      console.log("Form is valid. Submitting...");
    }
  };

  const inputClass = (field: string) =>
    `bg-gray-100 rounded-lg px-5 h-[3.5rem] text-black border ${
      focusedInput === field
        ? "border-brand"
        : errors[field]
          ? "border-red-500"
          : "border-gray-300"
    }`;

  const passwordInputClass = (field: string) =>
    `flex-row items-center bg-gray-100 rounded-lg px-4 h-[3.5rem] border ${
      focusedInput === field
        ? "border-brand"
        : errors[field]
          ? "border-red-500"
          : "border-gray-300"
    }`;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 24,
          justifyContent: "center",
        }}
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
      >
        <View className="mb-7 mt-7">
          <Text className="text-4xl font-albert-bold text-brand mb-2">
            Create Account
          </Text>
          <Text className="text-base font-manrope-medium text-black">
            Start your journey here at UniClaim
          </Text>
        </View>

        {/* Form Fields */}
        <View>
          {/* First Name */}
          <View className="mb-4">
            <Text className="font-manrope-medium text-black mb-2">
              First Name
            </Text>
            <TextInput
              value={firstName}
              onChangeText={setFirstName}
              onFocus={() => {
                setFocusedInput("firstName");
                setErrors((prev) => ({ ...prev, firstName: "" }));
              }}
              onBlur={() => setFocusedInput(null)}
              placeholder="Enter first name"
              placeholderTextColor="#747476"
              style={{ fontFamily: "ManropeRegular", fontSize: 15 }}
              className={inputClass("firstName")}
            />
            {errors.firstName && (
              <Text className="text-red-500 font-manrope text-sm mt-2">
                {errors.firstName}
              </Text>
            )}
          </View>

          {/* Last Name */}
          <View className="mb-4">
            <Text className="font-manrope-medium text-black mb-2">
              Last Name
            </Text>
            <TextInput
              value={lastName}
              onChangeText={setLastName}
              onFocus={() => {
                setFocusedInput("lastName");
                setErrors((prev) => ({ ...prev, lastName: "" }));
              }}
              onBlur={() => setFocusedInput(null)}
              placeholder="Enter last name"
              placeholderTextColor="#747476"
              style={{ fontFamily: "ManropeRegular", fontSize: 15 }}
              className={inputClass("lastName")}
            />
            {errors.lastName && (
              <Text className="text-red-500 font-manrope text-sm mt-2">
                {errors.lastName}
              </Text>
            )}
          </View>

          {/* Contact Number */}
          <View className="mb-4">
            <Text className="font-manrope-medium text-black mb-2">
              Contact Number
            </Text>
            <TextInput
              value={contactNumber}
              onChangeText={setContactNumber}
              onFocus={() => {
                setFocusedInput("contactNumber");
                setErrors((prev) => ({ ...prev, contactNumber: "" }));
              }}
              onBlur={() => setFocusedInput(null)}
              placeholder="Enter contact number"
              placeholderTextColor="#747476"
              style={{ fontFamily: "ManropeRegular", fontSize: 15 }}
              className={inputClass("contactNumber")}
            />
            {errors.contactNumber && (
              <Text className="text-red-500 font-manrope text-sm mt-2">
                {errors.contactNumber}
              </Text>
            )}
          </View>

          {/* Email */}
          <View className="mb-4">
            <Text className="font-manrope-medium text-black mb-2">Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              onFocus={() => {
                setFocusedInput("email");
                setErrors((prev) => ({ ...prev, email: "" }));
              }}
              onBlur={() => setFocusedInput(null)}
              placeholder="Enter email"
              placeholderTextColor="#747476"
              style={{ fontFamily: "ManropeRegular", fontSize: 15 }}
              className={inputClass("email")}
            />
            {errors.email && (
              <Text className="text-red-500 font-manrope text-sm mt-2">
                {errors.email}
              </Text>
            )}
          </View>

          {/* Password */}
          <View className="mb-4">
            <Text className="font-manrope-medium text-black mb-2">
              Password
            </Text>
            <View className={passwordInputClass("password")}>
              <TextInput
                value={password}
                onChangeText={setPassword}
                onFocus={() => {
                  setFocusedInput("password");
                  setErrors((prev) => ({ ...prev, password: "" }));
                }}
                onBlur={() => setFocusedInput(null)}
                placeholder="Enter password"
                placeholderTextColor="#747476"
                secureTextEntry={!showPassword}
                style={{ fontFamily: "ManropeRegular", fontSize: 15 }}
                className="flex-1 text-black"
              />
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                <Ionicons
                  name={showPassword ? "eye" : "eye-off"}
                  size={20}
                  color="#000"
                />
              </Pressable>
            </View>
            {errors.password && (
              <Text className="text-red-500 font-manrope text-sm mt-2">
                {errors.password}
              </Text>
            )}
          </View>

          {/* Confirm Password */}
          <View className="mb-4">
            <Text className="font-manrope-medium text-black mb-2">
              Confirm Password
            </Text>
            <View className={passwordInputClass("confirmPassword")}>
              <TextInput
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                onFocus={() => {
                  setFocusedInput("confirmPassword");
                  setErrors((prev) => ({ ...prev, confirmPassword: "" }));
                }}
                onBlur={() => setFocusedInput(null)}
                placeholder="Re-enter password"
                placeholderTextColor="#747476"
                secureTextEntry={!showConfirmPassword}
                style={{ fontFamily: "ManropeRegular", fontSize: 15 }}
                className="flex-1 text-black"
              />
              <Pressable
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <Ionicons
                  name={showConfirmPassword ? "eye" : "eye-off"}
                  size={20}
                  color="#000"
                />
              </Pressable>
            </View>
            {errors.confirmPassword && (
              <Text className="text-red-500 font-manrope text-sm mt-2">
                {errors.confirmPassword}
              </Text>
            )}
          </View>
        </View>

        {/* Register Button */}
        <TouchableOpacity
          className="bg-brand flex items-center justify-center py-4 rounded-xl mt-6"
          onPress={handleRegister}
        >
          <Text className="text-white text-lg font-semibold font-manrope-medium">
            Register
          </Text>
        </TouchableOpacity>

        {/* Already have an account */}
        <View className="flex-row justify-center mt-6 mb-8">
          <Text className="text-base text-gray-700 font-manrope-medium">
            Already have an account?{" "}
          </Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text className="text-base font-manrope-medium text-teal-600 underline">
              Login Here
            </Text>
          </Pressable>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
