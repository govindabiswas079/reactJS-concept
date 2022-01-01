import React from 'react';
import parsePhoneNumber from 'libphonenumber-js';

const Libphonenumber = () => {

    const phoneNumber = parsePhoneNumber('+2639511723507');

    const obj = phoneNumber.metadata.countries
    const mapped = Object.keys(obj).map(key => ({ type: key, value: obj[key] }));
    console.log(mapped)

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Type</th>
                        <th scope="col">Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{phoneNumber.countryCallingCode}</th>
                        <th>{phoneNumber.nationalNumber}</th>
                        <th>{phoneNumber.number}</th>
                        <th>{phoneNumber.country}</th>
                    </tr>
                    {mapped.map((data, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{data.type}</td>
                            <td>{data.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Libphonenumber;