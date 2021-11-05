import "./App.css";
import { useState } from "react";
import Button from "./assets/components/Button";
import Reset from "./assets/components/Reset";
import Footer from "./Footer";
import Add from "./assets/components/Add";

function App() {
  // deconstructing 'useState()' to it's default components:
  const [counter, setCounter] = useState(0);
  const [qty, setQty] = useState([1]);

  return (
    <div className="container">
      {/* ADD COUNTER */}
      <div>
        <Add qty={qty} setQty={setQty} />
      </div>

      <div className="counter">
        <div id={counter === 0 ? "hidden" : "visible"} class="shift">
          <Button counter={counter} setCounter={setCounter} action="-" />
        </div>

        <div className="value">
          <span>{counter}</span>
        </div>

        <div id={counter >= 10 ? "hidden" : "visible"} class="shift">
          <Button counter={counter} setCounter={setCounter} action="+" />
        </div>
      </div>

      <div>
        <Reset counter={counter} setCounter={setCounter} action="0" />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
