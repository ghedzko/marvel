import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CharactersScreen from "../../routes/Characters/Characters.screen";
import { getCharacters } from "../../state/slices/characters";
import Characters from "../Characters";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <div className="App">
      <CharactersScreen />
    </div>
  );
}

export default App;
