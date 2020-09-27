export function createLifeArray(xSize: number, ySize: number): number[][] {
  let lifeArray: number[][] = [];

  // x & y cursors
  let x = 0;
  let y = 0;

  for (let i = 0; i < xSize * ySize; i++) {
    if (!lifeArray[y]) {
      lifeArray.push([]);
    }
    lifeArray[y].push(0);
    x += 1;
    if (!(x % 10)) {
      x = 0;
      y += 1;
    }
  }

  return lifeArray;
}
