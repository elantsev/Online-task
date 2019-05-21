import React from "react";
import styles from "./BankCardData.module.css"; // Import css modules stylesheet as styles
import PropTypes from "prop-types";
import { Select } from "./Select/Select";

export function BankCardData({
  className,
  bankCardData,
  handleChange,
  handleSubmit
}) {
  const months = "01,02,03,04,05,06,07,08,09,10,11,12".split(",");
  const years = "2019,2020,2021,2022".split(",");
  const {
    cardNumber1,
    cardNumber2,
    cardNumber3,
    cardNumber4,
    month,
    year,
    cardHolder,
    CVV2
  } = bankCardData;

  const isDisabled =
    cardNumber1.length < 4 ||
    cardNumber2.length < 4 ||
    cardNumber3.length < 4 ||
    cardNumber4.length < 4 ||
    !month ||
    !year ||
    cardHolder.length < 5 ||
    CVV2.length < 3;

  return (
    <section className={`${styles.section} ${className}`}>
      <h2>Данные банковской карты</h2>
      <form onSubmit={handleSubmit}>
        <div className={`${styles.front} front`}>
          <p className={styles.p}>Номер карты</p>
          <input
            name="cardNumber1"
            style={cardNumber1.length < 4 ? { border: "2px solid red" } : {}}
            className={styles.cardNumber}
            value={cardNumber1}
            onChange={handleChange}
          />
          <input
            name="cardNumber2"
            style={cardNumber2.length < 4 ? { border: "2px solid red" } : {}}
            className={styles.cardNumber}
            value={cardNumber2}
            onChange={handleChange}
          />
          <input
            name="cardNumber3"
            style={cardNumber3.length < 4 ? { border: "2px solid red" } : {}}
            className={styles.cardNumber}
            value={cardNumber3}
            onChange={handleChange}
          />
          <input
            name="cardNumber4"
            style={cardNumber4.length < 4 ? { border: "2px solid red" } : {}}
            className={styles.cardNumber}
            value={cardNumber4}
            onChange={handleChange}
          />
          <p className={styles.p}>Срок действия</p>
          <Select
            name="month"
            items={months}
            value={month}
            onChange={handleChange}
          />
          <Select
            name="year"
            items={years}
            value={year}
            onChange={handleChange}
          />
          <input
            name="cardHolder"
            style={cardHolder.length < 5 ? { border: "2px solid red" } : {}}
            className={styles.cardHolder}
            value={cardHolder}
            onChange={handleChange}
            placeholder="Держатель карты"
          />
        </div>
        <div className={`${styles.back} back`}>
          <div className={styles.line} />
          <p className={styles.pCVV2}>Код CVV2 / CVC2</p>
          <input
            name="CVV2"
            style={CVV2.length < 3 ? { border: "2px solid red" } : {}}
            className={styles.CVV2}
            value={CVV2}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className={styles.submit} disabled={isDisabled}>
          Оплатить
        </button>
      </form>
    </section>
  );
}

BankCardData.propTypes = {
  className: PropTypes.string,
  bankCardData: PropTypes.shape({
    cardNumber1: PropTypes.string.isRequired,
    cardNumber2: PropTypes.string.isRequired,
    cardNumber3: PropTypes.string.isRequired,
    cardNumber4: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    cardHolder: PropTypes.string.isRequired,
    CVV2: PropTypes.string.isRequired
  }),
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};
