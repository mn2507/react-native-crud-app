import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/NotesContext";
import NoteForm from "../components/NoteForm";

const CreateScreen = ({ navigation }) => {
  const { addNotes } = useContext(Context);

  return (
    <NoteForm
      onSubmit={(title, Note) => {
        addNotes(title, Note, () => navigation.navigate("Index"));
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
