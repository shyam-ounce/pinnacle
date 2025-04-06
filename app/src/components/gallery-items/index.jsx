import { NavLink } from "react-router-dom";
import "./style.css";
import { IKImage } from "imagekitio-react";
import Image from "../image";

const GalleryItems = ({ item }) => {
  return (
    <div
      className="gallery__item"
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      <Image
        src={item.media}
        alt={"Pin"}
        width={372}
        height={(372 * item.width) / item.height}
        className={"gallery__item__img"}
      />

      <NavLink to={`/pin/${item._id}`} className="gallery__item__overlay" />

      <button onClick={() => {}} className="save__button">
        Save
      </button>
      <div className="overlay__icons">
        <button onClick={() => {}}>
          <img src="/general/share.svg" alt="Share" />
        </button>

        <button onClick={() => {}}>
          <img src="/general/more.svg" alt="More" />
        </button>
      </div>
    </div>
  );
};

export default GalleryItems;
