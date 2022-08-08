import {
  Menu,
  MenuItem,
  MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import { HamburguerIcon } from './HeaderStyles';

export default function MenuMobile() {
  const{ user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  function renderOptions() {
    if (user.name) {
      return(
        <>
          <MenuItem 
            className={"menuItem"} 
            onClick={() => navigate("/home")}
          >
            Home
          </MenuItem>
          <MenuItem 
            className={"menuItem"} 
            onClick={() => navigate("/ranking")}
          >
            Ranking
          </MenuItem>
          <MenuItem 
            className={"menuItem"} 
            onClick={() => handleLogout()}
          >
            Sair
          </MenuItem>
        </>
      );
    }

    else{
      <>
        <MenuItem 
            className={"menuItem"} 
            onClick={() => navigate("/login")}
          >
            Entrar
          </MenuItem>
          <MenuItem 
            className={"menuItem"} 
            onClick={() => navigate("/signup")}
          >
            Cadastrar-se
          </MenuItem>
      </>
    }
  }

  function handleLogout(){
    localStorage.clear();
    setUser({});
    navigate("/");
  }

  return (
      <Menu 
        menuClassName="my-menu"
        menuButton={<MenuButton className="menuButtonClassName"> <Hamburguer /> </MenuButton>} 
        transition
      >
          {renderOptions()}
      </Menu>
  );
}

function Hamburguer(){
  return(
    <HamburguerIcon>
      <input type="checkbox" id="checkbox-menu" />
      <label htmlFor="checkbox-menu">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </HamburguerIcon>
  );
}