import "./App.scss";
import Home from "./page/Home/Home";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Upload from "./page/Upload/Upload";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Header} />
      <Switch>
        <Route exact path="/upload-video" component={Upload} />
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
