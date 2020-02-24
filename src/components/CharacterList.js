import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterList() {
  //   - Fetch a list of characters from the Rick and Morty API's Characters endpoint *`https://rickandmortyapi.com/api/character/`* and render them to the screen.
  //   - You must display at least one element for each character.

  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`

    const url = `https://rickandmortyapi.com/api/character/`;
    const fetchCharacters = async () => {
      // response > data > results
      const {
        data: { results }
      } = await axios.get(url);
      setCharacters(results);
    };
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    fetchCharacters().catch(err => console.log(err));
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
