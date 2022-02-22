import React from "react";
import { observer } from "mobx-react";
import styled from "@emotion/styled";
import { alphabet } from "../../dictionary";
import { useStore } from "../../Context";
import { CharType } from "../../types";

const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 605px;
  gap: 1px;
  margin: 0 auto;
  flex-basis: 50%;
  background-color: #302f4e;
  border-radius: 20px;
`;

const CharCell = styled("button")`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: none;
  background-color: unset;
  color: white;
  &:hover {
    color: #7875aa;
    cursor: pointer;
  }
`;

const Char = styled.span`
  font-size: 4rem;
  text-transform: uppercase;
`;

const CharGrid = observer(() => {
  const store = useStore();

  const handleChangeLetter = (char: CharType): void => {
    store.setActiveCharacter(char);
    store.firstLetterCount(char);
    store.lastLetterCount(char);
    store.frequencyWordCount(char);
    store.frequencyDictionaryCount(char);
  };
  return (
    <GridWrapper>
      {alphabet.map((char: CharType) => {
        return (
          <CharCell key={char} onClick={() => handleChangeLetter(char)}>
            <Char>{char}</Char>
          </CharCell>
        );
      })}
    </GridWrapper>
  );
});

export default CharGrid;
