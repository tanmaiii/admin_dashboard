import React, { useEffect, useState } from "react";
import "./sidebar.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

import sidbarNav from "../../config/sidebarNav";
import { useLocation } from "react-router-dom";

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    console.log(curPath);

    const activeItem = sidbarNav.findIndex(item => item.section === curPath)

    setActiveIndex(curPath.length === 0 ? 0 : activeItem)
  }, [location]);

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={logo} alt="" />
      </div>
      <div className="sidebar__menu">
        {sidbarNav?.map((item, i) => (
          <Link
            key={i}
            to={item.link}
            className={`sidebar__menu__item ${activeIndex === i && "active"}`}
          >
            <div className="sidebar__menu__item__icon">{item.icon}</div>
            <div className="sidebar__menu__item__txt">{item.text}</div>
          </Link>
        ))}
        <div className={`sidebar__menu__item`}>
          <div className="sidebar__menu__item__icon">
            <i className="bx bx-log-out"></i>
          </div>
          <div className="sidebar__menu__item__txt">Logout</div>
        </div>
      </div>
    </div>
  );
}
