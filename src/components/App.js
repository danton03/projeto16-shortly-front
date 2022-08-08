import UserContext from "../contexts/UserContext";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; 
import GlobalStyle from '../assets/styles/GlobalStyles';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from "react-toastify";
import RankingPage from "./RankingPage/RankingPage";
import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";
import SignupPage from "./SignupPage/SignupPage";

function App() {
  const [user, setUser] = useState({});
  const name = localStorage.getItem("userName");
  const token = localStorage.getItem("token");

  if(user.token) {
    localStorage.setItem("userName", user.name);
    localStorage.setItem("token", user.token);
  } else if (name && token) {
    setUser({
      name,
      token
    });
  }
  
  return (
    <UserContext.Provider value={{user, setUser}}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <RankingPage /> } />
          <Route path="/home" element={ user.token ? <HomePage /> : <Navigate to="/" replace /> } />
          <Route path="/login" element={ !user.token ? <LoginPage /> : <Navigate to="/home" replace/> } />
          <Route path="/signup" element={ !user.token ? <SignupPage /> : <Navigate to="/home" replace/> } />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </UserContext.Provider>
  );
}


export default App;