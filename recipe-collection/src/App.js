import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';

const recipesData = [
  // Add your recipe data here
];

const App = () => {
  const [recipes, setRecipes] = useState(recipesData);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    const results = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(query.toLowerCase()) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(query.toLowerCase())
      )
    );
    setSearchResults(results);
  };

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <RecipeList recipes={recipes} />
        </Route>
        <Route path="/recipe/:id" render={({ match }) => {
          const recipe = recipes.find((r) => r.id === parseInt(match.params.id));
          return <RecipeDetail recipe={recipe} />;
        }} />
        <Route path="/search">
          <SearchBar onSearch={handleSearch} />
          <RecipeList recipes={searchResults} />
        </Route>
        <Route path="/favorites">
          {/* Add logic to display favorite recipes */}
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
