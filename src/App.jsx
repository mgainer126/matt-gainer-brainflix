import "./App.scss";
import Home from "./page/Home/Home";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Upload from "./page/Upload/Upload";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/upload-page" component={Upload} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
