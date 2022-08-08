import styled from 'styled-components';
const LogoImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 314px;
  height: 102px;
  margin: 17px 70px 0;
  box-sizing: border-box;
  background-color: var(--cor-branca);

  @media(max-width: 870px){
    width: 60vw;
    height: auto;
    margin: 56px 40px 0;
  }
`;

export { LogoImg };