import { GridSquare } from "../components/CrosswordSquare";

export const createNewCrosswordGrid = (tempGridSize: number) => {
  let newGrid: GridSquare[] = [];

  newGrid = [...Array(tempGridSize * tempGridSize)].map(
    (_value: any, index: number) => {
      const columnIndex = index % tempGridSize;
      const rowIndex = Math.floor(index / tempGridSize);

      return { columnIndex, rowIndex, index, isBlack: false };
    }
  );

  return newGrid;
};

export const updateCrosswordGridWithToggledBlack = (
  grid: GridSquare[],
  gridSize: number,
  toggledGridSquare: GridSquare
) => {
  let newGrid = [...grid];
  const oppositeTile = newGrid.find(
    (gridSquare) =>
      gridSquare.rowIndex === toggledGridSquare.rowIndex &&
      gridSquare.columnIndex + toggledGridSquare.columnIndex === gridSize - 1
  );

  newGrid[toggledGridSquare.index].isBlack =
    !newGrid[toggledGridSquare.index].isBlack;
  if (oppositeTile && oppositeTile.index !== toggledGridSquare.index) {
    newGrid[oppositeTile.index].isBlack = !newGrid[oppositeTile.index].isBlack;
  }

  return newGrid;
};
