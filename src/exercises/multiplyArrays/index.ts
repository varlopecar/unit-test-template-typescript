export const multiplyArrays = (a: number[], b: number[]): number[] => {
  if (a.length === 0 || b.length === 0) {
    throw new Error("Arrays must have at least one element");
  }

  if (a.length !== b.length) {
    throw new Error("Arrays must have the same length");
  }
   
  return a.map((value, index) => value * b[index]);
};
