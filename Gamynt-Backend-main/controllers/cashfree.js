const axios = require('axios');
const fetch = require('node-fetch');
module.exports.createOrder = (req,res) => {
  const {amount,username,phone,email,details} = req.query
  const url = 'https://sandbox.cashfree.com/pg/links';
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'x-client-id': '26466457b8e8a161baee0e81db466462 ',
      'x-client-secret': '6a61a0bd376927fac9ed405725c07d03362bb35f',
      'x-api-version': '2022-09-01',
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      link_amount: amount,
      link_currency: 'INR',
      link_id: `${Math.floor(Math.random()*100000)}`,
      customer_details: {
        customer_name: username,
        customer_phone: phone.toString(),
        customer_email: email
      },
      link_purpose: details,
      link_notify: {send_sms: false, send_email: true},
    })
  };
  
  
  fetch(url, options)
  .then(res => res.json())
  .then((e)=>{
    res.send(e)
  })
  .catch(err => console.error('error:' + err));
}


module.exports.getOrder = (req,res) =>{
  const {orderID} = req.query
  const url = `https://sandbox.cashfree.com/pg/links/${orderID}`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'x-client-id': '26466457b8e8a161baee0e81db466462',
    'x-client-secret': '6a61a0bd376927fac9ed405725c07d03362bb35f',
    'x-api-version': '2022-09-01'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => res.send(json))
  .catch(err => console.error('error:' + err));
}