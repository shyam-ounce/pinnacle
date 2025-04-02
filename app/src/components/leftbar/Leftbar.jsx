import "./leftbar.css";

const LeftBar = () => {
  return (
    <div className="leftbar">
      <div className="menu__icons">
        <a href="/" className="menu__icon">
          <img src="/general/logo.png" className="logo" width={40} height={40} alt="Logo" />
        </a>
        <a href="/" className="menu__icon">
          <img src="/general/home.svg" alt="Home" />
        </a>
        <a href="/" className="menu__icon">
          <img src="/general/create.svg" alt="Create" />
        </a>
          <a href="/" className="menu__icon">
            <img src="/general/updates.svg" alt="Updates" />
          </a>
        <a href="/" className="menu__icon">
          <img src="/general/messages.svg" alt="Messagex" />
        </a>
      </div>
        <a href="/" className="menu__icon">
          <img src="/general/settings.svg" alt="Logo" />
        </a>
    </div>
  );
};

export default LeftBar;
