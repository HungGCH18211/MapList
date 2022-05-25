import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";

const PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");

  function changeTitleHandle(enteredText) {
    setEnteredTitle(enteredText);
  }
  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandle}
          value={enteredTitle}
        />
      </View>
      <ImagePicker />
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form: { flex: 1, padding: 24 },
  label: { color: Colors.primary500, fontWeight: "bold", margin: 4 },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
