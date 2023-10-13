import React, {useState, useEffect} from "react";
import "./auth.scss";
import img from '../../assets/images/login.jpg'

export default function Auth() {
  const [active, setActive] = useState("signin");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="auth">
      <div className="container">
        <div className="auth-container">
          {active === "signin" && (
            <div className="auth-signin pc-4">
              <div className="auth-signin-wrapper">
                <div className="auth-signin-wrapper-header ">
                  <h2>Đăng nhập</h2>
                  <span>
                    Đăng nhập để nhận nhiều ưu đãi và cập nhật thông tin nhanh
                    nhất.
                  </span>
                </div>
                <div className="auth-signin-wrapper-body">
                  <div className="item">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="Enter your email" />
                  </div>
                  <div className="item">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="Enter your password" />
                  </div>
                  <button className="btn-signin">Đăng nhập</button>
                  <span className="link-signup">
                    Bạn chưa có tài khoản ?
                    <h4 onClick={() => setActive("signup")}> Đăng ký</h4>
                  </span>
                </div>
              </div>
            </div>
          )}

          <div className="auth-image pc-8">
            <img src={img} alt="" />
          </div>

          {active === "signup" && (
            <div className="auth-signup pc-4">
              <div className="auth-signup-wrapper">
                <div className="auth-signup-wrapper-header ">
                  <h2>Đăng ký</h2>
                  <span>
                    Đăng ký để nhận nhiều ưu đãi và cập nhật thông tin nhanh
                    nhất.
                  </span>
                </div>
                <div className="auth-signup-wrapper-body">
                  <div className="item">
                    <label htmlFor="">Họ tên</label>
                    <input type="text" placeholder="Enter your email" />
                  </div>
                  <div className="item">
                    <label htmlFor="">Số điện thoại</label>
                    <input type="text" placeholder="Enter your email" />
                  </div>
                  <div className="item">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="Enter your email" />
                  </div>
                  <div className="item">
                    <label htmlFor="">Mật khẩu</label>
                    <input type="password" placeholder="Enter your password" />
                  </div>
                  <div className="item">
                    <label htmlFor="">Nhập lại mật khẩu</label>
                    <input type="password" placeholder="Enter your password" />
                  </div>
                  <button className="btn-signup">Đăng ký</button>
                  <span className="link-signin">
                    Bạn đã có tài khoản ?
                    <h4 onClick={() => setActive("signin")}> Đăng nhập</h4>
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
