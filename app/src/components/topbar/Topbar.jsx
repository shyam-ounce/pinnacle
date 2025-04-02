import { useState } from "react";
import "./topbar.css";
import UserButton from "../user-button/UserButton";

const Topbar = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="topbar">
      {/* Search */}
      <div className="searchbar">
        <img src="/general/search.svg" alt="Search" />
        <input
          type="text"
          placeholder="Search"
          className="searchbar__input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {/* User */}
      <UserButton />
    </div>
  );
};

export default Topbar;
