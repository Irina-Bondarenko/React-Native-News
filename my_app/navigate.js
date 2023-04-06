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
          name={"Cat Page"}
          component={Main}
          options={{
            title: "Cats page",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#eb5d3d",
              height: 100,
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name={"Dogs Page"}
          component={Contacts}
          options={{
            title: "Dogs Page",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#eb5d3d",
              height: 100,
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name={"FullInfo"}
          component={FullInfo}
          options={{
            title: "Thank you page",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#eb5d3d",
              height: 100,
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
