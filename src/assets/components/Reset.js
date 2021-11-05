const Reset = (props) => {
  const action = props.action;
  const evaluate = () => {
    return action === "0"
      ? props.setCounter(props.counter * 0)
      : props.setCounter(props.counter);
  };
  return (
    <button onClick={evaluate} className="reset shift">
      <span>Reset</span>
    </button>
  );
};

export default Reset;
