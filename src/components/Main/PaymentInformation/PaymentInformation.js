import React from "react";
import styles from "./PaymentInformation.module.css"; // Import css modules stylesheet as styles
import PropTypes from "prop-types";

export function PaymentInformation({ paymentInformation, className }) {
  const { bill, payment } = paymentInformation;
  return (
    <section className={styles.section + " " + className}>
      <p className={styles.gray}>Информация по оплате: </p>
      <p className={styles.gray}>Номер счета:</p>
      <p className={styles.black}>{bill}</p>
      <p className={styles.gray}>Сумма платежа:</p>
      <p className={styles.black}>{payment} руб.</p>
    </section>
  );
}

PaymentInformation.propTypes = {
  className: PropTypes.string,
  paymentInformation: PropTypes.shape({
    bill: PropTypes.string.isRequired,
    payment: PropTypes.string.isRequired
  })
};
