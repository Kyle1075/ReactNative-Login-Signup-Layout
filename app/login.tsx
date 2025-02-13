import { View, Text, TextInput, Button } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function LoginView() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Login</Text>

      <TextInput
        placeholder="Email"
        style={{
          width: 250,
          height: 40,
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={{
          width: 250,
          height: 40,
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Login" onPress={() => alert("Login Clicked!")} />
      <Button title="Go to Signup" onPress={() => router.push("/signup")} />
    </View>
  );
}
