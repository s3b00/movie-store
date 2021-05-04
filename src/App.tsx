import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutMe from './components/About_me';
import EmptyList from './components/EmptyList';
import Header from './components/Header';
import MovieList from './components/MovieList';
import { MoviePage } from './components/MoviePage';
import Toolbar from './components/Toolbar';
import { useTypedSelector } from './hooks/useTypedSelector';

const App: React.FC = () => {
  const { movies } = useTypedSelector((store) => store.movies);

  return (
    <div className="App">
      <Header />
      <div className="container mt-3">
        <Toolbar />
        <Switch>
          <Route
            exact
            path="/"
            component={movies.length ? MovieList : EmptyList}
          />
          <Route path="/about_me" component={AboutMe} />
          <Route path="/movie/:imdbID" component={MoviePage} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
