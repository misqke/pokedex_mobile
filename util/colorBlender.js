import { COLORS } from "../constants";

const letterToNum = (letter) => {
  switch (letter) {
    case "1":
      return 1;
    case "2":
      return 2;
    case "3":
      return 3;
    case "4":
      return 4;
    case "5":
      return 5;
    case "6":
      return 6;
    case "7":
      return 7;
    case "8":
      return 8;
    case "9":
      return 9;
    case "A":
      return 10;
    case "B":
      return 11;
    case "C":
      return 12;
    case "D":
      return 13;
    case "E":
      return 14;
    case "F":
      return 15;
    default:
      return 0;
  }
};

const numToLetter = (num) => {
  if (num === 10) return "A";
  else if (num === 11) return "B";
  else if (num === 12) return "C";
  else if (num === 13) return "D";
  else if (num === 14) return "E";
  else if (num === 15) return "F";
  else return num;
};

const blendColors = (color1, color2) => {
  let newColor = "#";
  for (let i = 1; i < color1.length; i++) {
    const blended = numToLetter(
      Math.floor((letterToNum(color1[i]) + letterToNum(color2[i])) / 2)
    );
    newColor += blended;
  }
  return newColor;
};

export default blendColors;
