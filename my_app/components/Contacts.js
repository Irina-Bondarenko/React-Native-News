import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Main from "./Main";
import { gStyle } from "../styles/style";

export default function Contacts({ navigation }) {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>Contacts</Text>
      <Button title={"Go Back"} onPress={goBack} />
    </View>
  );
}

const styles = StyleSheet.create({});
