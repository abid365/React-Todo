import "bootstrap/dist/css/bootstrap.min.css";
import { Bye, Footer, NavBar, Todo, Welcome } from "./components";

function App() {
  return (
    <div>
      <div className="bg-danger">
        <NavBar></NavBar>
        <Welcome></Welcome>
      </div>
      <Todo></Todo>
      <Bye></Bye>
      <Footer></Footer>
    </div>
  );
}

export default App;
