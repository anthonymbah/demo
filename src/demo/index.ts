import { dictionary } from "../morseCodeDictionary";

export const textToMorseCode = (input: string) => {
    const morseCode: string[] = [];
  for (const char of input) {
    if (dictionary.hasOwnProperty(char)) {
      morseCode.push(dictionary[char]);
    } else {
      morseCode.push(" ");
    }
  }
  return morseCode.join(" ");
};