import createDataContext from "./createDataContext";

const notesReducer = (state, action) => {
  switch (action.type) {
    case "delete_notes":
      return state.filter((note) => note.id !== action.payload);
    case "add_notes":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: `Note #${state.length + 1}`,
        },
      ];
    default:
      return state;
  }
};

const addNotes = (dispatch) => {
  return () => {
    dispatch({ type: "add_notes" });
  };
};

const deleteNotes = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_notes", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  notesReducer,
  { addNotes, deleteNotes },
  []
);
