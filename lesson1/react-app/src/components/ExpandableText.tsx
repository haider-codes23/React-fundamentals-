import {useState} from 'react';

interface Props {
  children: string;
  maxChars?: number;
}

function ExpandableText({children, maxChars = 100}: Props) {

  if (children.length <= maxChars) return <p>{children}</p>;

  const [expandedState, setExpandedState] = useState(false);

  const text = expandedState ? children : children.substring(0, maxChars);

  return (
    <p>{text}...<button onClick={() => setExpandedState(!expandedState)}>{expandedState ? 'Less' : 'More'}</button></p>
  )
}

export default ExpandableText;