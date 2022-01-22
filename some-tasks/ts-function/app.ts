const getCandies = (num: number): string | number => {
  if (num % 22 === 0) return "candybar";
  if (num % 2 === 0) return "candy";
  if (num % 11 === 0) return "bar";
  return num;
};
