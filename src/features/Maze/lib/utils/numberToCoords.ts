export const numberToCoords = (index: number, size: number) => {
  return {
    x: Math.ceil(index / size),
    y: index % size || size,
  };
};
