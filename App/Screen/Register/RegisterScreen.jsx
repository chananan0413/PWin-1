import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

import Register from "./Register";
//import 'Logo' from '../PWin-App/assets/images/Logo.jpg';
export default function RegisterScreen() {
  return (

    <View style={styles.container}>
      <Register/>
    </View>

  );
}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flex:1,
  },
  LogoImage: {
    width: 200,
    height: 40,
    objectFit: "contain",
  },
});
