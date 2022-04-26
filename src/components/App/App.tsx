import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CHARACTERS, HOME } from "../../constants";
import CharactersScreen from "../../routes/Characters/Characters.screen";
import HomeScreen from "../../routes/Home/Home.screen";
import { getCharacters } from "../../state/slices/characters";
import Layout from "../Layout";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />}>
          <Route index element={<HomeScreen />} />
        </Route>
        <Route path={`${CHARACTERS}`} element={<CharactersScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
