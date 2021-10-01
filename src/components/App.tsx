import "./App.css";
import * as React from "react";

import {
  createNewCrosswordGrid,
  updateCrosswordGridWithToggledBlack,
} from "../utils/utils";

import CrosswordGrid from "./CrosswordGrid";
import { GridSquare } from "./CrosswordSquare";
import GridSizeForm from "./GridSizeForm";

const App: React.FunctionComponent = () => {
  const [tempGridSize, setTempGridSize] = React.useState(0);
  const [gridSize, setGridSize] = React.useState(0);
  const [grid, setGrid] = React.useState<GridSquare[]>([]);

  const handleGridSizeFormSubmit = (evt: any) => {
    evt.preventDefault();

    const newGrid = createNewCrosswordGrid(tempGridSize);
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

    const newGrid = updateCrosswordGridWithToggledBlack(
      grid,
      gridSize,
      toggledGridSquare
    );

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
