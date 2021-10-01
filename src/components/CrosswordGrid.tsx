import * as React from "react";
import CrosswordSquare, { GridSquare } from "./CrosswordSquare";

interface CrosswordGridProps {
  grid: GridSquare[];
  gridSize: number;
  onToggleBlack: (
    e: React.MouseEvent<HTMLInputElement>,
    gridSquare: GridSquare
  ) => void;
}
const CrosswordGrid: React.FunctionComponent<CrosswordGridProps> = ({
  grid,
  gridSize,
  onToggleBlack,
}) => {
  if (!grid.length) {
    return <></>;
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: gridSize * 27 }}>
      {grid.map((gridSquare) => (
        <CrosswordSquare
          gridSquare={gridSquare}
          onToggleBlack={(e) => onToggleBlack(e, gridSquare)}
        />
      ))}
    </div>
  );
};

export default CrosswordGrid;
