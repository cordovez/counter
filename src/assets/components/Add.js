const Add = ({ qty, setQty }) => {
  // "onClick" does this:
  const evaluate = () => {
    const newQty = [...qty];
    if (newQty.length < 3) {
      newQty.push(1);
      setQty(newQty);
    } else {
      return;
    }
  };

  return (
    <button
      className="add shift"
      onClick={evaluate}
      id={qty.length === 3 ? "hide" : "display"}
    >
      <span>Add Counter</span>
    </button>
  );
};

export default Add;
