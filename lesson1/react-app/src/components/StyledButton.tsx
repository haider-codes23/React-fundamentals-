import styled from 'styled-components';

interface Props {
  text: string;
  onClick: () => void;
};

interface StyledButtonProps {
  text: string;
  // onClick: () => void;
}

const StyledButton = styled.button<StyledButtonProps>`
  padding: 20px;
  background-color: blue;
  border-radius: 5px;
  text: ${props => props.text ? "text" : "null"}
`;

function Button(props: Props) {
  return (
    <StyledButton text={props.text} onClick={props.onClick}>
      {props.text}
    </StyledButton>
  );
}

export default StyledButton;