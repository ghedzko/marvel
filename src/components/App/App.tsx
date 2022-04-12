import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCharacters } from "../../state/slices/characters";
import Characters from "../Characters";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <div className="App">
      <Characters />
    </div>
  );
}

export default App;
