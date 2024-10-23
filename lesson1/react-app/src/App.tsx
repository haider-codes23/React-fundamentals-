import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import DismissibleAlert from "./components/DismissibleAlert";
import { useState } from "react";
import StyledButton from './components/StyledButton';
//import './App.css'
import Like from './components/Like';
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from './components/ExpandableText'
import Form from './components/Form';
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";


interface FormData {
  description: string;
  amount: number;
  category: string;
};

export const categories = ["Groceries", "Utilities", "Entertainment"];

function App() {
  // let cities = ["Lahore", "Islamabad", "Karachi", "Peshawar", "Hyderbad"];
  // let names = ["Muhammad Musa", "Muhammad Ibraheem", "Muhammad Yusuf"];
  // let headingForCities = "List of Cities";
  // let headingForNames = "List of Names";
  // let handleSelectItem = (item: string) => console.log(item);
  // const handleOnClick = () => console.log("clicked");
  // Here we when the button is clicked we want to add a new Topping
  // into the array assigned to topping property

  const [expenses, setExpenses] = useState([
    {id: 1, description: "Milk", amount: 5, category:"Groceries"},
    {id: 2, description: "Eggs", amount: 52, category: "Groceries"},
    {id: 3, description: "soyabeans", amount: 10, category: "Groceries"}
  ]);

  const [SelectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses = SelectedCategory ? expenses.filter(expense => expense.category === SelectedCategory) : expenses;

  const handleOnDelete = (id: number) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };
  const handleAddExpense = (data: FormData) => {
    console.log(data);
    setExpenses([...expenses, {...data, id: expenses.length + 1}])
    
  }

return (
  <>
    <div className="mb-4">
      <ExpenseForm addExpense={handleAddExpense}></ExpenseForm>
    </div>
    <div className="div mb-4">
      <ExpenseFilter onSelectCategory={category => setSelectedCategory(category)}></ExpenseFilter>
    </div>
    <ExpenseList expenses={visibleExpenses} onDelete={handleOnDelete}></ExpenseList>
  </>
);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // return (
  //   <>
  //     <ExpandableText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste architecto ut dolores cupiditate magni minus quod, suscipit sit totam veritatis eligendi quibusdam sint! Delectus eius sint quia nisi laudantium, iure reiciendis animi! Placeat dolorem animi ipsa voluptas quisquam officiis voluptate sunt, quia obcaecati, vitae amet reprehenderit nostrum. Dolores quas ipsum iste maiores quibusdam numquam obcaecati ea, est consequuntur! Ut vitae ab quo voluptate incidunt hic eligendi odit sint quisquam atque distinctio debitis, voluptas perspiciatis iusto aliquam soluta omnis nam molestiae? Molestiae, modi quos? Optio voluptate qui pariatur veniam voluptatibus porro quae laborum consectetur dolores id officiis aspernatur, vitae reiciendis? Eum accusamus, possimus dolores ea, suscipit optio consectetur rem, ipsum architecto aspernatur magnam corrupti doloremque enim sed voluptate atque iusto necessitatibus error debitis harum animi fugit! Accusamus reprehenderit praesentium nihil veritatis, debitis, repellat quam magnam provident eos quod magni adipisci dolores ut recusandae voluptatum facilis voluptas sequi! Aliquam recusandae doloribus non cumque, commodi nostrum odio, rerum ipsam error modi ea odit veritatis saepe laudantium vel! Architecto eum praesentium inventore magnam, tempora deserunt! Dolorum tempora animi atque quaerat asperiores a nihil at exercitationem quos ab magni dicta voluptas minima odio, sapiente nulla porro officiis facilis repellendus. Ad reiciendis accusantium numquam laboriosam pariatur.</ExpandableText>
  //   </>
  // );












  // const [cart, setCart] = useState({
  //   discount: 0.1,
  //   items: [
  //     {id: 1, title: "product 1", quantity: 1},
  //     {id: 2, title: "product 2", quantity: 1}
  //   ]
  // });

  // const handleClick = () => {
  //   setCart({...cart, items: cart.items.map(item => {
  //     let tempItem = item;
  //     if (item.id === 1) {
  //       return {...item, quantity: 2};
  //     }
  //     return {...item};
  //   })})
  // }

  // let temp = cart;

  // return (
  //   <>
  //   <div>{cart.items.join(" ")}</div>
  //     <button onClick={handleClick}> Update Item</button>
  //   </>
  // );
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // const [pizza, setPizza] = useState({
  //   name: "spicy pepperoni",
  //   topping: ['Mushroom']
  // });

  // const handleTopping = () => {
  //   setPizza({...pizza, topping: [...pizza.topping, "Cheese"]})
  // }

  // let val = pizza;

  // return (
  //   <>
  //     <div>{pizza.topping.join(", ")}</div>
  //     <button onClick={handleTopping}>Add Topping</button>
  //   </>
  // );
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // Game
  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: "Ibraheem",
  //   },
  // });
  // Here we are spreading all the properties of the game object
  // in a new object, then we override the player property to a new object
  // Then we spread all the properties of the player property and then 
  // override the name property
  // const handleClick = () => {
  //   setGame({...game, player: {...game.player, name: "Yusuf"}})
  // };

  // return (
  //   <>
  //     <div>{game.player.name}</div>
  //     <button onClick={handleClick}>Change my Name</button>
  //   </>
  // );
  
  
  
  
  
  
  
  
  
  
  
  // const [shoppingItem, setShoppingItems] = useState(['Dishwashing Soap', 'Shampoo', 'Detergent', 'Eggs', 'Bread']);
  // const handleOnClear = () => setShoppingItems([]);
  // const handleOnRemove = (index: number) => {
  //   setShoppingItems(shoppingItem.filter((_, i) => i !== index));
  // };

  // return (
  //   <>
  //     <NavBar cartItemsCount={shoppingItem.length}></NavBar>
  //     <Cart onClear={handleOnClear} shoppingItems={shoppingItem} onRemove={handleOnRemove}></Cart>
  //   </>
  // );      








  // return (
  //   <div>
  //     <Like onClick={() => console.log("Clicked")}></Like>
  //   </div>
  // );





  // return (
    //   <div>
    //     <ListGroup items={cities} heading={headingForCities} onSelectItem={handleSelectItem}></ListGroup>
    //   </div>
    // );
    
    
    
    
    //Button Component
    // return (
    //   <div>
    //     <Button buttonColor="danger" buttonText="Primary" onClick={handleOnClick}></Button>
    //   </div>
    // );
  
  
  
  
  
  
  
  
    
    
    
    
    
    
  // Button and Alert Component with close button for dismissing an Alert
  // let [alertVisibility, setAlertVisibility] = useState<boolean>(false);
  // const handleOnClose = () => setAlertVisibility(false);
  // return (
  //   <div>
  //     {alertVisibility && <DismissibleAlert onClose={handleOnClose}> Holy Guacamole</DismissibleAlert>}
  //     <Button buttonColor="primary" buttonText="Click Me" onClick={() => setAlertVisibility(true)}></Button>
  //   </div>
  // )
  
  
  
  
  
  
  // Alert Component
  // let textForAlert = "This is an Alert";
  //   return (
  //     <div>
  //       <Alert>
  //         Hello <span>World</span> this is an Alert
  //       </Alert>
  //     </div>
  //   );
  // return <div><ListGroup items={names} heading={headingForNames} onSelectItem={handleSelectItem}></ListGroup></div>;
};

export default App;