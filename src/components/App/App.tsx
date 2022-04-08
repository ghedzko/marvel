import { useEffect, useState } from "react";
import { fetchCharacters } from "../../services/characters";

function App() {
  // const charactersFetch = fetchCharacters();
  const [characters, setCharacters] = useState();
  useEffect(() => {
    const getCharacters = async () => await fetchCharacters();
    getCharacters().then((data) => {
      console.log("devuelvo la data", data);
      setCharacters(data);
    });
  }, []);

  useEffect(() => {
    console.log({ characters });
  }, [characters]);

  return <div className="App"></div>;
}

export default App;
