import React from 'react';
import { usePaymentCard } from "react-payment-card-hook";

const CardInput = () => {
  const { onFocus, onChange, onBlur, fieldsData } = usePaymentCard();
  // const number = fieldsData.cardNumberValue.replace(/ /g, "");
  // console.log(number);
  // console.log(fieldsData.expireValue);
  // console.log(fieldsData.secureCodeValue);

  const cardObj = JSON.stringify({
    cardNumberValue: fieldsData.cardNumberValue.replace(/ /g, ""),
    expireValue: fieldsData.expireValue,
    secureCodeValue: fieldsData.secureCodeValue
  })
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(cardObj)
  }

  return (
    <>
      <form style={{ margin: '15px' }} className="was-validated" onSubmit={handleSubmit}>
        <div className="form-floating is-valid mb-3">
          <input className="form-control" name='cardNumber' type="text" onFocus={onFocus} onChange={onChange} onBlur={onBlur} value={fieldsData.cardNumberHideValue || fieldsData.cardNumberValue || ''} />
          <label className="form-control-label">
            Card number
          </label>
          <p style={{ color: 'blue' }}>{fieldsData.cardType}</p>
        </div>

        <div className="form-floating is-valid mb-3">
          <input className="form-control" name='expire' type="text" onFocus={onFocus} onChange={onChange} onBlur={onBlur} value={fieldsData.expireValue || ''} />
          <label className="form-control-label">
            Expire date
          </label>
        </div>

        <div className="form-floating is-valid mb-3">
          <input className="form-control" name='secureCode' type="text" onFocus={onFocus} onChange={onChange} onBlur={onBlur} value={fieldsData.secureCodeHideValue || fieldsData.secureCodeValue || ''} />
          <label className="form-control-label">
            Secure code
          </label>
        </div>
        <button type="submit" className="btn btn-lg btn-default w-100 mb-4 shadow">Test...</button>
      </form>
    </>
  )
}

export default CardInput;