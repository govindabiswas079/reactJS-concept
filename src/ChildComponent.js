import React from 'react'

const ChildComponent = ({ title, subTitle, authorName, data, onChildClick, datatext, onChild}) => {
   return (
      <>
         <div>
            <h4>{title}</h4>
            <h5>{subTitle}</h5>
            <h6>{authorName}</h6>
         </div>
         <div className="child">
            <button onClick={onChildClick}>{data}</button>
         </div>
         <div className="child">
            <button onClick={onChild}>{datatext}</button>
         </div>
      </>
   );
};

export default ChildComponent;