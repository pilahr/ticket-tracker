import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Search from "./components/Search/Search";
import team from "../src/assets/data/team.js";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Search />
      <Main />
    </div>
  );
};

export default App;
