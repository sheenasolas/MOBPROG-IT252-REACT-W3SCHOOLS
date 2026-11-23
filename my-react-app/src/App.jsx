function Car() {
  const mystyles = {
    color: "pink",
    fontSize: "20px",
    backgroundColor: "lightyellow",
  };

  return (
    <>
      <h1 style={mystyles}>My car</h1>
    </>
  );
}

function App() {
  return (
    <div>
      <h1>React JSX Attributes</h1>
      <Car />
    </div>
  );
}

export default App;