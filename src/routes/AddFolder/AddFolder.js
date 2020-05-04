import React from 'react';
import FolderApiService from '../../services/folder-api';
import NoteContext from '../../contexts/NoteContext';
import './AddFolder.css';


class AddFolder extends React.Component {
  static contextType = NoteContext;

  handleSubmit = event => {
    event.preventDefault()  
    const { name } = event.target; 

    FolderApiService.postFolder(name.value)
      .then(this.context.addFolder)
      .then((folder) => {
        name.value = '';
        this.props.history.push(`/folders/${folder.id}`)
      })
  }


  render() {
    console.log(this.context.folders);
    return (
      <div className="AddFolderForm">
      <form className="AddFolder" onSubmit={this.handleSubmit}>
        <label htmlFor="name">Enter a folder name:</label>
        <input type="text" name="name" id="name" />
        <div className="AddFolderSubmit">
          <input type="submit" value="Submit" id="AddFolderSubmit" />
        </div>
      </form>
      </div>
    );
  }
}

export default AddFolder;
