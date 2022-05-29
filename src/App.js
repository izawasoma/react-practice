import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import SignUp from "./signUp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/signUp`} element={<SignUp />} />
        <Route path={`/login`} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
