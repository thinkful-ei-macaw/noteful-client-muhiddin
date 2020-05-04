import React from 'react';
import './MainPage.css';
import FolderListPage from '../FolderListPage/FolderListPage';
import NoteListPage from '../NoteListPage/NoteListPage';

class MainPage extends React.Component {

  render() {
    
    return (
      <div className="MainPage">
        <FolderListPage />
        <NoteListPage />
      </div>
    )
  }
}


export default MainPage;