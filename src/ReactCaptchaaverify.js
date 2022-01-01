import React from 'react';
import ReactCaptchaa from 'react-captchaa'
import 'react-captchaa/dist/index.css'
import 'antd/dist/antd.css'
import { message } from 'antd'

const ReactCaptchaaverify = () => {
  const [captchaa, setCaptchaa] = React.useState('')
  // console.log(captchaa)

  const handleComplete = () => {
    const captchaatext = sessionStorage.getItem('captchaText')
    // var currentcaptchaa = '' + captchaatext;
    if (captchaa === captchaatext) {
      setTimeout(() => {
        setTimeout(() => {
          console.log(captchaa)
          console.log('match')
          message.success(captchaa)
        }, 500)
      }, 1000);
    } else {
      setTimeout(() => {
        setTimeout(() => {
          // alert('try again')
          console.log('not match')
          message.error("not match", captchaa)
        }, 500)
      }, 1000);
    }
  }

  return (
    <div style={{ width: '100%', margin: '0 auto', height: '50px', boxSizing: '10px' }}>
      <ReactCaptchaa
        captchaText={(captchaText) => {
          // console.log(captchaText)
          sessionStorage.setItem("captchaText", captchaText)
          // captcha text ${captcha}
        }}
        // captchaLength={6}
        // captchaButtonClick={(e) => { console.log(e) }}
        // onCanvasClick={(e) => { console.log(e) }}
        // height={50}
        // width={170}
        // iconName={'FiRefreshCw'}
        // iconColor={'#fff'}
        // fontSize={'30px'}
        // iconSize={'30px'}
        // containerClassName={'react-captcha'}
        // iconWrapperClassName={'react-captcha-icon-wrapper'}
        // canvasClassName={'react-captcha-canvas'}
        // iconClassName={'react-captcha-icon'}
        charactersInclude={"0123456789abcdefghijklmnopqrstuvwxzABCDEFGHIJKLMNOPQRSTUVWXYZ"}
      />
      <br />
      <input type="text" placeholder="enter captchaa" value={captchaa} onChange={e => setCaptchaa(e.target.value)} />
      <input type="submit" value="submit" onClick={e => handleComplete(e)} />
    </div>
  )
}

export default ReactCaptchaaverify;
