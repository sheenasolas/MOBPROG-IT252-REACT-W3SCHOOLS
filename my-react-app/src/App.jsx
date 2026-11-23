import { createRoot } from 'react-dom/client'

// Introduction
function Car() {
  const brand = "Ford";
  const model = "Mustang";

  return (
    <>
      <h2>My Car</h2>
      <p>It is a {brand} {model}.</p>
      <p>React JSX Intro</p>
    </>
  );
}

// Expressions
function CarExpression() {
  const myobj = {
    name: "Fiat",
    model: "500",
    color: "white"
  };
  return (
    <>
      <h1>My car is a {myobj.color} {myobj.name} {myobj.model}</h1>
    </>
  );
}

// Main App
function App() {
  return (
    <div>
      <h1>React JSX Introduction</h1>
      <Car />

    </hr> 

    <div>
      <h1>React JSX Expressions</h1>
      <CarExpression/>
    </div>
  );
}

export default App;