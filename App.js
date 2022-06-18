import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Pokemon from "./screens/Pokemon";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{ headerShown: false, animation: "fade" }}
      >
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="pokemon" component={Pokemon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
