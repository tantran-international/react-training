// Challenge 2: Nested lists in one component
// Challenge 3: Extracting a list item component
// Challenge 4: List with a separator
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


// Challenge 4
const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export function Poem() {

  return (
    <article>
      {poem.lines.map((line, index) =>
        <p key={index}>
          {line}
        </p>
      )}
    </article>
  );
}
