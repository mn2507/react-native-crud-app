import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/NotesContext";
// if there are 2 contexts to be imported, rename it as {Context as NotesContext}
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, deleteNotes, getNotes } = useContext(Context);

  /* getNotes()
    Do not call a method which changes the state in the body, to avoid an infinite loop.
  */

  useEffect(() => {
    getNotes();

    const listener = navigation.addListener("didFocus", () => {
      getNotes();
    });

    return () => {
      listener.remove();
      /* This is to cleanup after implementing a listener, to avoid memory leak which 
    is caused by listeners which are running in background even after a component is
     removed. When a screen is completely removed, then this return function will be 
     invoked. This will turn off the listeners that were created.*/
    };
  }, []);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(note) => note.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteNotes(item.id)}>
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default IndexScreen;
