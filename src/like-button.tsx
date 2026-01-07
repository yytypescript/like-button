import "./like-button.css"; // この行を追加
import { useState } from "react"; // この行を追加

export function LikeButton() {
  const [count, setCount] = useState(999); // このように書き換える
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <button className="like" onClick={handleClick} type="button">
      {count}
    </button>
  );
}
