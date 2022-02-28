import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div className="meaning-text" key={index}>
            <p className="definition-text">{definition.definition}</p>
            <div className="example-text">{definition.example}</div>
          </div>
        );
      })}
    </div>
  );
}
