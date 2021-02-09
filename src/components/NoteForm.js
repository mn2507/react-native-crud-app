import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const NoteForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [Note, setNote] = useState(initialValues.Note);

  return (
    <View>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Note:</Text>
      <TextInput
        style={styles.input}
        value={Note}
        onChangeText={(text) => setNote(text)}
      />
      <Button title="Save Note" onPress={() => onSubmit(title, Note)} />
    </View>
  );
};

NoteForm.defaultProps = {
  initialValues: {
    title: "",
    Note: "",
  },
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    margin: 5,
    marginBottom: 15,
    padding: 5,
  },
  label: {
    fontSize: 20,
    marginLeft: 5,
    marginTop: 5,
  },
});

export default NoteForm;
