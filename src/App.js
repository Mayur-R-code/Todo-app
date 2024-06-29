import "./App.css";
// import Notification from "./component/Notification";
import TodoList from "./component/todo";
// import Tabs from "./component/tab";

function App() {
  return (
    <>
      <TodoList />
      <div style={{ marginTop: "60px" }}>
        {/* <Tabs /> */}
        {/* <Notification /> */}
      </div>
    </>
  );
}

export default App;
