import "./Centers.css";
import Card from "./Card/Card";
import { properties } from "../../constants/data";

function Centers() {
  return (
    <div className="App">
      <div className="properties">
        {properties.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Centers;