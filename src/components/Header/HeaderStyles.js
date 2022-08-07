import styled from 'styled-components';

const Topo = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  background-color: var(--cor-branca);
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

export { Topo, Button, ButtonsContainer, WelcomeMessage };