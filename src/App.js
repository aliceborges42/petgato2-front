import logo from './logo.svg';
import './App.css';
import Cadastro from './Cadastro';
import Login from './Login';
import TipoAnimal from './TipoAnimal';
import Home from './Home';
import Dashboard from './DashBoard';
import routes from "./routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const { home, register, login, dashboard, animal, tipo_animal } = routes;

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path={home}>
              <Home />
            </Route>
            <Route exact path={dashboard}>
              <Dashboard />
            </Route>
            <Route path={register}>
              <Cadastro />
            </Route>
            <Route path={login}>
              <Login />
            </Route>
            <Route path={tipo_animal}>
              <TipoAnimal />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
