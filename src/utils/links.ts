import { removeSpecialCharacters, replaceUmlauts } from "./strings";

export const parseLink = (str: string) => {
  // Convert to lowercase, replace spaces with hyphens, and remove special characters
  let cleanStr = str.toLowerCase().replace(/\s/g, "-");
  cleanStr = replaceUmlauts(cleanStr);
  cleanStr = removeSpecialCharacters(cleanStr);
  return cleanStr;
};

export const getNewsDetailLink = (name: string) => `/news/${parseLink(name)}`;
