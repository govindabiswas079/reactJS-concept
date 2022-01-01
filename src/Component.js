import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const Component = ({ Name }) => {
   const [count, setCount] = useState(0);
   console.log(count);

   const increment = () => {
      setCount(count + 1);
   };

   function clickAlert() {
      alert("I am working");
   };

   return (
      <div>
         <ChildComponent title={"Main Props1"} subTitle={"React.js"} authorName={Name} />
         <ChildComponent title={"Main Props2"} subTitle={"React.js"} authorName={Name} />
         <ChildComponent title={"Main Props3"} subTitle={"React.js"} authorName={Name} />
         <ChildComponent title={"Main Props4"} subTitle={"React.js"} authorName={Name} />
         <ChildComponent title={"Main Props5"} subTitle={"React.js"} authorName={Name} />
         <ChildComponent title={"Main Props6"} subTitle={"React.js"} authorName={Name} />
         <ChildComponent title={"Main Props7"} subTitle={"React.js"} authorName={Name} />
         <ChildComponent title={"Main Props8"} subTitle={"React.js"} authorName={Name} />
         <div>
            <div className="App">
               <ChildComponent data="Click here" onChildClick={clickAlert} />
            </div>
            <div className="App">
               <ChildComponent datatext="Click" onChild={increment} />
            </div>
         </div>
      </div>
   );
};

export default Component;