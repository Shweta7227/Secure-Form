import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";
import "./App.css";
import Users from "./Users";
import Update from "./Update";
import View from "./View";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/users" element={<Users />} />
        <Route path="/update" element={<Update />} />
        <Route path="/view" element={<View />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
