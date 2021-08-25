import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

//components
import Navbar from "./components/Navbar";
import CharacterList from "./components/CharacterList";
import EpisodeList from "./components/EpisodeList";
import LocationList from "./components/LocationList.jsx";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" />
        <Route exact path="/characters" component={CharacterList} />
        <Route exact path="/episodes" component={EpisodeList} />
        <Route exact path="/locations" component={LocationList} />
      </Switch>
    </div>
  );
};

export default App;
