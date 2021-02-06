import React, { FunctionComponent, useState } from 'react';
import Pokemon from "./models/pokemon";
import POKEMONS from "./models/mock-pokemon";

const App: FunctionComponent = () => {
 const [pokemons] = useState<Pokemon[]>(POKEMONS);

 return (
     <h1>Il y a {pokemons.length} pokémons dans votre Pokédex !</h1>
 )
}

export default App;
