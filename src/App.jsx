import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import Otp from "./pages/auth/otp/Otp";
import Home from "./pages/home/Home";
import MainComponent from "./components/mainComponent/MainComponent";

function App() {
  return (
    <Routes>
      <Route element={<MainComponent />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/otp" element={<Otp />} />
    </Routes>
  );
}

export default App;
