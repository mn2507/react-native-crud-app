import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Context } from "../context/NotesContext";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const note = state.find((note) => note.id === navigation.getParam("id"));

  const [title, setTitle] = useState(note.title)
  const [Note, setNote] = useState(note.Note)

  return (
    <View>
      <Text >Edit Title:</Text>
      <TextInput
        
        value={title}
        onChangeText={(newTitle) => setTitle(newTitle)}
      />
      <Text >Edit Note:</Text>
      <TextInput
        
        value={Note}
        onChangeText={(newNote) => setNote(newNote)}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
