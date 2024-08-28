import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Register from "./app/register/register";
import Login from "./app/login/login";

function App() {
  return (
    <div className="h-screen">
      <Router>
        <Routes>
          <Route index element={<Register />} />
          <Route element={<Login />} path="login" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
