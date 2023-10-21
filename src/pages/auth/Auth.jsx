import React, { useState, useEffect } from "react";
import "./auth.scss";

export default function Auth() {

  return (
    <div className="auth">
      <div className="container">
        <div className="auth-container">
            <div className="auth-signin ">
              <div className="auth-signin-wrapper">
                <div className="auth-signin-wrapper-header ">
                  <h2>Đăng nhập</h2>
                  <span>
                  </span>
                </div>
                <div className="auth-signin-wrapper-body">
                  <div className="item">
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder="Enter your username" />
                  </div>
                  <div className="item">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="Enter your password" />
                  </div>
                  <button className="btn-signin">Đăng nhập</button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
