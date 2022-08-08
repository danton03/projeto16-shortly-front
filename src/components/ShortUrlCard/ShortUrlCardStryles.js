import styled from "styled-components";

const UrlCard = styled.li`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 890px;
    max-width: 890px;
    height: 60px;
    background-color: var(--cor-verde-claro);
    border-radius: 12px 0px 0px 12px;
    padding-left: 21px;
    padding-right: 94px;
    font-weight: 400;
    font-size: 14px;
    box-sizing: border-box;
    color: var(--cor-branca);

    span{
      font-family: 'Lexend Deca';
      font-style: normal;
      font-weight: 400;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 14px;
      line-height: 18px;
      box-sizing: border-box;
      color: var(--cor-branca);
    }

    .url{
      width: 28%;
      max-width: 210px;
    }

    &:hover{
      cursor: pointer;
    }
  }

  button {
    width: 130px;
    height: 60px;
    background-color: var(--cor-branca);
    border-radius: 0px 12px 12px 0px;
    border: 1px solid rgba(120, 177, 89, 0.25);
    padding: 0;

    img{
      width: 22px;
      height: 26px;
    }

    &:hover{
      cursor: pointer;
    }
  }
`;

export { UrlCard };