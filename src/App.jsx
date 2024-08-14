import "./App.css";
import Counter from "./Counter";
import Participant from "./Participant";
import Posts from "./Posts";
import Users from "./Users";

function App() {
  function handleButton1Click() {
    alert("Button 1 is Clicked");
  }
  const handleButton2Click = () => {
    alert("Button 2 is Clicked");
  };

  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h3>Explore React Core Concepts 2</h3>
      <Users></Users>
      <Posts></Posts>
      <Participant></Participant>
      <div style={{ border: "2px solid yellow" }}>
        <Counter></Counter>
      </div>
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleButton1Click}>Button 1</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={handleButton2Click}>Button 2</button>
        &nbsp;&nbsp;&nbsp;
        <button
          onClick={function () {
            alert("Button 3 is Clicked");
          }}
        >
          Button 3
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          onClick={() => {
            alert("Button 4 is Clicked");
          }}
        >
          Button 4
        </button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={() => addToFive(3)}>Button 5</button>
      </div>
    </>
  );
}

export default App;
