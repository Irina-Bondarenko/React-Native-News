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
      <Text style={gStyle.title}>Sorry, but we are cat people</Text>
      <Button color={"#eac9c0"} title={"Go Back to cats"} onPress={goBack} />
    </View>
  );
}

const styles = StyleSheet.create({});
