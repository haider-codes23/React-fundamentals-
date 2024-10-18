interface Props {
  buttonColor: string;
  buttonText: string;
  onClick: () => void;
};

function Button(props: Props) {
  return (
    <button type="button" className={"btn btn-" + props.buttonColor} onClick={props.onClick}>{props.buttonText}</button>
  )
};

export default Button;