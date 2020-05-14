import React from 'react';
import FolderApiService from '../../services/folder-api';
import './AddFolder.css';


class AddFolder extends React.Component {

  handleSubmit = event => {
    event.preventDefault()  
    const { folder_name } = event.target; 
    FolderApiService.postFolder(folder_name.value)
      .then(() => {
        folder_name.value = '';
        this.props.history.goBack();
      });
    
  }
  handleCancel = event => {
    event.preventDefault();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="AddFolderForm">
      <form className="AddFolder"  onSubmit={this.handleSubmit}>
        <label htmlFor="folder_name">Enter a folder name:</label>
        <input type="text" name="folder_name" id="folder_name" required/>
        <div className="AddFolderSubmit">
          <input type="submit" value="Submit" id="AddFolderSubmit"/>
          <input type="submit" value="Cancel" id="AddFolderCancel" onClick={this.handleCancel}/>
        </div>
      </form>
      </div>
    );
  }
}

export default AddFolder;
