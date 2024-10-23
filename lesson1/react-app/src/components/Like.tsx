import { useState } from 'react';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';

interface Props {
  onClick: () => void;
}

function Like(props: Props) {
  const toggle = () => {
    setHeartStatus(!heartStatus);
    props.onClick();
  }

  let [heartStatus, setHeartStatus] = useState<boolean>(false);
   if (heartStatus) return <AiFillHeart color="red" size={50} onClick={toggle}/>
  return (
    <AiOutlineHeart color="red" size={50} onClick={toggle}/>
  );
};

export default Like;