import React from "react";
import { Card, CardText, CardTitle, CardImg, CardBody } from "reactstrap";

export default function CharacterCard({ charData }) {
  /* id name, species, gender, image
   *
   */
  const { id, name, species, gender, image } = charData;

  return (
    <Card className="Card">
      <CardImg src={image} alt={`image of ${name}`} />
      <CardTitle
        className={`Card-Title${name.split(" ").length > 2 ? "-sm" : ""}`}
      >
        {name}
      </CardTitle>
    </Card>
  );
}
