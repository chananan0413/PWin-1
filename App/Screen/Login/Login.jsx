import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Login = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const navigation = useNavigation();

const handleLogin = () => {


if (username.length >= 8 && /^[A-Z]/.test(username) && password.length >= 8) {

console.log('Login successful');
alert('Login สำเร็จ');
} else {

console.log('Invalid credentials');
alert('Login ผิดพลาด');
}
};

const handlePress = () => {
  // Navigate to CalculateScreen when the button is pressed
  //navigation.navigate("CalculateScreen");
  navigation.navigate("RegisterScreen");
};


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
          <TouchableOpacity  onPress={handlePress}>
            <Text style={styles.text2} >ลงทะเบียน</Text>
          </TouchableOpacity>
          
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
    container: {
      flex: 1,
      resizeMode: 'cover',
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    content: {
      top: 20,
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: 30,
    },
    title: {
      top: 103,
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#ff8a48',
    },
    inputContainer: {
      top: 120,
      width: '100%',
      marginBottom: 25,
    },
      label: {
      fontSize: 16,
      marginBottom: 8,
      color: '#ff8a48',
    },
    text1: {
      fontSize: 14,
      marginBottom: 8,
      color: '#7a7a7a',
      top: 110,
      left: 142 ,
      textdecoration: "underline",
      },
    group : {
      height: 21,
      left:61,
      position: "absolute",
      alignItems: 'center',
      top: 491,
      width: 222,
      },
    
    text2 : {
        color: "#7a7a7a",
        fontSize: 14 ,
        fontweight: 600,
        height: 20,
        left:70,
        letterspacing: 0,
        lineheight: "normal",
        position: "absolute",
      },
      text3 : {
        color: "#b0b0b0",
        fontSize: 14 ,
        fontweight: 600,
        height: 20,
        left:50,
        letterspacing: 0,
        lineheight: "normal",
        position: "absolute",
 
      },
    input: {
      height: 50,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      color: '#7a7a7a',
    },
    button: {
      top: 130,
      height: 50,
      width: '100%',
      backgroundColor: '#ff8a48',
      borderRadius: 5,
      paddingVertical: 12,
      paddingHorizontal: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    });

export default Login;