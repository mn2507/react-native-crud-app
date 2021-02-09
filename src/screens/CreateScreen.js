import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Context } from "../context/NotesContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [Note, setNote] = useState("");
  const { addNotes } = useContext(Context);

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
      <Button
        title="Add Note"
        onPress={() => {
          addNotes(title, Note, () => {
            navigation.navigate("Index");
            /*navigation is not called immediately after addNotes to avoid getting error
            in case of calling an external API after addNotes in future*/
          });
        }}
      />
    </View>
  );
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

export default CreateScreen;
