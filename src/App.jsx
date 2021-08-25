import React from "react";
import "./App.css";

//components
import Navbar from "./components/Navbar";
import CharacterList from "./components/CharacterList";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <CharacterList />
    </div>
  );
};

export default App;
