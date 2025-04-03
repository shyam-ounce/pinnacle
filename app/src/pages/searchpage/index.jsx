import React from "react";
import "./style.css";
const Gallery = React.lazy(() => import("../../components/gallery"));

const Searchpage = () => {
  return (
    <div>
      <Gallery />
    </div>
  );
};

export default Searchpage;
