import { NavLink } from "react-router-dom";
import "./style.css";

const LeftBar = () => {
  return (
    <div className="leftbar">
      <div className="menu__icons">
        <NavLink to="/" className="menu__icon">
          <img src="/general/logo.png" className="logo" width={30} height={30} alt="Logo" />
        </NavLink>
        <NavLink to="/" className="menu__icon">
          <img src="/general/home.svg" alt="Home" />
        </NavLink>
        <NavLink to="/create" className="menu__icon">
          <img src="/general/create.svg" alt="Create" />
        </NavLink>
          <NavLink to="/updates" className="menu__icon">
            <img src="/general/updates.svg" alt="Updates" />
          </NavLink>
        <NavLink to="/message" className="menu__icon">
          <img src="/general/messages.svg" alt="Messagex" />
        </NavLink>
      </div>
        <NavLink to="/settings" className="menu__icon">
          <img src="/general/settings.svg" alt="Logo" />
        </NavLink>
    </div>
  );
};

export default LeftBar;
