import Data from "./components/Data";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./app.css";

function App() {
  return (
      <div className="main">
        <Header/>
        <div className="app">
          <Sidebar/>
          <Data/>
        </div>
      </div>
  );
}

export default App;
