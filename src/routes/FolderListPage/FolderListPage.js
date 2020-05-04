import React, { Component } from 'react';
import NoteContext from '../../contexts/NoteContext';
import FolderApiService from '../../services/folder-api';
import './FolderListPage.css';
import { Link } from 'react-router-dom';

export default class FolderListPage extends Component {
  static contextType = NoteContext;

  componentDidMount() {
    FolderApiService.getFolders()
      .then(this.context.setFolders)
  }

  renderFolders() {
    const { folders = [] } = this.context;
    return folders.map(folder => {
        return (
          <div key={folder.id} className="FolderItem">
            <h1>{folder.name}</h1>
          </div>
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