import "./App.css";
// import Header from "./component/header/header";
// import Notification from "./component/Notification";
import TodoList from "./component/todo";
import { ThemeProviders } from "./context/themeContext";
// import Tabs from "./component/tab";

function App() {
  return (
    <>
      <ThemeProviders>
        {/* <Header /> */}
        <TodoList />
        <div style={{ marginTop: "60px" }}>
          {/* <Tabs /> */}
          {/* <Notification /> */}
        </div>
      </ThemeProviders>
    </>
  );
}

export default App;
