// import { Fragment } from "react";
import { MouseEvent, useState } from "react";
import './ListGroup.css'

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
};

function ListGroup(props: Props) {
// let cities = ["Lahore", "Islamabad", "Karachi", "Peshawar", "Hyderbad"];
// cities = [];
// let selectedIndex = 0;
// const handleClick = (event: MouseEvent) => {
  //   console.log(event.target);
  // };
let [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <h1>{props.heading}</h1>
      {props.items.length === 0 && <p>No Items Found</p>}
      {props.items.length > 0 && (
        <ul className="list-group">
          {props.items.map((item, index) => (
            <li className={selectedIndex === index ? "list-group-item active" : "list-group-item"} 
                key={item} 
                onClick={() => {
                  setSelectedIndex(index);
                  props.onSelectItem(item);
                }}>{item}</li>
            ))}
        </ul>
      )}
    </>
  );
}

export default ListGroup;
