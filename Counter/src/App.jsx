import "./App.css";

function App() {
  let counter = 15;

  //? The Problem in this block is that, The changes are not coming in UI. And this is exactly where state comes into picture.
  const addValue = () => {
    counter += 1;
    console.log(counter);
  };
  return (
    <>
      <h1> Learn Basic Concepts of React With Sandeepan! {counter}</h1>
      <h1> Counter value : {counter} </h1>
      <button onClick={addValue}> Add Value </button>
      {"  "}
      <button> Remove Value Value </button>
      <p> Footer : {counter} </p>
    </>
  );
}

export default App;
