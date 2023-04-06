import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { gStyle } from "./styles/style";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import MainStack from "./navigate";

const fontsLoading = async () => {
  await Font.loadAsync({
    "mt-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "mt-light": require("./assets/fonts/Montserrat-Light.ttf"),
    "mt-thin": require("./assets/fonts/Montserrat-Thin.ttf"),
    "mt-italic": require("./assets/fonts/Montserrat-Italic.ttf"),
  });
};

export default function App() {
  const [fonts, setFonts] = useState(false);

  const onFinishHandler = () => {
    setFonts(true);
  };
  if (fonts) {
    return <MainStack />;
  } else {
    return (
      <AppLoading
        startAsync={fontsLoading}
        onFinish={onFinishHandler}
        onError={console.warn}
      />
    );
  }
}

const styles = StyleSheet.create({});
