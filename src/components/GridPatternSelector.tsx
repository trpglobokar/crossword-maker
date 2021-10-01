import * as React from "react";

interface GridPatternSelectorProps {
  gridPattern: string;
  onPatternTypeClick: (newGridPattern: string) => void;
}

const gridPatterns: string[] = [
  "basic",
  "vertical symmetry",
  "horizontal symmetry",
  "diagonal symmetry",
];

const GridPatternSelector: React.FunctionComponent<GridPatternSelectorProps> =
  ({ gridPattern, onPatternTypeClick }) => {
    return (
      <div>
        <div>Edit Mode:</div>
        {gridPatterns.map((pattern) => (
          <button
            style={{
              backgroundColor: pattern === gridPattern ? "#55FF55" : "white",
            }}
            value={pattern}
            onClick={() => onPatternTypeClick(pattern)}
          >
            {pattern}
          </button>
        ))}
      </div>
    );
  };

export default GridPatternSelector;
