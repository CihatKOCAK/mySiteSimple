import React from 'react';
import './header.scss';
import { Link, useNavigate } from 'react-router-dom';

function Header({ theme, setTheme, isHappy, setIsHappy }) {

  const changeTheme = () => {
    setTheme(theme === "dark" ? "white" : "dark");
  }
  const history = useNavigate();

  const goIndex = () => {
    history('/');
    console.log('goIndex');
  }
  return (
    <div className="wrapper" theme={theme}>
      {
        window.location.pathname !== '/' ? (<div className="logo">
          <Link to="/" replace >
            <i className="fas fa-long-arrow-alt-left">
              &nbsp; Back to do home
            </i>
          </Link>
        </div>) : (<div></div>)
      }
      <div theme={theme} style={{ display: 'flex' }}>
        <article theme={theme}>
          <h2>{theme === "dark" ? "Too dark?" : "Too bright?"}</h2>
          <button className={theme === "dark" ? "toggle clicked" : "toggle"} onClick={() => changeTheme()} />
        </article>
        <div className={theme === "dark" ? "circle clicked" : "circle"}></div>
      </div>
    </div>)
}

export default Header;
