import { MouseEvent } from "react";

interface Props {
  shoppingItems: string[];
  onClear: () => void;
  onRemove: (index: number) => void;

}

function Cart({shoppingItems, onClear, onRemove}: Props) {
  return (
  <>
    <div>Cart</div>
    <ul>
      {shoppingItems.map((item, index) => {
        return (
          <div style={{margin: "7px"}}>
            <li key={item} style={{display: 'inline'}}>{item}</li>
            <button style={{margin: "7px"}} onClick={() => onRemove(index)}> Remove Item</button>

          </div>
      )
      })}
    </ul>
    <button style={{marginLeft: "50px"}} onClick={onClear}>Clear All Items</button>
  </>
  );
}

export default Cart;