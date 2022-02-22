import { dictionary } from "../dictionary";
import { CharType } from "../types";

export type TInfo = {
  firstLetter: number;
  frequencyDictionary: number;
  lastLetter: number;
  frequencyWord: number;
  activeCharacter: string;
};

export function createStore() {
  return {
    info: {} as TInfo,
    setActiveCharacter(char: CharType) {
      this.info.activeCharacter = char;
    },
    firstLetterCount(char: CharType) {
      this.info.firstLetter = dictionary.reduce((acc: number, current):number => {
        if (current.startsWith(char)) {
          acc += 1;
        }
        return acc;
      }, 0);
    },
    lastLetterCount(char: CharType) {
      this.info.lastLetter = dictionary.reduce((acc: number, current): number => {
        if (current.slice(-1) === char) {
          acc += 1;
        }
        return acc;
      }, 0);
    },
    frequencyWordCount(char: CharType) {
      this.info.frequencyWord = dictionary.reduce((acc: number, current): number => {
        if (current.includes(`${char}${char}`)) {
          acc += 1;
        }
        return acc;
      }, 0);
    },
    frequencyDictionaryCount(char: CharType) {
      this.info.frequencyDictionary = dictionary.reduce(
        (acc: number, current): number => {
          if (current.includes(char)) {
            current.split("").forEach((e) => {
              if (e === char) acc += 1;
            });
          }
          return acc;
        },
        0
      );
    },
  };
}

export type TStore = ReturnType<typeof createStore>;
