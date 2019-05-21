import React from "react";
import styles from "./Header.module.css"; // Import css modules stylesheet as styles
import PropTypes from "prop-types";
export function Header({ className }) {
  return (
    <header className={styles.header + " " + className}>
      <h1>Заголовок страницы</h1>
      <p>
        В отличие от пылевого и ионного хвостов, направление поступает в
        лимногляциальный часовой угол
      </p>
    </header>
  );
}
Header.propTypes = {
  className: PropTypes.string
};
