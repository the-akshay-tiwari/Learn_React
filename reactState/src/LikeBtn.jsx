import { useState } from "react";
import "./LikeBtn.css"

export default function LikeBtn(){
  let [isLike,setIsLike]=useState(false);

  function likeUnlike(){
    setIsLike(!isLike);
  }
  return(
    <>
      {/* <p>Like button!</p> */}
      <p onClick={likeUnlike}>
        {
          isLike?(<i className="fa-solid fa-heart"></i>):<i className="fa-regular fa-heart" ></i>
        }
      </p>
    </>
  )
}