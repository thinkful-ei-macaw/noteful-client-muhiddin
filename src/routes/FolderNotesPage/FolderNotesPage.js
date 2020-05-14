import React from 'react';
import { Link } from 'react-router-dom';
import NoteApiService from '../../services/note-api';
import './FolderNotesPage.css';
import AddNote from '../AddNote/AddNote';

class FolderNotesPage extends React.Component {
  

  state = {
    folder: {
      notes: []
    }    
  }

  componentDidMount() {
    const folder_id = this.props.match.params.folder_id;
    NoteApiService.getFolderNotes(folder_id)
    .then(notes => this.setState({folder: {notes}}));

  }

  handleDelete(note_id, e) {
    e.preventDefault();
    NoteApiService.deleteNote(note_id); 
    setTimeout(function(){
      window.location.reload(1);
   }, 100);
  } 

  renderFolderNotes() {
    const { notes = [] } = this.state.folder;
    return notes.map(note => {
      return ( 
        <Link to={this.props.match.url + `/${note.note_id}`} key={note.note_id}>         
        <div key={note.note_id} className="NoteDetail">
        <h1>{note.note_name}</h1>
          <p>{note.modified}</p>
          <button type="button" id="DeleteNote" onClick={(e) => this.handleDelete(note.note_id, e)}>Delete Note</button>
        </div>   
        </Link>     
      );
    })
  }

  render() {
    let folder_id = this.props.match.params.folder_id;
    return (
      <div className="FolderNotes">
        <button type="button" onClick={() => this.props.history.goBack()}>Back</button>
        
        {this.renderFolderNotes()}
        <button type="button" id="AddNote" onClick={() => this.props.history.push(`/notes/add-note/${folder_id}`)}>
          Add Note
        </button>
      </div>
    )
  }
}


export default FolderNotesPage;