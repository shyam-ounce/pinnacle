import { useEffect, useRef, useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const UserButton = () => {
  const [open, setOpen] = useState(false);
  const userOptionRef = useRef(null);
  const currentUser = true;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        userOptionRef.current &&
        !userOptionRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setOpen((prev) => !prev);
  };

  return currentUser ? (
    <div className="user__button">
      <img src="/general/noAvatar.png" alt="User Avatar" />
      <img
        src="/general/arrow.svg"
        alt="View"
        className="arrow"
        onClick={toggleDropdown}
      />
      {open && (
        <div ref={userOptionRef} className="user__options">
          <NavLink to="/profile" className="user__option">
            Profile
          </NavLink>
          <NavLink to="/settings" className="user__option">
            Settings
          </NavLink>
          <NavLink to="/auth" className="user__option">
            Logout
          </NavLink>
        </div>
      )}
    </div>
  ) : (
    <div className="logo__link">Login / Signup</div>
  );
};

export default UserButton;
