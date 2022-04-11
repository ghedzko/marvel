import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCharacters } from "../../services/characters";
import { getCharacters } from "../../state/slices/characters";

function App() {
  const dispatch = useDispatch();
  const [characters, setCharacters] = useState<any>();

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  useEffect(() => {
    console.log({ characters });
  }, [characters]);

  return <div className="App"></div>;
}

export default App;
