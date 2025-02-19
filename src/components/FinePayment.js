import React from 'react';

function FinePayment({ amount, onSuccess }) {
  const handlePayment = () => {
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY,
      amount: amount * 100, // Convert to paise
      currency: "INR",
      name: "COP Friendly",
      description: "Fine Payment",
      handler: function (response) {
        onSuccess(response);
      },
      prefill: {
        name: "John Doe",
        email: "john@example.com",
        contact: "9876543210"
      },
      theme: {
        color: "#6719b4"
      }
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div className="fine-payment">
      <h2>Pay Fine</h2>
      <p>Amount: ₹{amount}</p>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
}

export default FinePayment; 