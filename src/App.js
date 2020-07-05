import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Recipe from './components/Recipes';
import Axios from 'axios';


function App() {

  const [search, setSearch] = useState("chicken");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "5662a21c";
  const APP_KEY = "13f8fe2ab934ea2ac4076e4a44bce438";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const result = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);

    setRecipes(result.data.hits);

  };

  const onInputChange = (e) => {
    setSearch(e.target.value);
  }
  const searchClick = () =>{
    getRecipes();
  }
  return (
    <div className="App">
      <Header search={search} onInputChange={onInputChange}  searchClick={searchClick} />
      <div className="container">
      <Recipe  recipes={recipes}/>
      </div>
 
    </div>
  );
}

export default App;
