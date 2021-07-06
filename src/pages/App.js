import './../css/App.css';
import Login from './Login';
import Sheet from './Sheet';
import { Route, BrowserRouter } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Route exact path="/"component={Login}/>
      <Route exact path="/home"component={Sheet}/>
    </div>
    </BrowserRouter>

  );
}
