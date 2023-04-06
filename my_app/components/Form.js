import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import { gStyle } from "../styles/style";
import { Formik } from "formik";

export default function Form({ addArticle }) {
  return (
    <View style={gStyle.main}>
      <Formik
        initialValues={{
          name: "",
          anons: "",
          full: "",
          icon: "",
        }}
        onSubmit={(values, action) => {
          addArticle(values);
          action.resetForm();
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              value={props.values.name}
              placeholder={"Cat`s name"}
              onChangeText={props.handleChange("name")}
            />
            <TextInput
              style={styles.input}
              value={props.values.anons}
              multiline
              placeholder={"Cat`s description"}
              onChangeText={props.handleChange("anons")}
            />
            <TextInput
              style={styles.input}
              value={props.values.full}
              disableFullscreenUI
              placeholder={"Click for on cat to feeding him"}
              onChangeText={props.handleChange("full")}
            />
            <TextInput
              style={styles.input}
              value={props.values.icon}
              placeholder={"Cat`s photo link"}
              onChangeText={props.handleChange("icon")}
            />
            <Button title={"Add cat"} onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    borderColor: "pink",
    borderRadius: 5,

    textAlign: "center",
    marginBottom: 20,
  },

  main: {
    flex: 1,
    padding: 10,
  },
  button: {
    marginBottom: 15,
  },
});
