import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  //   - Fetch a list of characters from the Rick and Morty API's Characters endpoint *`https://rickandmortyapi.com/api/character/`* and render them to the screen.
  //   - You must display at least one element for each character.

  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [isFiltering, setIsFiltering] = useState(false);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const handleNameFilterChange = ({ target: { value } }) => {
    setNameFilter(value);
    nameFilter.length > 0 ? setIsFiltering(true) : setIsFiltering(false);
  };

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

  useEffect(() => {
    const charactersFiltered = characters.filter(char =>
      char.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
    setFilteredCharacters(charactersFiltered);
  }, [nameFilter]);

  const createElements = arrData => {
    return arrData.map(char => {
      return <CharacterCard key={char.id} charData={char} />;
    });
  };

  return (
    <section className="character-list">
      <SearchForm handleChange={handleNameFilterChange} />
      {isFiltering
        ? createElements(filteredCharacters)
        : createElements(characters)}
    </section>
  );
}
