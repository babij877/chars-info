import React from "react";
import { StoreProvider } from "./Context";
import CharGrid from "./components/CharGrid";
import CharInfo from "./components/CharInfo";
import "./App.css";
import styled from "@emotion/styled";

const Header = styled.header`
  padding: 50px 0;
  font-size: 3rem;
  text-align: center;
  color: white;
`;

function App() {
  return (
    <StoreProvider>
      <div>
        <main className="App-main">
          <Header>Get info about letter from dictionary</Header>
          <div className="App-wrapper">
            <CharGrid />
            <CharInfo />
          </div>
        </main>
      </div>
    </StoreProvider>
  );
}

export default App;
