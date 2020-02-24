import React from "react";
import Header from "./components/Header";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";

import { Switch, Route, NavLink, Redirect } from "react-router-dom";

export default function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="characters/">Characters</NavLink>
      </nav>
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
