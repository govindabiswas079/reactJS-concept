import React from 'react';
import { usePaymentInputs } from 'react-payment-inputs';
import MaskedInput from 'react-text-mask'


function PaymentInputs() {
  const [cardNumber, setCardNumber] = React.useState(false);
  const [expiryDate, setExpiryDate] = React.useState(false);
  const [cvc, setCvc] = React.useState(false);
  const [maskedInputNumber, setMaskedInputNumber] = React.useState('');
  const [newmaskedInputNumber, setNewMaskedInputNumber] = React.useState('');

  // const newmask = maskedInputNumber.replace(/ /g, "");
  // console.log(newmask);

  // const newmastinput = newmaskedInputNumber.replace(/[()/\ \s-]+/g, ''); // eslint-disable-next-line
  // const newmastinput = newmaskedInputNumber.replace(/[()/ \s-]+/g, ''); // eslint-disable-next-line
  // console.log(newmastinput);

  const [data, setData] = React.useState({
    cardNumber: '',
    expiryDate: '',
    cvc: '',

    isValidCardNumber: true,
    isValidDate: true,
    isValidCvc: true
  });
  // console.log(data.cardNumber.replace(/ /g, ""));

  const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } = usePaymentInputs();

  const handleChangeCardNumber = (e) => {
    if (e.target.value.trim().length >= 19) {
      setData({
        ...data,
        cardNumber: e.target.value,
        isValidCardNumber: true
      });
    } else {
      setData({
        ...data,
        cardNumber: e.target.value,
        isValidCardNumber: false
      });
      setCardNumber(false)
    };
  };

  const handleChangeExpiryDate = (e) => {
    if (e.target.value.trim().length >= 7) {
      setData({
        ...data,
        expiryDate: e.target.value,
        isValidDate: true
      });
    } else {
      setData({
        ...data,
        expiryDate: e.target.value,
        isValidDate: false
      });
      setExpiryDate(false)
    };
  };

  const handleChangeCVC = (e) => {
    if (e.target.value.trim().length >= 3) {
      setData({
        ...data,
        cvc: e.target.value,
        isValidCvc: true
      });
    } else {
      setData({
        ...data,
        cvc: e.target.value,
        isValidCvc: false
      });
      setCvc(false)
    };
  };


  const carddata = JSON.stringify({
    cardNumber: data.cardNumber.replace(/ /g, ""),
    expiryDate: data.expiryDate.replace(/ /g, ""),
    cvc: data.cvc,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    validatee();
    if (validation === '') {

      console.log("carddata", carddata);

    } else {
      return null
    }
  };

  const checkStringNullEmpty = (str) => {
    if (str != null && str !== '') {
      return false;
    } else {
      return true;
    };
  };

  var validation = '';
  const validatee = () => {
    if (checkStringNullEmpty(data.cardNumber)) {
      validation += '<li>Enter Your CVC Number</li>';
      setCardNumber(true)
    }
    if (checkStringNullEmpty(data.expiryDate)) {
      validation += '<li>Enter Your CVC Number</li>';
      setExpiryDate(true)
    }
    if (checkStringNullEmpty(data.cvc)) {
      validation += '<li>Enter Your CVC Number</li>';
      setCvc(true)
    }
    if (validation !== '') {
      return null;
    }
    else {

    };
  };

  return (
    <div>
      <form style={{ margin: '15px' }} className="was-validated" onSubmit={handleSubmit}>
        <div className="form-floating is-valid mb-3">
          <input className="form-control" {...getCardNumberProps({ onChange: (e) => handleChangeCardNumber(e) })} value={data.cardNumber} />
          <label>Card Number</label>
          {meta.isTouched && meta.error && <span style={{ color: 'red' }}>{meta.error}</span>}
          {data.isValidCardNumber ? null : <p style={{ color: 'red' }}>Card Number must be 19 characters long.</p>}
          {cardNumber ? <p style={{ color: 'red' }}>Card Number is Required</p> : null}
        </div>

        <div className="form-floating is-valid mb-3">
          <input className="form-control" {...getExpiryDateProps({ onChange: (e) => handleChangeExpiryDate(e) })} value={data.expiryDate} />
          <label>Valid up to</label>
          {data.isValidDate ? null : <p style={{ color: 'red' }}>Enter Valid Date</p>}
          {expiryDate ? <p style={{ color: 'red' }}>Expiry date is Required</p> : null}
        </div>

        <div className="form-floating is-valid mb-3">
          <input className="form-control" {...getCVCProps({ onChange: (e) => handleChangeCVC(e) })} value={data.cvc} />
          <label>Cvv number</label>
          {data.isValidCvc ? null : <p style={{ color: 'red' }}>Enter Valid cvc Number</p>}
          {cvc ? <p style={{ color: 'red' }}>cvc number is Required</p> : null}
        </div>

        <button type="submit" className="btn btn btn-primary btn-lg w-100 mb-4 shadow">Test...</button>
      </form>
      <br />
      <h6>Input Mast</h6>
      <div className="form-floating is-valid mb-3">
        <MaskedInput
          mask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/,]}
          className="form-control"
          placeholder="Enter a phone number"
          onChange={(e) => setMaskedInputNumber(e.target.value)}
          value={maskedInputNumber}
        />
        <label>Cvv number</label>
      </div>

      <MaskedInput
        mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
        className="form-control"
        placeholder="Enter a phone number"
        onChange={(e) => setNewMaskedInputNumber(e.target.value)}
        value={newmaskedInputNumber}
      />
    </div>

  );
};

export default PaymentInputs;