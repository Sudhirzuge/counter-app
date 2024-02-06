import "./App.css";
import { BrowserRouter, Routes, Route, Link, Form } from "react-router-dom";
import Counter from "./component/counter/Counter";
import PropsParent from "./component/props/PropsParent";

import MyForm from "./component/forms/MyForm";
import PropsChild from "./component/props/PropsChild";
function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter App</Link>
          </li>
          <li>
            <Link to="/form">React Forms app</Link>
          </li>
          <li>
            <Link to="/propsparent">Props from parent to child</Link>
          </li>
          <li>
            <Link to="/propschild">Props from child to parent</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/counter" Component={Counter} />
          <Route path="/form" Component={MyForm} />
          <Route path="/propsparent" Component={PropsParent} />
          <Route path="/propschild" Component={PropsChild} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
