
  export const getPokeData = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/type/3');
    const data = await response.json();
    return data;
  }
  
