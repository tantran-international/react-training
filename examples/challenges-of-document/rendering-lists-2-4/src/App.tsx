// Challenge 2: Nested lists in one component
// Challenge 3: Extracting a list item component
// Challenge 4:
import { recipes } from './data';
import './App.css'

// Define type of each property in object of recipes array
type childrenType = {
	name: string;
	ingredients: string[]
}

function Recipe({name, ingredients}: childrenType) {
	return (
		<div>
          <h2>{name}</h2>
          <ul>
            {ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
    </div>
	);
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
				<Recipe {...recipe} key={recipe.id}/>
      ))}
    </div>
  );
}
