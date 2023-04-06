import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  FlatList,
  Image,
  Modal,
} from "react-native";
import { gStyle } from "../styles/style";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import Form from "./Form";

export default function Main({ navigation }) {
  const loadScene = () => {
    navigation.navigate("Dogs Page");
  };

  const modalWindowHandlerTrue = () => {
    setModalWindow(true);
  };

  const modalWindowHandlerFalse = () => {
    setModalWindow(false);
  };

  const [news, setNews] = useState([
    {
      name: "Orange cats",
      anons: "Orange cats are very emotional and playful",
      pres: "Click on cat to feeding him",
      full: "Thank you ♥",
      key: 1,
      icon: "https://icons.iconarchive.com/icons/iconka/saint-whiskers/128/cat-food-hearts-icon.png",
    },
    {
      name: "White cats",
      anons: "White cats are very kind and affectionate",
      pres: "Click for on cat to feeding him",
      full: "Thank you ♥",
      key: 2,
      icon: "https://icons.iconarchive.com/icons/iconka/saint-whiskers/128/cat-cupid-love-icon.png",
    },
    {
      name: "Black cats",
      anons: "Black cats are very playful and funny",
      pres: "Click for on cat to feeding him",
      full: "Thank you ♥",
      key: 3,
      icon: "https://icons.iconarchive.com/icons/iconka/saint-whiskers/128/cat-banjo-icon.png",
    },
  ]);

  const [modalWindow, setModalWindow] = useState(false);

  const addArticle = (article) => {
    setNews((list) => {
      article.key = Math.random().toString();
      return [article, ...list];
    });
    setModalWindow(false);
  };

  return (
    <View style={gStyle.main}>
      <Modal visible={modalWindow}>
        <EvilIcons
          name="close"
          size={24}
          color="black"
          style={styles.close}
          onPress={modalWindowHandlerFalse}
        />
        <View style={gStyle.main}>
          <Text style={gStyle.title}>Add your cat`s card</Text>
          <Form addArticle={addArticle} />
        </View>
      </Modal>
      <Ionicons
        name="add-circle"
        size={24}
        color="black"
        style={styles.icon}
        onPress={modalWindowHandlerTrue}
      />

      <Text style={gStyle.title}>Main Page</Text>
      <Button
        color={"#eac9c0"}
        title={"To Load Dogs Page"}
        onPress={loadScene}
      />

      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={gStyle.item}
            sty
            onPress={() => navigation.navigate("FullInfo", item)}
          >
            <Image style={gStyle.image} source={{ uri: item.icon }} />
            <Text style={gStyle.title}>{item.name}</Text>
            <Text style={styles.text}>{item.anons}</Text>
            <Text style={styles.feeding}>{item.pres}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 30,
  },
  feeding: {
    backgroundColor: "#b2da96",
    textAlign: "center",
    fontSize: 20,
    padding: 10,
  },
  text: {
    textAlign: "center",
    margin: 10,
  },
  icon: {
    textAlign: "center",
    margin: 15,
  },
  close: {
    textAlign: "center",
    margin: 15,
  },
});
