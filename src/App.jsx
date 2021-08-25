import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

//components
import Navbar from "./components/Navbar";
import CharacterList from "./components/CharacterList";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" />
        <Route exact path="/characters" component={CharacterList} />
      </Switch>
    </div>
  );
};

export default App;
