import { createRoot } from 'react-dom/client'

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
export default App;