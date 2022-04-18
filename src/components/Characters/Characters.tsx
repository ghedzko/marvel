import React, { FunctionComponent, useEffect, useState, useId } from "react";
import { useSelector } from "react-redux";
import { Character as CharacterProps } from "../../interfaces/Characters";
import { charactersSelector } from "../../state/selectors/characters";
import Character from "../Character/Character";
import styles from "./Characters.module.scss";
import { v4 } from "uuid";

const Characters: FunctionComponent = () => {
  const fetchedCharacters = useSelector(charactersSelector);
  const [characters, setCharacters] =
    useState<CharacterProps[]>(fetchedCharacters);
  console.count("Characters");
  const id = v4();
  console.log({ id });
  useEffect(() => {
    setCharacters(fetchedCharacters);
  }, [characters, fetchedCharacters]);
  return (
    <div className={styles.container}>
      {characters &&
        characters.map((character: CharacterProps) => (
          <Character key={v4()} character={character} />
        ))}
    </div>
  );
};

export default Characters;
