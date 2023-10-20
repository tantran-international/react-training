// Change it to show two separate lists one after another: Chemists and Everyone Else.
import { people } from './datas';
import './App.css'

export default function List() {
  const chemistPersons = people.filter(
    (person) => person.profession === "chemist"
  );
  const everyoneElse = people.filter(
    (person) => person.profession !== "chemist"
  );

  return (
    <article>
      <h1>Scientists</h1>
      <h2>Schemist</h2>
      <ul>
        {chemistPersons.map((person) => (
          <li key={person.id}>
            <img src={'https://media.cnn.com/api/v1/images/stellar/prod/230124093557-bill-gates-file-081822.jpg?c=original'} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
      <h2>Anyone Else</h2>
      <ul>
        {everyoneElse.map((person) => (
          <li key={person.id}>
            <img src={'https://assets.editorial.aetnd.com/uploads/2016/11/donald-trump-gettyimages-687193180.jpg'} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}

