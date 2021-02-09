import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/NotesContext";
import NoteForm from "../components/NoteForm";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, editNotes } = useContext(Context);

  const note = state.find((note) => note.id === id);

  return (
    <NoteForm
      initialValues={{ title: note.title, Note: note.Note }}
      onSubmit={(title, Note) => {
        editNotes(id, title, Note, () => navigation.pop());
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
