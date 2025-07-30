import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Eye, EyeOff } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function RegisterScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../../assets/images/uniclaimlogo.png")}
      style={styles.background}
      imageStyle={styles.logoImage}
    >
      <LinearGradient
        colors={["#ffffffee", "#ffffffcc"]}
        style={styles.overlay}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Create an account</Text>
          <Text style={styles.subtitle}>
            Start your journey here at UniClaim
          </Text>

          <View style={styles.form}>
            <View>
              <Text style={styles.label}>First Name</Text>
              <TextInput style={styles.input} placeholder="Enter first name" />
            </View>

            <View>
              <Text style={styles.label}>Last Name</Text>
              <TextInput style={styles.input} placeholder="Enter last name" />
            </View>

            <View>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="abcde@gmail.com"
                keyboardType="email-address"
              />
            </View>

            <View>
              <Text style={styles.label}>Password</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.inputField}
                  placeholder="Enter your password"
                  secureTextEntry={!passwordVisible}
                />
                <Pressable
                  onPress={() => setPasswordVisible(!passwordVisible)}
                  style={styles.eyeIcon}
                >
                  {passwordVisible ? (
                    <Eye size={20} color="#555" />
                  ) : (
                    <EyeOff size={20} color="#555" />
                  )}
                </Pressable>
              </View>
            </View>

            <View>
              <Text style={styles.label}>Confirm Password</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.inputField}
                  placeholder="Re-enter your password"
                  secureTextEntry={!confirmPasswordVisible}
                />
                <Pressable
                  onPress={() =>
                    setConfirmPasswordVisible(!confirmPasswordVisible)
                  }
                  style={styles.eyeIcon}
                >
                  {confirmPasswordVisible ? (
                    <Eye size={20} color="#555" />
                  ) : (
                    <EyeOff size={20} color="#555" />
                  )}
                </Pressable>
              </View>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
              <Text style={styles.buttonText}>Create an account</Text>
            </TouchableOpacity>

            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text style={styles.loginText}>
                Already have an account?{" "}
                <Text style={styles.loginLink}>Login</Text>
              </Text>
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  logoImage: {
    resizeMode: "contain",
    opacity: 0.06,
    alignSelf: "center",
    top: "10%",
    width: "90%",
    height: "40%",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#222",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 28,
  },
  form: {
    gap: 18,
  },
  label: {
    fontSize: 13,
    marginBottom: 6,
    fontWeight: "500",
    color: "#333",
  },
  input: {
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontSize: 14,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  inputField: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 14,
  },
  eyeIcon: {
    padding: 8,
  },
  button: {
    backgroundColor: "#00BFA6",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },
  loginText: {
    textAlign: "center",
    marginTop: 18,
    fontSize: 13,
    color: "#333",
  },
  loginLink: {
    color: "#00BFA6",
    fontWeight: "500",
  },
});
