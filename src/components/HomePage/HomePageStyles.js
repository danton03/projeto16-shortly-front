import styled from 'styled-components';

const ShortUrlsPanel = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  max-width: 1020px;
  max-height: 292px;
  gap: 42px;
  margin-top: 57px;
  padding: 0 19px 20px 0;
  box-sizing: border-box;
  overflow-y: scroll;

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

export { ShortUrlsPanel };