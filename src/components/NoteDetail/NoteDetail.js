import React from 'react';
import NoteApiService from '../../services/note-api';
import './NoteDetail.css';


class NoteDetail extends React.Component {  
  state = {
    note: []
  }

  componentDidMount() {
    const note_id = this.props.match.params.note_id;
    NoteApiService.getNote(note_id)
      .then((res) => this.setState({note: res}))
  }

 
  render() {
    return (
      <div className="NoteStuff">
        <button type="button" onClick={() => this.props.history.goBack()}>Back</button>
        <div key={this.state.note.note_id} className="NoteContent">
        <h1>{this.state.note.note_name}</h1>
          <p>{this.state.note.modified}</p>
          <button type="button" id="DeleteNote">Delete Note</button>
        </div> 
        <p>{this.state.note.content}</p>
      </div>
    )
  }
}

export default NoteDetail;