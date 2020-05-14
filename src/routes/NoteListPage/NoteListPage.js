import React, { Component } from 'react';
import NoteApiService from '../../services/note-api';
import './NoteListPage.css';
import { Link } from 'react-router-dom';


export default class NoteListPage extends Component {
  state = {
    notes: []
  }

  componentDidMount() {
    NoteApiService.getNotes()
    .then(notes => this.setState({notes}))
  }

  handleDelete(note_id, e) {
    e.preventDefault();
    NoteApiService.deleteNote(note_id); 
    setTimeout(function(){
      window.location.reload(1);
   }, 100);
  } 

   renderNotes() {
    const { notes } = this.state;
    return notes.map(note => {
        return (
          <Link to={`/folders/${note.folder_id}/notes/${note.note_id}`} key={note.note_id}>
          <div  className="NoteItem">
            <h1>{note.note_name}</h1>
              <p>{note.modified}</p>
              <button id="DeleteNote" onClick={(e) => this.handleDelete(note.note_id, e)}>Delete Note</button>
         </div>
          </Link>
        );
    })
  }

  render() {
    return (
      <div className='NoteListPage'>
          {this.renderNotes()}
      </div>
    )
  }
}