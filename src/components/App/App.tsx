import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { charactersSelector } from "../../state/selectors/characters";
import { getCharacters } from "../../state/slices/characters";

function App() {
  const dispatch = useDispatch();
  const fetchedCharacters = useSelector(charactersSelector);
  const [characters, setCharacters] = useState<any>(fetchedCharacters);

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  useEffect(() => {
    console.log({ characters });
  }, [characters]);

  useEffect(() => {
    setCharacters(fetchedCharacters);
  }, [fetchedCharacters]);

  return <div className="App"></div>;
}

export default App;
