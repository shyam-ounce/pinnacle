import "./style.css";
import React from "react";
import EmojiPicker from "emoji-picker-react";
import Image from "../image";

const Comments = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="comments">
      <div className="comment__list">
        <span className="comment__count">7 Comments</span>
        {/* Comment */}
        <div className="comment">
          <Image
            path={"/general/noAvatar.png"}
            alt={"User Avatar"}
            width={50}
          />
          <div className="comment__content">
            <span className="comment__username">John Doe</span>
            <p className="comment__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <span className="comment__time">1h ago</span>
        </div>
        {/* Comment */}
        <div className="comment">
          <Image
            path={"/general/noAvatar.png"}
            alt={"User Avatar"}
            width={50}
          />
          <div className="comment__content">
            <span className="comment__username">John Doe</span>
            <p className="comment__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <span className="comment__time">1h ago</span>
        </div>
        {/* Comment */}
        <div className="comment">
          <Image
            path={"/general/noAvatar.png"}
            alt={"User Avatar"}
            width={50}
          />
          <div className="comment__content">
            <span className="comment__username">John Doe</span>
            <p className="comment__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <span className="comment__time">1h ago</span>
        </div>
        {/* Comment */}
        <div className="comment">
          <Image
            path={"/general/noAvatar.png"}
            alt={"User Avatar"}
            width={50}
          />
          <div className="comment__content">
            <span className="comment__username">John Doe</span>
            <p className="comment__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <span className="comment__time">1h ago</span>
        </div>
        {/* Comment */}
        <div className="comment">
          <Image
            path={"/general/noAvatar.png"}
            alt={"User Avatar"}
            width={50}
          />
          <div className="comment__content">
            <span className="comment__username">John Doe</span>
            <p className="comment__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <span className="comment__time">1h ago</span>
        </div>
        {/* Comment */}
        <div className="comment">
          <Image
            path={"/general/noAvatar.png"}
            alt={"User Avatar"}
            width={50}
          />
          <div className="comment__content">
            <span className="comment__username">John Doe</span>
            <p className="comment__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <span className="comment__time">1h ago</span>
        </div>
        {/* Comment */}
        <div className="comment">
          <Image
            path={"/general/noAvatar.png"}
            alt={"User Avatar"}
            width={50}
          />
          <div className="comment__content">
            <span className="comment__username">John Doe</span>
            <p className="comment__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <span className="comment__time">1h ago</span>
        </div>
      </div>
      <form className="comment__form">
        <input type="text" placeholder="Add a comment..." />
        <div className="emoji">
          <div role="button" tabIndex={0} onClick={() => setOpen(!open)}>
            ☺️
          </div>
        </div>
        {open && (
          <div className="emoji__picker">
            <EmojiPicker />
          </div>
        )}
      </form>
    </div>
  );
};

export default Comments;
