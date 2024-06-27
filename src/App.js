import "./App.css";
import TodoList from "./component/todo";
import Tabs from "./component/tab";

function App() {
  return (
    <>
      <TodoList />
      <div style={{ marginTop: "60px" }}>
        {/* <Tabs /> */}
      </div>
    </>
  );
}

export default App;
