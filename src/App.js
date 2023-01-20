import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Book from "./container/Book";
import UseStateExample from "./container/UseStateExample";
import CallBackBasic from "./container/CallBackBasic";
import UseEffectExample from "./container/UseEffectExample";
import FirstExample from "./component/FirstExample";
import Parent from "./pureComponent/Parent";
import Timer from "./component/Timer";
import LoginPage from "./component/LoginComponent";
import HomePage from "./component/HomePage";

import ProctectdRoute from "./ProctectdRoute";
import UseAuth from "./UseAuth";
import Home from "./Memo/Home";
import First from "./UseMemo/First";
import Counter from "./component/Counter";
import EmployeeForm from "./UserData/EmployeeForm";
// import ButtonNameDisplay from "./container/ButtonNameDisplay"
import Dropdown from "./TestingComponents/Dropdown";
import FormData from "./TestingComponents/FormData";
import UserCard from "./TestingComponents/UserCard";
import LoginTest from "./TestingComponents/LoginTest";
function App() {
  const [isAuth, logIn, logOut] = UseAuth(false);
  return (
    <BrowserRouter>
      {/* <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/usercard">Cards</Link>
      </li>
      <li>
        <Link to="/book">Books</Link>
      </li>
      {isAuth ? (
        <>
          <button onClick={logOut}>Logout</button>
          <h1>You are logged in</h1>
        </>
      ) : (
        <>
          <button onClick={logIn}>Login</button>
          <h1>You are logged out</h1>
        </>
      )} */}
      <Switch>
        <Route path="/callbackbasic" component={CallBackBasic} exact />
        <Route path="/useStateExample" component={UseStateExample} exact />
        <Route path="/useeffectexample" component={UseEffectExample} exact />
        <Route path="/firstexample" component={FirstExample} exact />
        <Route path="/timer" component={Timer} exact />
        <Route path="/parent" component={Parent} exact />
        <Route path="/loginpage" component={LoginPage} exact />
        <Route path="/usercard" component={UserCard} exact />
        <Route path="/home" component={Home} exact />
        <Route path="/first" component={First} exact />
        <Route path="/form-data" component={FormData} exact />
        <Route path="/counter" component={Counter} exact />
        <Route path="/empfor" component={EmployeeForm} />
        <Route path="/dropdown" component={Dropdown} />
        <Route path="/login-test" component={LoginTest} />
        {/* <Route path="/book" component={Book} exact /> */}
        <ProctectdRoute path="/book" component={First} auth={isAuth} />
        <Route path="/" component={HomePage} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
