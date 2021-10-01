import "./App.css";
import * as React from "react";

import {
  createNewCrosswordGrid,
  updateCrosswordGridWithToggledBlack,
} from "../utils/utils";

import CrosswordGrid from "./CrosswordGrid";
import { GridSquare } from "./CrosswordSquare";
import GridSizeForm from "./GridSizeForm";
import GridPatternSelector from "./GridPatternSelector";

const App: React.FunctionComponent = () => {
  const [tempGridSize, setTempGridSize] = React.useState(15);
  const [gridSize, setGridSize] = React.useState(15);
  const [grid, setGrid] = React.useState<GridSquare[]>(
    createNewCrosswordGrid(15)
  );
  const [gridPattern, setGridPattern] = React.useState("basic");
  const [isTogglingGridBlack, setIsTogglingGridBlack] = React.useState(true);

  const handleGridSizeFormSubmit = (evt: any) => {
    evt.preventDefault();

    const newGrid = createNewCrosswordGrid(tempGridSize);
    setGrid(newGrid);
    setGridSize(tempGridSize);
  };

  const handleSetIsTogglingGridBlack = (
    e: React.MouseEvent<HTMLInputElement>,
    toggledGridSquare: GridSquare
  ) => {
    setIsTogglingGridBlack(!toggledGridSquare.isBlack);
    console.log(
      "handleSetIsTogglingGridBlack - !toggledGridSquare.isBlack",
      !toggledGridSquare.isBlack
    );
    handleToggleGridSquareBlack(
      e,
      toggledGridSquare,
      !toggledGridSquare.isBlack
    );
  };

  const handleToggleGridSquareBlack = (
    e: React.MouseEvent<HTMLInputElement>,
    toggledGridSquare: GridSquare,
    isTogglingGridBlack: boolean
  ) => {
    e.stopPropagation();
    console.log("e.buttons", e.buttons);
    if (e.buttons !== 1 && e.buttons !== 3) {
      return;
    }

    console.log("handleToggleGridSquareBlack", isTogglingGridBlack);

    const newGrid = updateCrosswordGridWithToggledBlack(
      grid,
      gridSize,
      gridPattern,
      isTogglingGridBlack,
      toggledGridSquare
    );

    console.log("newGrid", newGrid);

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
        onSetBlack={(
          e: React.MouseEvent<HTMLInputElement>,
          gridSquare: GridSquare
        ) => handleSetIsTogglingGridBlack(e, gridSquare)}
        onToggleBlack={(
          e: React.MouseEvent<HTMLInputElement>,
          gridSquare: GridSquare
        ) => handleToggleGridSquareBlack(e, gridSquare, isTogglingGridBlack)}
      />
      <br />
      <GridPatternSelector
        gridPattern={gridPattern}
        onPatternTypeClick={(newGridPattern: string) =>
          setGridPattern(newGridPattern)
        }
      />
    </div>
  );
};

export default App;
