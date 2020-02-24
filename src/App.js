import React from "react";
import Header from "./components/Header";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";

import { Switch, Route, NavLink, Redirect } from "react-router-dom";

import { Navbar } from "reactstrap";

export default function App() {
  return (
    <>
      <Navbar color="dark">
        <NavLink to="/">Home</NavLink>
        <NavLink to="characters/">Characters</NavLink>
      </Navbar>
      <main>
        <Switch>
          <Route path="/characters/" component={CharacterList} />
          <Route
            path="/"
            exact
            render={() => {
              return <WelcomePage />;
            }}
          />

          <Redirect from="*" to="/" />
        </Switch>
      </main>
    </>
  );
}
