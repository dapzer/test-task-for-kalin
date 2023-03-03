export const numberToCoords = (index: number, size: number) => {
  return {
    y: Math.ceil(index / size),
    x: index % size || size,
  };
};
