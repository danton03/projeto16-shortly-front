import styled from 'styled-components';

const Topo = styled.div`
  display: flex;
  flex-direction: ${(props) => props.reverse ? "row-reverse" : "row"};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  background-color: var(--cor-branca);

  .menuButtonClassName {
    display: none;
    width: fit-content;
    background-color: transparent;
    border: none;
  }

  .my-menu {
    color: var(--cor-cinza);
  }

  .menuItem {
    color: var(--cor-cinza);
  }

  .menuItem:hover {
    color: #3B5C28;
    background-color: var(--cor-verde-claro);
  }

  @media(max-width: 870px){
    .buttons{
      display: none;
    }
    .menuButtonClassName{
      display: flex;
    }
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 27px;
  width: auto;
  height: auto;
`;

const Button = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;

  font-family: 'Lexend Deca';
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${props => props.color};

  &:hover{
    cursor: pointer;
  }
`;

const WelcomeMessage = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;

  font-family: 'Lexend Deca';
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: var(--cor-verde);
`;

const HamburguerIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  #checkbox-menu{
    position: absolute;
    opacity: 0;
  }

  label{
    cursor: pointer;
    position: relative;
    display: block;
    height: 22px;
    width: 30px;
  }

  label span{
    position: absolute;
    display: block;
    height: 5px;
    width: 100%;
    border-radius: 30px;
    background: var(--cor-verde);
    transition: 0.25s ease-in-out;
  }

  label span:nth-child(1){
    top: 0;
  }

  label span:nth-child(2){
    top: 8px;
  }

  label span:nth-child(3){
    top: 16px;
  }

  /* #checkbox-menu:checked + label span:nth-child(1){
    transform: rotate(-45deg);
    top: 8px;
  }

  #checkbox-menu:checked + label span:nth-child(2){
    opacity: 0;
  }

  #checkbox-menu:checked + label span:nth-child(3){
    transform: rotate(45deg);
    top:8px;
  } */
`;

export { Topo, Button, ButtonsContainer, WelcomeMessage, HamburguerIcon };