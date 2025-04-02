import "./gallery.css";
import { galleries } from "../../utils/gallery-json";
import GalleryItems from "../gallery-items/GalleryItems";

const Gallery = () => {
  return (
    <div className="gallery">
      {galleries.map((item) => (
        <GalleryItems item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Gallery;
