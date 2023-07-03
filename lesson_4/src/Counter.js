import { useState } from "react";

const Counter = () => {
  // const [count, setCount] = useState(0)

  // const handleClick = (value) => {
  //     setCount(count+value)
  // }

  const [person, setPerson] = useState({
    name: "Trang Van",
    age: 30,
  });

 const handleAge = (value) => {
    setPerson({...person, age: person.age +value})
 }

  return (
    <div className="counter">
      {/* <div>Quantity: </div>
      <div>{count}</div>
      <button onClick={() => handleClick(-1)}>-</button>
      <button onClick={() => handleClick(+1)}>+</button> */}

      <div>
        {person.name} is {person.age} years old
      </div>
      <button onClick={() => handleAge(-1)}>-</button>
      <button onClick={() => handleAge(+1)}>+</button>
    </div>
  );
};

export default Counter;
