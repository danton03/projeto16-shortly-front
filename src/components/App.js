import UserContext from "../contexts/UserContext";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; 
import GlobalStyle from '../assets/styles/GlobalStyles';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from "react-toastify";
import RankingPage from "./RankingPage/RankingPage";
import LinksPage from "./LinksPage/LinksPage";
import LoginPage from "./LoginPage/LoginPage";
import SignupPage from "./SignupPage/SignupPage";

function App() {
  const [user, setUser] = useState({});
  const userName = localStorage.getItem("userName");
  const token = localStorage.getItem("token");

  if(user.token !== undefined) {
    localStorage.setItem("userName", user.name);
    localStorage.setItem("token", user.token);
  } else if (userName !== null && token !== null) {
    setUser({
      name: userName,
      token
    });
  }
  
  return (
    <UserContext.Provider value={{user, setUser}}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <RankingPage /> } />
          <Route path="/home" element={ user.length ? <LinksPage /> : <Navigate to={<RankingPage />} /> } />
          <Route path="/login" element={ !user.length ? <LoginPage /> : <Navigate to={<RankingPage />} /> } />
          <Route path="/signup" element={ !user.length ? <SignupPage /> : <Navigate to={<RankingPage />} /> } />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </UserContext.Provider>
  );
}


export default App;