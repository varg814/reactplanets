import { Link } from "react-router";
import Data from "../../data.json";

const MainPage = () => {
  return (
    <div className="main-page">
      <Link to={`/Planets/Earth`}>
      The Planets
      </Link>
      <ul>
        {Data.map((planet) => (
          <li key={planet.name}>
            <Link to={`/Planets/${planet.name}`}>{planet.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainPage;
