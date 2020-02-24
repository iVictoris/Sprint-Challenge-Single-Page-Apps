import React from "react";

export default function CharacterCard({ charData }) {
  /* id name, species, gender, image
   *
   */
  const { id, name, species, gender, image } = charData;

  return (
    <div className="CharacterCard">
      <header>
        <h3>{name}</h3>
      </header>

      <div>
        <img src={image} />
      </div>
    </div>
  );
}
