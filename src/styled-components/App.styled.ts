import styled from 'styled-components';

const mainColor = 'rgb(255, 114, 63)';
const secondaryColor = 'orange';
const fontSize = '1.2rem';

export const App = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${secondaryColor};
`;

export const AppForm = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > input {
    padding-right: 1rem;
    background-color: transparent;
    padding: 0.5rem 1rem;
    font-size: ${fontSize};
    text-align: right;
  }
`;

export const AppActions = styled.div`
  width: 100%;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > button {
    width: 100%;
    padding: 0.5rem 1rem;
    margin: 0.4rem 0;
    background-color: ${mainColor};
    font-size: ${fontSize};
    cursor: pointer;
    &:hover {
      background-color: white;
      transition: 300ms;
    }
  }
`;
