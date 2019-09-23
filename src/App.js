import React from 'react';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import Navigation from './Nav';
import { MovieProvider } from './MovieContext';
import './App.css';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Navigation />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
