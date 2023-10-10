import React from "react";
import { Outlet} from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import TopNav from '../components/topNav/TopNav'

import './layout.scss'

export default function Layout() {
  return (
      <div className="layout">
        <Sidebar />
        <div className="layout__main">
          <div className="layout__main-content">
            <TopNav/>
            <Outlet />
          </div>
        </div>
      </div>
  );
}
