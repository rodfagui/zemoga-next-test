export const getShortedText = (text: string, quantity: number) => {
  if (text.length <= quantity) {
    return text;
  }
  return text.substr(0, quantity - 1).trim() + "...";
};