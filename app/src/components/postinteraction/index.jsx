import React from "react";
import "./style.css";
import Image from "../image";

const PostInteraction = () => {
  return (
    <div className="post__interaction">
      <div className="interaction__icons">
        <Image path={"/general/react.svg"} alt={"Like"} width={32} />
        273
        <Image path={"/general/share.svg"} alt={"Like"} width={32} />
        <Image path={"/general/more.svg"} alt={"Like"} width={32} />
      </div>
      <button>Save</button>
    </div>
  );
};

export default PostInteraction;
