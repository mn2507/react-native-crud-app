import React, { useState } from "react";

const NotesContext = React.createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const addNotes = () => {
    setNotes([...notes, { title: `Note #${notes.length + 1}` }]);
  };

  return (
    <NotesContext.Provider value={{ data: notes, addNotes }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContext;
