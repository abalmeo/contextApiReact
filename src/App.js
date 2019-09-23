import React from "react";
import MovieList from "./MovieList";
import Navigation from "./Nav";
import { MovieProvider } from "./MovieContext";
import "./App.css";

function App() {
  return (
    <MovieProvider>
      <div className='App'>
        <Navigation />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
