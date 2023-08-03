import "bootstrap/dist/css/bootstrap.min.css";
import { Footer, NavBar, Todo, Welcome } from "./components";

function App() {
  return (
    <div>
      <div className="bg-danger min-vh-100">
        <NavBar></NavBar>
        <Welcome></Welcome>
      </div>
      <Todo></Todo>
      <Footer></Footer>
    </div>
  );
}

export default App;
