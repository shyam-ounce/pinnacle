import { useState } from "react";
import "./user-button.css";

const UserButton = () => {
  const [open, setOpen] = useState(false);
  const currentUser = true;

  return currentUser ? (
    <div className="user__button">
      <img src="/general/noAvatar.png" alt="User Avatar" />
      <img
        src="/general/arrow.svg"
        alt="View"
        className="arrow"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className="user__options">
          <div className="user__option">Profile</div>
          <div className="user__option">Settings</div>
          <div className="user__option">Logout</div>
        </div>
      )}
    </div>
  ) : (
    <div className="logo__link">Login / Signup</div>
  );
};

export default UserButton;
