import { FunctionComponent } from "react";
import { Character as CharacterInterface } from "../../interfaces/Characters";

import styles from "./Character.module.scss";

interface CharactersProps {
  key: number;
  character: CharacterInterface;
}
const Character: FunctionComponent<CharactersProps> = ({ key, character }) => {
  console.count("Character number : ");
  return (
    <div className={styles.wrapper} key={key}>
      {character.name}
    </div>
  );
};

export default Character;
