export const numberToString = (numberToConvert: number) => {
  return numberToConvert < 10
    ? "0" + String(numberToConvert)
    : String(numberToConvert);
};
