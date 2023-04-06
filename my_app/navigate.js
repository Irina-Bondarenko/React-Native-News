import React from "react";
import Main from "./components/Main";
import Contacts from "./components/Contacts";
import FullInfo from "./components/FullInfo";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Main"}
          component={Main}
          options={{ title: "Main page" }}
        />
        <Stack.Screen
          name={"Contacts"}
          component={Contacts}
          options={{ title: "Contacts" }}
        />
        <Stack.Screen
          name={"FullInfo"}
          component={FullInfo}
          options={{ title: "FullInfo" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}