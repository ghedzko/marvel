import React from "react";
import Characters from "../../components/Characters";
import Layout from "../../components/Layout";

const CharactersScreen = () => {
  return (
    <Layout>
      <div>
        <h1>Characters</h1>
        <Characters />
      </div>
    </Layout>
  );
};

export default CharactersScreen;
