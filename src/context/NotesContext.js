import createDataContext from "./createDataContext";

const notesReducer = (state, action) => {
  switch (action.type) {
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
    case "add_notes":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          Note: action.payload.Note,
          // title: `Note #${state.length + 1}`,
        },
      ];
    default:
      return state;
  }
};

const addNotes = (dispatch) => {
  return (title, Note, callback) => {
    dispatch({ type: "add_notes", payload: { title, Note } });
    if (callback) {
      callback();
    }
  };
};

const deleteNotes = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_notes", payload: id });
  };
};

const editNotes = (dispatch) => {
  return (id, title, Note, callback) => {
    dispatch({ type: "edit_notes", payload: { id, title, Note } });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  notesReducer,
  { addNotes, deleteNotes, editNotes },
  [{ title: "Vanakkam", Note: "Magilchi", id: 1 }] //Populated for testing purpose
);
