import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
//import axios from "axios"; // Make sure to import axios

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  /*   const handleLogin = async () => {
    // Perform API call to authenticate user
    try {
      const response = await axios.post("https://your-api-url.com/auth/login", {
        username,
        password,
      });

      // Handle successful login
      console.log("Login successful:", response.data);
    } catch (error) {
      // Handle error during login
      console.error("Login failed:", error.response.data);
    }
  }; */

  return (
    <View style={styles.container}>
      <Text h4 style={styles.title}>
        ลงชื่อเข้าใช้
      </Text>
      <Text>ชื่อผู้เข้าใช้</Text>

      <TextInput
        /*         value={username}
        onChangeText={setUsername} */
        styles={styles.inputContainer}
      />
      <Text>รหัสผ่าน</Text>
      <TextInput
        /*         secureTextEntry
        value={password}
        onChangeText={setPassword} */
        styles={styles.inputContainer}
      />
      <Text>ลืมรหัสผ่าน?</Text>
      <Button title="เข้าสู่ระบบ" /* onPress={handleLogin} */ />
      <Text>ยังไม่มีบัญชี PWIN ?</Text>
      <Text>ลงทะเบียน</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    
  },
  title: {

    marginBottom: 30,
    marginTop: 90,
    fontSize: 30,
    color: "#FF8A48",
    fontWeight: "bold",
  },
  inputContainer: {
    borderColor: "black",
    borderWidth: 10,
    bgColor:'gray',
    padding: 10,
    height:50,
  },
  TextInput:{
    height:20,
  },
});

export default Login;
