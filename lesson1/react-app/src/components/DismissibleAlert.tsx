import { ReactNode, useState } from "react";
import Button from "./Button";

interface Props {
  children: ReactNode;
  onClose: () => void;
};

function DismissibleAlert(props: Props) {
  const [alertStatus, setAlertStatus] = useState<number | null>(null);

  
  return (
  <> 
    <div className="alert alert-primary alert-dismissible" >
      {props.children}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={props.onClose}></button>
    </div> 
  </>
  )
}

export default DismissibleAlert;