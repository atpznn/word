import "./App.css";
import FunctionApp from "./pages/function";
import OOPApp from "./pages/oop";
function App() {
  return (
    <div style={{ display: "flex", gap: "100px" }}>
      <FunctionApp />
      <OOPApp />
    </div>
  );
}

export default App;
