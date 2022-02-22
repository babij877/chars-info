import React from "react";
import { observer } from "mobx-react";
import styled from "@emotion/styled";
import { useStore } from "../../Context";

const InfoBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 605px;
  margin: 0 auto;
  flex-basis: 50%;
  background-color: #302f4e;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const InfoBlock = styled("div")`
  border-bottom: 1px solid #7875aa;
  &:last-child {
    border-bottom: none;
  }
`;

const Main = styled("main")`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
`;

const Char = styled.span`
  font-size: 4rem;
  text-transform: uppercase;
  color: #7875aa;
`;

const Typography = styled.p`
  font-size: 2em;
  color: white;
  margin: 0;
`;

const CharInfo = observer(() => {
  const {
    info: {
      activeCharacter,
      firstLetter,
      lastLetter,
      frequencyDictionary,
      frequencyWord,
    },
  } = useStore();

  return (
    <InfoBlockWrapper>
      {activeCharacter ? (
        <>
          <header style={{ alignSelf: "flex-start" }}>
            <Char>{activeCharacter}</Char>
          </header>
          <Main>
            <InfoBlock>
              <Typography>{`${firstLetter} words start with this letter`}</Typography>
            </InfoBlock>
            <InfoBlock>
              <Typography>{`${lastLetter} words end with this letter`}</Typography>
            </InfoBlock>
            <InfoBlock>
              <Typography>{`This letter appear in the dictionary ${frequencyDictionary} times`}</Typography>
            </InfoBlock>
            <InfoBlock>
              <Typography>{`${frequencyWord} words have the same letter repeated in conjunction`}</Typography>
            </InfoBlock>
          </Main>
        </>
      ) : (
        <Typography>Please choose a letter</Typography>
      )}
    </InfoBlockWrapper>
  );
});

export default CharInfo;
