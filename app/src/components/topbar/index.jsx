import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Image from "../image";
import UserButton from "../user-button";

const Topbar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    console.log("first");
    e.preventDefault();
    navigate(`/search?search=${e.target[0].value}`);
  };

  return (
    <div className="topbar">
      {/* Search */}
      <form onSubmit={handleSubmit} className="searchbar">
        <Image path="/general/search.svg" alt="Search" />
        <input
          type="text"
          placeholder="Search"
          className="searchbar__input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      {/* User */}
      <UserButton />
    </div>
  );
};

export default Topbar;
