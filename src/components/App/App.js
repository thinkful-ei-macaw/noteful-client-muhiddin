import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import MainPage from '../../routes/MainPage/MainPage';
import AddFolder from '../../routes/AddFolder/AddFolder';
import AddNote from '../../routes/AddNote/AddNote';
import FolderNotesPage from '../../routes/FolderNotesPage/FolderNotesPage';
import NoteDetail from '../NoteDetail/NoteDetail';

class App extends React.Component {

  render() {
    return (
      <div className='App'>
        <h1 id="NotefulHeader">Noteful</h1>
        <Switch>
          <Route exact path="/" component={MainPage} />  
          <Route path='/folders/add-folder' component={AddFolder} />  
          <Route path='/notes/add-note/:folder_id' component={AddNote} /> 
          <Route exact path='/folders/:folder_id/notes' component={FolderNotesPage} />    
          <Route path='/folders/:folder_id/notes/:note_id' component={NoteDetail}/>
        </Switch>
      </div>
    );
  };
}

export default App;