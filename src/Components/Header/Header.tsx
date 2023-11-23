import { useState } from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/cinemaximum-main.png";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const userMail = localStorage.getItem("user");
  const user = userMail ? JSON.parse(userMail) : null;
  const navigate = useNavigate();

  const HandleLogin = (e) => {
    navigate(`/${e}`);
  };

  const [search, setSearch] = useState(false);

  const HandleSearch = () => {
    setSearch(!search);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="" onClick={() => navigate("/")}>
            <img src={logo} className="w-24 h-24" alt={t("Cinemaximum Logo")} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <span className="cs-menu dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                {t("Menu Bar")}
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li style={{ width: "60%", padding: "20px 90px" }}>
                  <a className="dropdown-item" href="#">
                    {t("MoviePass Text")}
                  </a>
                </li>
              </ul>
            </span>
            {!search ? (
              <>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      {t("Films")}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      {t("Cinemas")}
                    </a>
                  </li>
                </ul>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="search-icon"
                  onClick={HandleSearch}
                />
              </>
            ) : (
              <div className="search">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="search-icon-1"
                />
                <input type="text" placeholder={t("Search..")} />
                <FontAwesomeIcon
                  icon={faXmark}
                  onClick={HandleSearch}
                  className="search-icon-2"
                />
              </div>
            )}
          </div>
          <button
            type="button"
            className="btn cs-header-btn-1"
            onClick={() => console.log("clicked")}
          >
            {user ? t("Profile") : t("Register")}
          </button>
          {user ? (
            <div className="user">{user.name}</div>
          ) : (
            <button
              type="button"
              className="btn cs-header-btn-2"
              onClick={() => HandleLogin("login")}
            >
              {t("Login")}
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
