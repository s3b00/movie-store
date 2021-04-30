import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutMe from './components/About_me';
import EmptyList from './components/EmptyList';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Toolbar from './components/Toolbar';

const App: React.FC = () => (
  <div className="App">
    <Header />
    <div className="container mt-3">
      <Toolbar />
      <Switch>
        <Route exact path="/" component={EmptyList} />
        <Route path="/about_me" component={AboutMe} />
        <Route path="/movie_list" component={MovieList} />
      </Switch>
    </div>
  </div>
);

export default App;
