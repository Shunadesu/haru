import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import path from "./ulities/path";

import {
  Home,
  Login,
  ForgotPassword,
  Menu,
  Address,
  Blogs,
  Review,
  Fail,
} from "./pages/Public";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={path.HOME} element={<Home />} />
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.FORGOTPASSWORD} element={<ForgotPassword />} />
        <Route path={path.MENU} element={<Menu />} />
        <Route path={path.ADDRESS} element={<Address />} />
        <Route path={path.BLOGS} element={<Blogs />} />
        <Route path={path.REVIEW} element={<Review />} />
        <Route path={path.FAIL} element={<Fail />} />
      </Routes>
    </Router>
  );
}

export default App;
