import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import { Button, ButtonsContainer, Topo, WelcomeMessage} from './HeaderStyles.js';

function Header({page}) {
  const{ user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const corCinza = "#9C9C9C";
  const corVerde = "#5D9040";

  function renderHeader() {
    if (user.name) {
      if (page === 'home') {
        return(
          <Topo>
            <ButtonsContainer>
              <Button 
                color={corVerde} 
                key="1" 
                onClick={() => navigate("/home")}
              >
                Home
              </Button>
              <Button 
                color={corCinza} 
                key="2"
                onClick={() => navigate("/ranking")}
              >
                Ranking
              </Button>
              <Button 
                color={corCinza} 
                key="3"
                onClick={() => handleLogout()}
              >
                Sair
              </Button>
            </ButtonsContainer>
            <WelcomeMessage>{`Seja bem-vindo(a), ${user.name}`}</WelcomeMessage>
          </Topo>
        );
      }
      else if (page === 'ranking') {
        return(
          <Topo>
            <ButtonsContainer>
              <Button 
                color={corCinza} 
                key="1" 
                onClick={() => navigate("/home")}
              >
                Home
              </Button>
              <Button 
                color={corVerde} 
                key="2"
                onClick={() => navigate("/ranking")}
              >
                Ranking
              </Button>
              <Button 
                color={corCinza} 
                key="3"
                onClick={() => handleLogout()}
              >
                Sair
              </Button>
            </ButtonsContainer>
            <WelcomeMessage>{`Seja bem-vindo(a), ${user.name}`}</WelcomeMessage>
          </Topo>
        );
      }
    }
    if (page === 'signup'){
      return(
        <Topo>
          <ButtonsContainer>
            <Button 
              color={corCinza} 
              key="1"
              onClick={() => navigate("/login")}
            >
              Entrar
            </Button>
            <Button 
              color={corVerde} 
              key="2"
              onClick={() => navigate("/signup")}
            >
              Cadastrar-se
            </Button>
          </ButtonsContainer>
        </Topo>
      );
    }
    else{
      return(
        <Topo>
          <ButtonsContainer>
          <Button 
            color={corVerde} 
            key="1"
            onClick={() => navigate("/login")}
          >
            Entrar
          </Button>
          <Button 
            color={corCinza} 
            key="2"
            onClick={() => navigate("/signup")}
          >
            Cadastrar-se
          </Button>
          </ButtonsContainer>
        </Topo>
      );
    }
  }

  function handleLogout(){
    localStorage.clear();
    setUser({});
    navigate("/");
  }

  return(
    renderHeader()
  );
}

export { Header };