import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

//components
import Navbar from "./components/Navbar";
import CharacterList from "./components/CharacterList";
import Character from "./components/Character";
import EpisodeList from "./components/EpisodeList";
import Episode from "./components/Episode";
import LocationList from "./components/LocationList.jsx";
import Location from "./components/Location";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" />
        <Route exact path="/characters" component={CharacterList} />
        <Route exact path="/characters/:id" component={Character} />
        <Route exact path="/episodes" component={EpisodeList} />
        <Route exact path="/episodes/:id" component={Episode} />
        <Route exact path="/locations" component={LocationList} />
        <Route exact path="/locations/:id" component={Location} />
      </Switch>
    </div>
  );
};

export default App;
