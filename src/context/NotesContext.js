import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const notesReducer = (state, action) => {
  switch (action.type) {
    case "get_notes":
      return action.payload;
    /* action.payload is not modified further like adding values to the current
      state value or so, because the entire information being fetched from api
      is as the total source of truth/no fabrication or modification of information */
    case "edit_notes":
      return state.map((note) => {
        return note.id === action.payload.id ? action.payload : note;
      });
    /*
        if (note.id === action.payload.id) {
          return action.payload;
        } else {
          return note;
        }
      });
      */
    case "delete_notes":
      return state.filter((note) => note.id !== action.payload);
    default:
      return state;
  }
};

const getNotes = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/notes");
    /* notes will be contained in response.data === [{}, {}, {}] in array */
    dispatch({ type: "get_notes", payload: response.data });
    /* when dispatch is called, react will take that object and call the reducer.
     That object will be written as the 2nd argument to the reducer (e.g. action) */
  };
};

const addNotes = (dispatch) => {
  return async (title, Note, callback) => {
    await jsonServer.post("/notes", { title, Note });
    if (callback) {
      callback();
    }
  };
};

const deleteNotes = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/notes/${id}`);
    dispatch({ type: "delete_notes", payload: id });
  };
};

const editNotes = (dispatch) => {
  return async (id, title, Note, callback) => {
    await jsonServer.put(`/notes/${id}`, { title, Note });

    dispatch({ type: "edit_notes", payload: { id, title, Note } });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  notesReducer,
  { addNotes, deleteNotes, editNotes, getNotes },
  []
  /*[{ title: "Vanakkam", Note: "Magilchi", id: 1 }]*/ //Populated for testing purpose
);
