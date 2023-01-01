const {PaymentGateway} = require('@cashfreepayments/cashfree-sdk') ;

initCashfree({
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret',
  env: 'TEST'
});


module.exports.createOrder = (req, res) => {
  const { orderId, amount } = req.query;

  const orderData = {
    orderId,
    customerName: 'John Doe',
    customerPhone: '9876543210',
    customerEmail: 'john.doe@example.com',
    orderAmount: amount,
    orderCurrency: 'INR',
    returnUrl: 'https://example.com/orders/success',
    notificationUrl: 'https://example.com/orders/webhook',
  };

  try {
    const response = await createOrderCashfree(orderData);
    res.send({ success: true, paymentLink: response.paymentLink });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
}