import React from "react";
import styles from "./Logo.module.css"; // Import css modules stylesheet as styles
import PropTypes from "prop-types";
export function Logo({ className }) {
  return (
    <div className={className}>
      <p className={styles.p}>
        <span className={styles.span}>CHULAKOV</span> RU
      </p>
    </div>
  );
}

Logo.propTypes = {
  className: PropTypes.string
};
