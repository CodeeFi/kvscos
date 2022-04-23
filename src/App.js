import React from "react";
import { Navigate, Routes, Route, BrowserRouter } from "react-router-dom";
import Admin from "./Admin/Admin";
import User from "./Users/User";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/admin/*" element={<Admin />}></Route>
          <Route exact path="/" element={<Navigate to="/home" replace />}></Route>
          <Route path="/home/*" element={<User />}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
