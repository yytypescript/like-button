import React, {useState} from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(999);
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    if (liked) {
      setCount(count - 1);
      setLiked(false);
    } else {
      setCount(count + 1);
      setLiked(true);
    }
  };

  const className = (liked ? ["likeButton", "liked"] : ["likeButton"]).join(' ')

  return (
    <span className={className} onClick={handleClick}>♥ {count}</span>
  );
}

export default App;
