import React, { Component } from 'react';
import FolderApiService from '../../services/folder-api';
import './FolderListPage.css';
import { Link } from 'react-router-dom';

export default class FolderListPage extends Component {
  state = {
    folders: []
  }

  componentDidMount() {
    FolderApiService.getFolders()
      .then(folders => this.setState({ folders }));
  }

  
  renderFolders() {
    const { folders = [] } = this.state;
    return folders.map(folder => {
      const folder_id = folder.folder_id;
      return ( 
        <Link to={`folders/${folder_id}/notes`} key={folder_id}>      
          <div className="FolderItem">
            <h1>{folder.folder_name}</h1>
          </div>  
        </Link>       
      );
    })
  }

  render() {
    return (
      <div className='FolderListPage'>
          {this.renderFolders()}
      <Link to="/folders/add-folder">
        <button type="button" id="AddFolder">
          Add Folder
        </button>
      </Link>
      </div>
    )
  }
}