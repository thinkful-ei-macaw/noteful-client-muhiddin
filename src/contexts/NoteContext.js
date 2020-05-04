import React, { Component } from 'react';

const NoteContext = React.createContext({
  folder: [],
  folders: [],
  notes: [],
  setFolder: () => {},
  setFolders: () => {},
  setNotes: () => {},
  addFolder: () => {},
  addNote: () => {},
  deleteNote: () => {}
})

export default NoteContext;

export class NoteProvider extends Component {
  state = {
    folder: [],
    folders: [],
    notes: [],
  };

  setFolder = folder => {
    this.setState({ folder })
  }

  setFolders = folders => {
    this.setState({ folders });
  }

  setNotes = notes => {
    this.setState({ notes });
  }

  deleteNote = () => {
    this.setNote([]);
  }

  addFolder = folder => {
    this.setFolders([
      ...this.state.folders,
      folder
    ]);
    return folder;
  }

  addNote = note => {
    this.setNotes([
      ...this.state.notes,
      note
    ]);
    return note;
  }

  render() {
    const value = {
      folders: this.state.folders,
      folder: this.state.folder,
      notes: this.state.notes,
      note: this.state.note,
      setFolder: this.setFolder,
      setFolders: this.setFolders,
      setNote: this.setNote,
      setNotes: this.setNotes,
      deleteNote: this.deleteNote,
      addFolder: this.addFolder,
      addNote: this.addNote    
    }
    return (
      <NoteContext.Provider value={value}>
        {this.props.children}
      </NoteContext.Provider>
    )
  }
}