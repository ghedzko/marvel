import { FunctionComponent } from "react";
import { Character as CharacterInterface } from "../../interfaces/Characters";
interface CharactersProps {
  key: number;
  character: CharacterInterface;
}
const Character: FunctionComponent<CharactersProps> = ({ key, character }) => {
  console.count("Character number : ");
  return (
    <div key={key} className="character">
      {character.name}
    </div>
  );
};

export default Character;
