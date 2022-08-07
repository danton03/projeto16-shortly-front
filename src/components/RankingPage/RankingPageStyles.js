import styled from 'styled-components';

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  height: auto;
  gap: 10px;
  margin-top: 70px;
  box-sizing: border-box;

  font-family: 'Lexend Deca';
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  color: var(--cor-preta);

  img{
    width: 56px;
    height: 50px;
  }
`;

const RankingPanel = styled.ol`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  max-width: 1017px;
  min-height: 241px;
  max-height: 482px;
  gap: 10px;
  margin-top: 57px;
  padding: 19px 40px;
  box-sizing: border-box;
  overflow-y: scroll;

  border: 1px solid rgba(120, 177, 89, 0.25);
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 24px 24px 0px 0px;

  li{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
    color: var(--cor-preta);
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: var(--cor-verde-scroll);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--cor-verde-claro);
  }
`;

export { Title, RankingPanel }


