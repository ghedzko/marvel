import { FunctionComponent, useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Character as CharacterProps } from "../../interfaces/Characters";
import { charactersSelector } from "../../state/selectors/characters";
import Character from "../Character/Character";

const Characters: FunctionComponent = () => {
  const fetchedCharacters = useSelector(charactersSelector);
  const [characters, setCharacters] =
    useState<CharacterProps[]>(fetchedCharacters);
  console.count("Characters :");
  useLayoutEffect(
    () => console.log({ characters }),
    [characters, fetchedCharacters]
  );
  return (
    <div className="characters-container">
      <h1>Characters</h1>
      {characters &&
        characters.map((character: CharacterProps) => (
          <Character key={character.id} character={character} />
        ))}
    </div>
  );
};

export default Characters;
