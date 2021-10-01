import * as React from "react";

export interface GridSquare {
  index: number;
  columnIndex: number;
  rowIndex: number;
  isBlack: boolean;
}

interface CrosswordSquareProps {
  tempGridSize: number;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
}
const CrosswordSquare: React.FunctionComponent<CrosswordSquareProps> = ({
  tempGridSize,
  handleChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        GridSize:
        <input type="text" value={tempGridSize} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default CrosswordSquare;
