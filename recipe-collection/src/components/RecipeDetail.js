import React from 'react';

const RecipeDetail = ({ recipe }) => (
  <div>
    <h2>{recipe.name}</h2>
    <img src={recipe.image} alt={recipe.name} />
    <h3>Ingredients</h3>
    <ul>
      {recipe.ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
    <h3>Instructions</h3>
    <p>{recipe.instructions}</p>
  </div>
);

export default RecipeDetail;
