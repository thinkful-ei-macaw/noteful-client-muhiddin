import React, { Component } from 'react';
import NoteContext from '../../contexts/NoteContext';
import NoteApiService from '../../services/note-api';
import './NoteListPage.css';

export default class NoteListPage extends Component {
  static contextType = NoteContext;

  componentDidMount() {
    NoteApiService.getNotes()
      .then(this.context.setNotes)
  }

  renderNotes() {
    const { notes } = this.context;
    return notes.map(note => {
        return (
          <div key={note.id} className="NoteItem">
            <h1>{note.name}</h1>
              <p>{note.modified}</p>
              <button type="button" id="DeleteNote">Delete Note</button>
          </div>
        );
    })
  }

  render() {
    return (
      <div className='NoteListPage'>
          {this.renderNotes()}
      <button id="AddNote">Add Note</button>
      </div>
    )
  }
}