/* import React from 'react'
import KeycodeInput from 'react-keycode-input'
import 'antd/dist/antd.css'
import { message } from 'antd'

const OtpVeryfySystem = () => {

  const handleComplete = code => {
    if (code === "111111") {
      setTimeout(() => {
        setTimeout(() => {
          console.log(code)
          console.log('match')
          message.success(code)
        }, 500)
      }, 1000);
    } else {
      setTimeout(() => {
        setTimeout(() => {
          // alert('try again')
          message.error("not match", code)
        }, 500)
      }, 1000);
    }
  }

  const number = '+919511723507';

  const handleResend = () => {
    message.success('Resend');
    console.log('send otp')
  }

  return (
    <div>
      <KeycodeInput
        codeLength={6}
        initialSeconds={10}
        onlyNumber={true}
        mobile={number}
        style={{ margin: 30, }}
        onComplete={handleComplete}
        onResend={handleResend} />
    </div>
  )
}
export default OtpVeryfySystem; */

/*  */ /*  */
import { VerificationPin, } from "react-verification-pin";
import React from 'react'

const OtpVeryfySystem = () => {
  const [status, setStatus] = React.useState("process");

  const handleOnFinish = (code) => {
    setStatus("wait");
    if (code === "111111") {
      setTimeout(() => {
        setStatus("success");
        setTimeout(() => {
          window.location.replace('https://google.com')
        }, 500)
      }, 1000);
    } else {
      setTimeout(() => {
        setStatus("error");
        setTimeout(() => {
          alert('try again')
        }, 500)
      }, 1000);
    }
  };

  return (
    <div style={{ width: '100%', margin: '0 auto', height: '50px', boxSizing: '10px' }}>
      <VerificationPin
        style={{ color: 'red' }}
        type="number"
        inputsNumber={6}
        status={status}
        title="Your title here"
        subTitle="Your subtitle here"
        onFinish={handleOnFinish}
        key='key'
      />
    </div>
  );
};

export default OtpVeryfySystem;