import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CalculateScreen from "./App/Screen/Calculate/CalculateScreen";

import HomeScreen from "./App/Screen/Home/HomeScreen";
import AddPlaceScreen from "./App/Screen/AddPlaces/AddPlaceScreen";
import LoginScreen from "./App/Screen/Login/LoginScreen";
import AddDetail from "./App/Screen/AddPlaces/AddDetail";
import AddDetailScreen from "./App/Screen/AddPlaces/AddDetailScreen";
const Stack = createStackNavigator();

export default function AppIndex() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CalculateScreen" component={CalculateScreen} />
        <Stack.Screen name="AddDetailScreen" component={AddDetailScreen} />
        <Stack.Screen
          name="AddPlaceScreen"
          component={AddPlaceScreen}
          screenOptions={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          screenOptions={{
            headerShown: true,
          }}
        />
        {/*         {isLoggedIn ? (
          // Screens for logged in users
          <Stack.Group>
            <Stack.Screen name="AddPlaceScreen" component={AddPlaceScreen} />
          </Stack.Group>
        ) : (
          // Auth screens
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Group>
        )} */}
      </Stack.Navigator>
      {/*       <Drawer.Navigator initialRouteName="HomeScreen" drawerPosition="right">
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
}
