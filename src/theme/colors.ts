import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#104404",
  primaryBright: "#808080",
  primaryDark: "#175609",
  secondary: "#4c7c41",
  success: "#57b34a",
  warning: "#645b00",
};

export const brandColors = {
  binance: "#ababab",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#222222",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#000000",
  textDisabled: "#BDC2C4",
  textSubtle: "#1a1a1a",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#ffffff",
  background: "#1b1d1e",
  backgroundDisabled: "#242728",
  contrast: "#ffffff",
  invertedContrast: "#106727",
  input: "#60865a",
  primaryDark: "#0098A1",
  tertiary: "#26771d",
  text: "#e8e6e3",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#60865a",
  card: "#222222",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
