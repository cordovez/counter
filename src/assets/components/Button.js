const Button = (props, { qty, setQty }) => {
  const action = props.action; // either '+' or '-'

  // "onClick" does this:
  const evaluate = () => {
    return action === "+"
      ? props.setCounter(props.counter + 1)
      : props.setCounter(props.counter - 1);
  };

  const myCounter = [
    <div>
      <div>
        <button onClick={evaluate}>
          <span>{action}</span>
        </button>
      </div>
    </div>,
  ];

  return myCounter;
};
export default Button;
// const addCounters = [...myCounter];
// if (addCounters.length < 3) {
//   myCounter.push(
//     <div>
//       <div>
//         <button onClick={evaluate}>
//           <span>{action}</span>
//         </button>
//       </div>
//     </div>
//   );
// }

// const newQty = [...qty];
// if (newQty.length < 3) {
//   newQty.push(1);
//   setQty(newQty);
// } else {
//   return;
// }
// };
