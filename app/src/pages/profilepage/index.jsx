import React from "react";
import "./style.css";
import Image from "../../components/image";
import Gallery from "../../components/gallery";
import Collections from "../../components/collections";

const Profilepage = () => {
  const [type, setType] = React.useState("saved");

  return (
    <div className="profile__page">
      <Image
        className="profile__image"
        path={"/general/noAvatar.png"}
        alt={"User Avatar"}
        width={100}
        height={100}
      />
      <h1 className="profile__name">John Doe</h1>
      <span className="profile__username">@johndoe</span>
      <div className="follow__counts">50 followe 15 following</div>
      <div className="profile__interaction">
        <Image path={"/general/share.svg"} alt={"Like"} width={32} />
        <div className="profile__buttons">
          <button>Message</button>
          <button>Follow</button>
        </div>
        <Image path={"/general/more.svg"} alt={"Like"} width={32} />
      </div>
      <div className="profile__options">
        <span
          onClick={() => setType("created")}
          className={`${type === "created" ? "active" : ""}`}
        >
          Created
        </span>
        <span
          onClick={() => setType("saved")}
          className={`${type === "saved" ? "active" : ""}`}
        >
          Saved
        </span>
      </div>
        {type === "created" ? <Gallery /> : <Collections />}
    </div>
  );
};

export default Profilepage;
