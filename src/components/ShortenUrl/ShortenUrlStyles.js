import styled from 'styled-components';
const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1020px;
  height: auto;
  gap: 69px;
  margin-top: 130px;
  box-sizing: border-box;
  background-color: var(--cor-branca);

  input{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 0 22px;
  
    background: var(--cor-branca);
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    box-sizing: border-box;
    border-radius: 12px;

    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: var(--cor-cinza);
  }
  @media(max-width: 770px){
    flex-direction: column;
    margin-top: 30px;
    gap: 25px;
  }
`;

const ButtonForm = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 182px;
  height: 60px;
  box-sizing: border-box;
  border: none;
  border-radius: 12px;
  background: var(--cor-verde);

  font-family: 'Lexend Deca';
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: var(--cor-branca);

  &:hover{
    cursor: pointer;
  }
  
`;

export { Form, ButtonForm };