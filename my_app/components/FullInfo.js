import React, { useState } from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { gStyle } from "../styles/style";

export default function FullInfo({ route }) {
  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>{route.params.name}</Text>
      <Text style={styles.text}>{route.params.full}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 20,
  },
});
