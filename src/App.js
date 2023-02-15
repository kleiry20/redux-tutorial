import "./App.css";
import User from "./User";
import Home from "./components/Home";
import HomeContainer from "./containers/HomeContainer";

function App() {
  return (
    <div className="App">
      <h1> App Component</h1>
      {/* <User data={{ name: "iron man", id: 12 }} /> */}
      {/* <Home /> */}
      <HomeContainer />
    </div>
  );
}

export default App;
