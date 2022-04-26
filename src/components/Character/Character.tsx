import { FunctionComponent } from "react";
import { MARVEL_AUTH } from "../../constants";
import { Character as CharacterInterface } from "../../interfaces/Characters";
import { format } from "date-fns";
import styles from "./Character.module.scss";

interface CharactersProps {
  character: CharacterInterface;
}
const Character: FunctionComponent<CharactersProps> = ({ character: { thumbnail: { path, extension }, ...character} }) => {
  return (
    <div className={styles.wrapper}>
      <img src={`${path}.${extension}`} alt="{character.name}" className={styles.wrapper__image} />
      <h3 className={styles.wrapper__title}>{character.name}</h3>
      <p className={styles.wrapper__text}>{character.description}</p>

      <p className={styles.wrapper__text}>
        <strong>Character Id: </strong>
        {character.id}
      </p>
      <p className={styles.wrapper__text}>
        <strong>Last updated: </strong>
        {format(
          new Date(character.modified.slice(0, 19)),
          "dd 'of' MMMM 'of' yyyy"
        )}
      </p>
    </div>
  );
};

export default Character;
