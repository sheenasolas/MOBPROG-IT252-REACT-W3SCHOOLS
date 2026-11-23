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
      <h1>React JSX Expressions</h1>
      <CarExpression/>
    </div>
  );
}

export default App;