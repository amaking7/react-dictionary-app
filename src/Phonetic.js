import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
        className="phonetics-audio"
      >
        Play audio
      </a>
      <strong>{props.phonetic.text}</strong>
    </div>
  );
}
