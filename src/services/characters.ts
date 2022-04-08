import fetchCreator from "../utils/fetchCreator";

const client = new fetchCreator();

export const fetchCharacters = (): any => {
  client.get("/characters").then((data: any) => {
    console.log({ data });
    return data?.results;
  });
};
