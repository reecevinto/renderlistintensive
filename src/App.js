import "./styles.css";
import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

let chemists = [];
let everyoneElse = [];
people.forEach((person) => {
  if (person.profession === "chemist") {
    chemists.push(person);
  } else {
    everyoneElse.push(person);
  }
});

function ListSection({ title, people }) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "}
              Known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
export default function List() {
  return (
    <article>
      <h1>Scientists</h1>
      <ListSection title="chemists" people={chemists} />
      <ListSection title="Everyone else" people={everyoneElse} />
    </article>
  );
}
