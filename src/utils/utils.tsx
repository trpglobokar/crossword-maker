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
  gridPattern: string,
  toggledGridSquare: GridSquare //CREATE EXTRA STATE = isTogglingBlack: boolean??
) => {
  let newGrid = [...grid];
  let oppositeTile: GridSquare | undefined = undefined;

  switch (gridPattern) {
    case "horizontal symmetry":
      oppositeTile = newGrid.find(
        (gridSquare) =>
          gridSquare.columnIndex === toggledGridSquare.columnIndex &&
          gridSquare.rowIndex + toggledGridSquare.rowIndex === gridSize - 1 //TODO: only put select logic in switch-case?
      );
      break;
    case "vertical symmetry":
      oppositeTile = newGrid.find(
        (gridSquare) =>
          gridSquare.rowIndex === toggledGridSquare.rowIndex &&
          gridSquare.columnIndex + toggledGridSquare.columnIndex ===
            gridSize - 1
      );
      break;
    case "diagonal symmetry":
      oppositeTile = newGrid.find(
        (gridSquare) =>
          gridSquare.rowIndex + toggledGridSquare.rowIndex === gridSize - 1 &&
          gridSquare.columnIndex + toggledGridSquare.columnIndex ===
            gridSize - 1
      );
      break;
    case "basic":
    default:
      break;
  }

  newGrid[toggledGridSquare.index].isBlack =
    !newGrid[toggledGridSquare.index].isBlack;
  if (oppositeTile && oppositeTile.index !== toggledGridSquare.index) {
    newGrid[oppositeTile.index].isBlack = !newGrid[oppositeTile.index].isBlack;
  }

  return newGrid;
};
