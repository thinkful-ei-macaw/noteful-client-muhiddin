import React from 'react';
import NoteApiService from '../../services/note-api';
import './AddNote.css';

class AddNote extends React.Component {

  handleSubmit = event => {
    event.preventDefault();  
    const { note_name, content } = event.target; 
    
    const folder_id = this.props.match.params.folder_id;

    NoteApiService.postNote(note_name.value, content.value, folder_id)
      .then((note) => {
        note_name.value = '';
        content.value = '';
        this.props.history.goBack();
      })
      .catch((err) => {
        console.log(err);
      })
    
  }

  handleCancel = event => {
    event.preventDefault();
    this.props.history.goBack();
  }


  render() {
    return (
      <div className="AddNoteForm">
      <form className="AddNote" onSubmit={this.handleSubmit}>
        <label htmlFor="name">Enter a note name:</label>
        <input type="text" name="note_name" id="name" />
        <label htmlFor="content">Enter a content for note:</label>
        <textarea type="text" name="content" id="content" />
        <div className="AddNoteSubmit">
          <input type="submit" value="Submit" id="AddNoteSubmit" />
          <input type="submit" value="Cancel" id="AddNoteCancel" onClick={this.handleCancel}/>
        </div>
      </form>
      </div>
    );
  }
}

export default AddNote;
