import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { gStyle } from "../styles/style";

export default function Main({ navigation }) {
  const loadScene = () => {
    navigation.navigate("Contacts");
  };
  const [news, setNews] = useState([
    {
      name: "Google",
      anons: "Google - is cool",
      full: "Let`s learn how to use Google",
      key: 1,
    },
    {
      name: "Apple",
      anons: "Apple - is cool",
      full: "Let`s learn how to use Apple",
      key: 2,
    },
    {
      name: "Amazon",
      anons: "Amazon - is cool",
      full: "Let`s learn how to use Amazon",
      key: 3,
    },
  ]);
  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>Main Page</Text>
      <Button title={"Open page"} onPress={loadScene} />

      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("FullInfo", item)}
          >
            <Text>{item.name}</Text>
            <Text>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
