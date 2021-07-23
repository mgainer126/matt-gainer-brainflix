import "./App.scss";
import Home from "./page/Home/Home";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Upload from "./page/Upload/Upload";
import Header from "./components/Header/Header";
import VideoDetails from "./page/VideoDetails/VideoDetails";
function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Header} />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/" component={VideoDetails} /> */}
        <Route exact path="/upload-video" component={Upload} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
