import React, { useState } from "react";
import { StyleSheet,SafeAreaView, View, Text, TextInput, Button } from "react-native";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    return (  
        <ImageBackground
      
      style={styles.container}
      >
      <View style={styles.overlay} />
      
      <View style={styles.content}>
        <Text style={styles.title}>ลงชื่อเข้าใช้</Text>
      
        <View style={styles.inputContainer}>
        <Text style={styles.label}>ชื่อผู้เข้าใช้</Text>
          <TextInput
          style={styles.input}
          onChangeText={(text) => setUsername(text)}/>
        </View>
      
        <View style={styles.inputContainer}>
        <Text style={styles.label}>รหัสผ่าน</Text>
          <TextInput
          style={styles.input}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}/>
       </View>
      
        <Text style={styles.text1} >ลืมรหัสผ่าน?</Text>

        <View style={styles.group}>
          <Text style={styles.text2} >ลงทะเบียน</Text>
          <Text style={styles.text3}>ยังไมมีบัญชี PWIN ?</Text>
        </View>
    
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>เข้าสู่ระบบ</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>

        );
 };


 
const styles = StyleSheet.create({
    


});

export default Register;

