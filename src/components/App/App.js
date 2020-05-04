import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import MainPage from '../../routes/MainPage/MainPage';
import AddFolder from '../../routes/AddFolder/AddFolder';

class App extends React.Component {
 
  render() {
    return (
      <div className='App'>
        <h1 id="NotefulHeader">Noteful</h1>
        <Switch>
          <Route exact path="/" component={MainPage} />  
          <Route path='/folders/add-folder' component={AddFolder} />     
        </Switch>
      </div>
    );
  };
}

export default App;