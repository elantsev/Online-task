import React, { useState } from "react";
import "./App.css";
import { Logo } from "./components/logo/Logo";
import { NavLinks } from "./components/NavLinks/NavLinks";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Main } from "./components/Main/Main";

function App() {
  const [paymentInformation] = useState({
    bill: "87123658716587",
    payment: "100"
  });
  const initialBankCardData = {
    cardNumber1: "",
    cardNumber2: "",
    cardNumber3: "",
    cardNumber4: "",
    month: "01",
    year: "2020",
    cardHolder: "",
    CVV2: ""
  };
  const [bankCardData, setBankCardData] = useState(initialBankCardData);

  const handleChange = ({ target: { name, value } }) => {
    if (
      name === "cardNumber1" ||
      name === "cardNumber2" ||
      name === "cardNumber3" ||
      name === "cardNumber4"
    ) {
      if (value.length > 4 || isNaN(value)) return;
      value = value.trim();
    }

    if (name === "CVV2") {
      if (value.length > 3 || isNaN(value)) return;
      value = value.trim();
    }

    if (name === "cardHolder") {
      if (value && (!/^[A-Za-z \s]+$/.test(value) || value.length > 30)) return;
      value = value.toUpperCase();
    }

    setBankCardData({ ...bankCardData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { bill, payment } = paymentInformation;
    const {
      cardNumber1,
      cardNumber2,
      cardNumber3,
      cardNumber4,
      ...dataForServer
    } = bankCardData;

    dataForServer.cardNumber = `${cardNumber1}-${cardNumber2}-${cardNumber3}-${cardNumber4}`;
    dataForServer.bill = bill;
    dataForServer.payment = payment;
    console.log(dataForServer);
    alert("данные отправлены в console.log");
    setBankCardData(initialBankCardData);
  };

  return (
    <>
      <Logo className="logo" />
      <NavLinks className="NavLinks" />
      <Header className="Header" />
      <Main
        className="Main"
        paymentInformation={paymentInformation}
        bankCardData={bankCardData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Footer className="Footer" />
    </>
  );
}

export default App;
