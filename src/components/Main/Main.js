import React from "react";
import { PaymentInformation } from "./PaymentInformation/PaymentInformation";
import { BankCardData } from "./BankCardData/BankCardData";
export function Main({
  className,
  paymentInformation,
  bankCardData,
  handleChange,
  handleSubmit
}) {
  return (
    <main className={className}>
      <PaymentInformation paymentInformation={paymentInformation} />
      <BankCardData
        bankCardData={bankCardData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </main>
  );
}
