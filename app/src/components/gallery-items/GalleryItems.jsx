import  "./gallery-items.css";
const GalleryItems = ({ item }) => {
  return (
    <div className="gallery__item" style={{ gridRowEnd: `span ${Math.ceil(item.height/100)}`}}>
      <img src={item.media} alt="Pin" />
    </div>
  );
};

export default GalleryItems;
