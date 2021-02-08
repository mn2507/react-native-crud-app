import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/NotesContext";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const note = state.find((note) => note.id === navigation.getParam("id"));

  return (
    <View>
      <Text>{note.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
