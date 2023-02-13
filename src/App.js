import {BrowserRouter, Routes, Route} from "react-router-dom"
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Menu from "./Pages/Menu";
import Transaksi from "./Pages/Transaksi";
import User from "./Pages/User";
import Meja from "./Pages/Meja";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/transaksi" element={<Transaksi />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/meja" element={<Meja />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;