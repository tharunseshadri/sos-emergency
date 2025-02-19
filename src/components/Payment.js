import React, { useState } from 'react';
import './Payment.css';

function Payment() {
  const [amount, setAmount] = useState(100); // Default amount in INR

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpay();

    if (!res) {
      alert('Razorpay SDK failed to load. Please check your internet connection.');
      return;
    }

    // Create order on your backend
    const orderData = {
      amount: amount * 100, // Razorpay expects amount in paise
      currency: 'INR',
    };

    try {
      const response = await fetch('YOUR_BACKEND_API/create-order', {
        method: 'POST',
        body: JSON.stringify(orderData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const order = await response.json();

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Your Razorpay Key ID
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'SOS Emergency',
        description: 'Emergency Service Payment',
        order_id: order.id,
        handler: function (response) {
          // Handle success
          console.log('Payment Success:', response);
          alert('Payment Successful!');
        },
        prefill: {
          name: 'User Name',
          email: 'user@example.com',
          contact: 'user_contact_number',
        },
        notes: {
          address: 'User Address'
        },
        theme: {
          color: '#ff3366'
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();

    } catch (err) {
      console.error('Error:', err);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="payment-container">
      <div className="payment-card">
        <h2>Emergency Service Payment</h2>
        
        <div className="amount-section">
          <label>Amount (INR)</label>
          <div className="amount-input">
            <span className="currency">₹</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="1"
            />
          </div>
        </div>

        <div className="payment-details">
          <div className="detail-row">
            <span>Service Fee</span>
            <span>₹{amount}</span>
          </div>
          <div className="detail-row total">
            <span>Total Amount</span>
            <span>₹{amount}</span>
          </div>
        </div>

        <button className="pay-button" onClick={handlePayment}>
          <span className="button-text">Pay Now</span>
          <span className="button-amount">₹{amount}</span>
        </button>

        <div className="secure-badge">
          <span className="secure-icon">🔒</span>
          <span>Secure Payment by Razorpay</span>
        </div>
      </div>
    </div>
  );
}

export default Payment; 