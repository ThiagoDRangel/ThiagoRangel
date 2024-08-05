import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import HomeBody from "./pages/Home/HomeBody";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Frontend from "./pages/Frontend";
import Backend from "./pages/Backend";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/home" />}/>
        <Route path="/home" element={<Home />}>
          <Route index element={<HomeBody />} />
          <Route path="profile" element={<Profile />} />
          <Route path="frontend" element={<Frontend />} />
          <Route path="backend" element={<Backend />} />
        </Route>
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
