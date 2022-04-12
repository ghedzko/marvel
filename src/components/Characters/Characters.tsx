import { FunctionComponent, useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Character as CharacterProps } from "../../interfaces/Characters";
import { charactersSelector } from "../../state/selectors/characters";
import Character from "../Character/Character";

import styles from "./Characters.module.scss";

const Characters: FunctionComponent = () => {
  const fetchedCharacters = useSelector(charactersSelector);
  const [characters, setCharacters] =
    useState<CharacterProps[]>(fetchedCharacters);
  console.count("Characters :");
  useEffect(() => {
    setCharacters(fetchedCharacters);
  }, [characters, fetchedCharacters]);
  return (
    <div className={styles.container}>
      {characters &&
        characters.map((character: CharacterProps) => (
          <Character key={character.id} character={character} />
        ))}
    </div>
  );
};

export default Characters;
