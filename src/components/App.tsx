import "./App.css";
import * as React from "react";

import CrosswordGrid from "./CrosswordGrid";
import { GridSquare } from "./CrosswordSquare";
import GridSizeForm from "./GridSizeForm";

const App: React.FunctionComponent = () => {
  const [tempGridSize, setTempGridSize] = React.useState(0);
  const [gridSize, setGridSize] = React.useState(0);
  const [grid, setGrid] = React.useState<GridSquare[]>([]);

  const handleGridSizeFormSubmit = (evt: any) => {
    evt.preventDefault();

    let newGrid: GridSquare[] = [];

    newGrid = [...Array(tempGridSize * tempGridSize)].map(
      (_value: any, index: number) => {
        const columnIndex = index % tempGridSize;
        const rowIndex = Math.floor(index / tempGridSize);

        return { columnIndex, rowIndex, index, isBlack: false };
      }
    );

    setGrid(newGrid);
    setGridSize(tempGridSize);
  };

  const handleToggleGridSquareBlack = (
    e: React.MouseEvent<HTMLInputElement>,
    toggledGridSquare: GridSquare
  ) => {
    if (e.buttons !== 1 && e.buttons !== 3) {
      return;
    }

    let newGrid = [...grid];
    const oppositeTile = newGrid.find(
      (gridSquare) =>
        gridSquare.rowIndex === toggledGridSquare.rowIndex &&
        gridSquare.columnIndex + toggledGridSquare.columnIndex === gridSize - 1
    );

    newGrid[toggledGridSquare.index].isBlack =
      !newGrid[toggledGridSquare.index].isBlack;
    if (oppositeTile && oppositeTile.index !== toggledGridSquare.index) {
      newGrid[oppositeTile.index].isBlack =
        !newGrid[oppositeTile.index].isBlack;
    }

    setGrid(newGrid);
  };

  return (
    <div className="App">
      <h1>Crossword Maker</h1>
      <GridSizeForm
        tempGridSize={tempGridSize}
        handleChange={(e) => setTempGridSize(parseInt(e.target.value, 10))}
        handleSubmit={handleGridSizeFormSubmit}
      />
      <br />
      <CrosswordGrid
        grid={grid}
        gridSize={gridSize}
        onToggleBlack={(
          e: React.MouseEvent<HTMLInputElement>,
          gridSquare: GridSquare
        ) => handleToggleGridSquareBlack(e, gridSquare)}
      />
    </div>
  );
};

export default App;
