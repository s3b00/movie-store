import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AboutMe from './components/About_me';
import EmptyList from './components/EmptyList';
import Header from './components/Header';

function App(): React.ReactElement {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={EmptyList} />
        <Route path="/about_me" component={AboutMe} />
      </Switch>
    </div>
  );
}

export default App;
