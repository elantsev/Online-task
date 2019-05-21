import React from "react";
// import styles from "./NavLinks.module.css"; // Import css modules stylesheet as styles
import PropTypes from "prop-types";

import { MyNavLink } from "./MyNavLink/MyNavLink";
export function NavLinks({ className }) {
  return (
    <nav className={className}>
      <MyNavLink to="/link1">Первая ссылка</MyNavLink>
      <MyNavLink to="/link2">Вторая ссылка</MyNavLink>
      <MyNavLink to="/link3">Третья ссылка</MyNavLink>
      <MyNavLink to="/privateCabinet">Личный кабинет</MyNavLink>
      <MyNavLink to="/goAway">Выйти</MyNavLink>
    </nav>
  );
}

MyNavLink.propTypes = {
  className: PropTypes.string
};
