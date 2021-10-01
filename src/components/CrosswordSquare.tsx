import * as React from "react";

export interface GridSquare {
  index: number;
  columnIndex: number;
  rowIndex: number;
  isBlack: boolean;
}

interface CrosswordSquareProps {
  gridSquare: GridSquare;
  onToggleBlack: (e: React.MouseEvent<HTMLInputElement>) => void;
}
const CrosswordSquare: React.FunctionComponent<CrosswordSquareProps> = ({
  gridSquare,
  onToggleBlack,
}) => {
  const backgroundColor = gridSquare.isBlack ? "#444444" : "white";

  return (
    <div
      onMouseDown={onToggleBlack}
      onMouseEnter={onToggleBlack}
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
