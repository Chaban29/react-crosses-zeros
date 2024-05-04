import React from 'react';
import { Board } from '../Board/Board';
import styled from 'styled-components';
import { BoardFooter } from '../BoardFooter/BoardFooter';

const BoardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1 1 auto;
  height: 100%;
`;

const AppContainerFlex = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f3f5f9;
`;

export default function App() {
  return (
    <AppContainerFlex className='App'>
      <h1 className='heading'>React Tic Tac Toe</h1>
      <BoardContainer>
        <Board />
      </BoardContainer>
      <BoardFooter />
    </AppContainerFlex>
  );
}
