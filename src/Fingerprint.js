import React from 'react';
import FingerprintJS from '@fingerprintjs/fingerprintjs'

const Fingerprint = () => {
  const [data, setData] = React.useState('')

  const fpPromise = FingerprintJS.load();
  (async () => {
    const fp = await fpPromise
    const result = await fp.get();
    
    const visitorId = result.visitorId;
    setData(visitorId)
    //console.log(visitorId);
  })();

  return (
    <>
      <div>
        Your fingerprint is {data}
      </div>
    </>
  );
};

export default Fingerprint
