import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MyNavLink.module.css"; // Import css modules stylesheet as styles
import PropTypes from "prop-types";

export function MyNavLink({ to, children, className }) {
  return (
    <NavLink className={`${styles.MyNavLink} ${className}`} to={to}>
      {children}
    </NavLink>
  );
}

MyNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
