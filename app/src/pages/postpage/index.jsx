import "./style.css";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Comments = React.lazy(() => import("../../components/comments"));
const Image = React.lazy(() => import("../../components/image"));
const PostInteraction = React.lazy(() =>
  import("../../components/postinteraction")
);

const Postpage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="post__page">
      <svg
        height="20"
        viewBox="0 0 24 24"
        width="20"
        style={{ cursor: "pointer" }}
        tabIndex={0}
        role="button"
        onClick={() => {
          navigate("/search");
        }}
      >
        <path d="M8.41 4.59a2 2 0 1 1 2.83 2.82L8.66 10H21a2 2 0 0 1 0 4H8.66l2.58 2.59a2 2 0 1 1-2.82 2.82L1 12z"></path>
      </svg>
      <div className="post__container">
        <div className="post__image">
          <Image path={"/pins/pin1.jpeg"} alt={"Pin"} width={736} />
        </div>
        <div className="post__details">
          <PostInteraction />
          <NavLink to="/profile" className="post__user">
            <Image
              path={"/general/noAvatar.png"}
              alt={"User Avatar"}
              width={50}
            />
            <span>John Doe</span>
          </NavLink>
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default Postpage;
