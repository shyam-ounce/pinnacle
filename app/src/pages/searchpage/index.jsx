import React from "react";
import "./style.css";
import { useSearchParams } from "react-router-dom";
const Gallery = React.lazy(() => import("../../components/gallery"));

const Searchpage = () => {
  let [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  
  return (
    <div>
      <Gallery search={search} />
    </div>
  );
};

export default Searchpage;
