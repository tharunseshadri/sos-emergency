const loadRazorpay = () => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

const initializeRazorpayPayment = (options) => {
  return new Promise((resolve, reject) => {
    try {
      const paymentObject = new window.Razorpay(options);
      paymentObject.on('payment.failed', function (response) {
        reject(response.error);
      });
      resolve(paymentObject);
    } catch (err) {
      reject(err);
    }
  });
};

export { loadRazorpay, initializeRazorpayPayment }; 