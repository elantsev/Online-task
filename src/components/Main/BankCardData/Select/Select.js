import React from "react";
import styles from "./Select.module.css"; // Import css modules stylesheet as styles
import PropTypes from "prop-types";

export function Select({ name, items, className, value, onChange }) {
  return (
    <select
      name={name}
      className={styles.select + " " + className}
      value={value}
      onChange={onChange}
    >
      {items.map((item, index) => (
        <option key={index} className={styles.option}>
          {item}
        </option>
      ))}
    </select>
  );
}

Select.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  items: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
