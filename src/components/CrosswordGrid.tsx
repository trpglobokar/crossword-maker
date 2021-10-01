import * as React from "react";
import CrosswordSquare, { GridSquare } from "./CrosswordSquare";

interface CrosswordGridProps {
  grid: GridSquare[];
  gridSize: number;
  onSetBlack: (
    e: React.MouseEvent<HTMLInputElement>,
    gridSquare: GridSquare
  ) => void;
  onToggleBlack: (
    e: React.MouseEvent<HTMLInputElement>,
    gridSquare: GridSquare
  ) => void;
}
const CrosswordGrid: React.FunctionComponent<CrosswordGridProps> = ({
  grid,
  gridSize,
  onSetBlack,
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
          onToggleBlackMouseDown={(e) => {
            onSetBlack(e, gridSquare);
          }}
          onToggleBlackMouseEnter={(e) => onToggleBlack(e, gridSquare)}
        />
      ))}
    </div>
  );
};

export default CrosswordGrid;
