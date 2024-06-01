import React from 'react';
import { Link } from 'react-router-dom';

const RecipeList = ({ recipes }) => (
  <div>
    {recipes.map((recipe) => (
      <div key={recipe.id}>
        <Link to={`/recipe/${recipe.id}`}>
          <h2>{recipe.name}</h2>
          <p>{recipe.description}</p>
        </Link>
      </div>
    ))}
  </div>
);

export default RecipeList;
