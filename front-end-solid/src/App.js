import "./App.css";
import Landing from "./components/landing/Landing.jsx";
import { Routes, Route } from "react-router-dom";
import Account from "./components/account/Account.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  );
}

export default App;
