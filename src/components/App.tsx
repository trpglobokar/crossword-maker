import "./App.css";
import * as React from "react";
import CrosswordSquare, { GridSquare } from "./CrosswordSquare";

const App: React.FunctionComponent = () => {
  const [tempGridSize, setTempGridSize] = React.useState(0);
  const [gridSize, setGridSize] = React.useState(0);
  const [grid, setGrid] = React.useState<GridSquare[]>([]);

  const handleSubmit = (evt: any) => {
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

  const handleToggleBlack = (
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

  const gridComponent =
    gridSize > 0 ? (
      <div style={{ display: "flex", flexWrap: "wrap", width: gridSize * 27 }}>
        {grid.map((gridSquare) => (
          <CrosswordSquare
            gridSquare={gridSquare}
            onToggleBlack={(e: React.MouseEvent<HTMLInputElement>) =>
              handleToggleBlack(e, gridSquare)
            }
          />
        ))}
      </div>
    ) : (
      <></>
    );

  return (
    <div className="App">
      <header className="App-header">
        <p>Grid to make</p>
        <form onSubmit={handleSubmit}>
          <label>
            GridSize:
            <input
              type="text"
              value={tempGridSize}
              onChange={(e) => setTempGridSize(parseInt(e.target.value, 10))}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {gridComponent}
      </header>
    </div>
  );
};

export default App;
