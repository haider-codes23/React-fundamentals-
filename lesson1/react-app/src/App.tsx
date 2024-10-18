import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import DismissibleAlert from "./components/DismissibleAlert";
import { useState } from "react";

function App() {
  // let cities = ["Lahore", "Islamabad", "Karachi", "Peshawar", "Hyderbad"];
  // let names = ["Muhammad Musa", "Muhammad Ibraheem", "Muhammad Yusuf"];
  // let headingForCities = "List of Cities";
  // let headingForNames = "List of Names";
  // let handleSelectItem = (item: string) => console.log(item);
  let [alertVisibility, setAlertVisibility] = useState<boolean>(false);
  const handleOnClose = () => setAlertVisibility(false);
  return (
    <div>
      {alertVisibility && <DismissibleAlert onClose={handleOnClose}> Holy Guacamole</DismissibleAlert>}
      <Button buttonColor="primary" buttonText="Click Me" onClick={() => setAlertVisibility(true)}></Button>
    </div>
  )
  
  
  
  
  // return (
  //   <div>
  //     <Button buttonColor="danger" buttonText="Primary" onClick={onClick}></Button>
  //   </div>
  // );
  
  
  
  
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