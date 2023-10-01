import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import HomeBody from "./routes/Home/HomeBody";
import Profile from "./routes/Home/HomeBody/Profile";
import Home from "./routes/Home";
import Projects from "./routes/Home/HomeBody/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/home/" />}/>
        <Route path="/home/" element={<Home />}>
          <Route index element={<HomeBody />} />
          <Route path="profile" element={<Profile />} />
          <Route path="projects" element={<Projects />} />
        </Route>
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
