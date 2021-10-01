import * as React from "react";

export interface GridSquare {
  index: number;
  columnIndex: number;
  rowIndex: number;
  isBlack: boolean;
}

interface CrosswordSquareProps {
  gridSquare: GridSquare;
  onToggleBlackMouseDown: (e: React.MouseEvent<HTMLInputElement>) => void;
  onToggleBlackMouseEnter: (e: React.MouseEvent<HTMLInputElement>) => void;
}
const CrosswordSquare: React.FunctionComponent<CrosswordSquareProps> = ({
  gridSquare,
  onToggleBlackMouseDown,
  onToggleBlackMouseEnter,
}) => {
  const backgroundColor = gridSquare.isBlack ? "#444444" : "white";

  return (
    <div
      onMouseDown={onToggleBlackMouseDown}
      onMouseEnter={onToggleBlackMouseEnter}
      style={{
        height: 25,
        width: 25,
        background: backgroundColor,
        border: "1px solid black",
      }}
    />
  );
};

export default CrosswordSquare;
