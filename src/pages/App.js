import './../css/App.css';
import Login from './Login';
import Sheet from './Sheet';
import { Route, BrowserRouter } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path="/xep/"component={Login}/>
      <Route exact path="/xep/home"component={Sheet}/>
    </div>
    </BrowserRouter>

  );
}
