function Car(props) {
  return (
    <h2>I am a {props.color} Car!</h2>
  );
}

function App() {
  return (
    <div>
      <h1>React JSX Attributes</h1>
      <Car color="yellow" />
    </div>
  );
}

export default App;