import "bootstrap/dist/css/bootstrap.min.css";
import { Footer, Header, Todo, Welcome } from "./components";

function App() {
  return (
    <>
      <div>
        <Header></Header>
        <Welcome></Welcome>
      </div>
      <Todo></Todo>
      <Footer></Footer>
    </>
  );
}

export default App;
