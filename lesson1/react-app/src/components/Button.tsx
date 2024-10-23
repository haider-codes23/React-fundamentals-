import styles from './Button.module.css';
interface Props {
  buttonColor: string;
  buttonText: string;
  onClick: () => void;
};

function Button(props: Props) {
  
  return (
      <button type="button" className={[styles.btn, styles['btn-' + props.buttonColor]].join(" ")} onClick={props.onClick}>{props.buttonText}</button>
    )
  
  
  // return (
  //   <button type="button" className={"btn btn-" + props.buttonColor} onClick={props.onClick}>{props.buttonText}</button>
  // )
};

export default Button;