import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import alur from "../../assets/image/kuis/alur.png";
import tema from "../../assets/image/kuis/tema.png";
import paraga from "../../assets/image/kuis/paraga.png";
import latar from "../../assets/image/kuis/latar.png";

const NggolekiTembang = () => {
  const initialClues = [
    { word: "TEMA", image: tema },
    { word: "PARAGA", image: paraga },
    { word: "ALUR", image: alur },
    { word: "LATAR", image: latar },
  ];

  const [gridSize, setGridSize] = useState(15);
  const [grid, setGrid] = useState([]);

  const [foundWords, setFoundWords] = useState([]);
  const [selectedCells, setSelectedCells] = useState([]);
  const [clues, setClues] = useState(initialClues);
  const navigate = useNavigate();

  const createEmptyGrid = () => {
    return Array.from({ length: gridSize }, () =>
      Array.from({ length: gridSize }, () => "")
    );
  };

  const placeWordsInGrid = (grid) => {
    clues.forEach((clue) => {
      const word = clue.word;
      let placed = false;
      while (!placed) {
        const direction = Math.floor(Math.random() * 3); // 0 = horizontal, 1 = vertical, 2 = diagonal
        const row = Math.floor(Math.random() * gridSize);
        const col = Math.floor(Math.random() * gridSize);

        if (canPlaceWord(word, row, col, direction, grid)) {
          placeWord(word, row, col, direction, grid);
          placed = true;
        }
      }
    });
  };

  const canPlaceWord = (word, row, col, direction, grid) => {
    if (direction === 0 && col + word.length > gridSize) return false;
    if (direction === 1 && row + word.length > gridSize) return false;
    if (
      direction === 2 &&
      (row + word.length > gridSize || col + word.length > gridSize)
    )
      return false;

    for (let i = 0; i < word.length; i++) {
      const currentRow = row + (direction === 1 || direction === 2 ? i : 0);
      const currentCol = col + (direction === 0 || direction === 2 ? i : 0);
      if (
        grid[currentRow][currentCol] !== "" &&
        grid[currentRow][currentCol] !== word[i]
      ) {
        return false;
      }
    }
    return true;
  };

  const placeWord = (word, row, col, direction, grid) => {
    for (let i = 0; i < word.length; i++) {
      const currentRow = row + (direction === 1 || direction === 2 ? i : 0);
      const currentCol = col + (direction === 0 || direction === 2 ? i : 0);
      grid[currentRow][currentCol] = word[i];
    }
  };

  const fillGridWithRandomLetters = (grid) => {
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        if (grid[row][col] === "") {
          grid[row][col] = String.fromCharCode(
            65 + Math.floor(Math.random() * 26)
          );
        }
      }
    }
  };

  useEffect(() => {
    const newGrid = createEmptyGrid();
    placeWordsInGrid(newGrid);
    fillGridWithRandomLetters(newGrid);
    setGrid(newGrid);
  }, [clues, gridSize]);

  const handleCellClick = (row, col) => {
    const cellIndex = selectedCells.findIndex(
      (cell) => cell.row === row && cell.col === col
    );

    if (cellIndex !== -1) {
      const newSelection = [...selectedCells];
      newSelection.splice(cellIndex, 1);
      setSelectedCells(newSelection);
    } else {
      setSelectedCells([...selectedCells, { row, col }]);
    }
  };

  const clearSelection = () => {
    setSelectedCells([]);
  };

  useEffect(() => {
    const selectedWord = selectedCells
      .map(({ row, col }) => grid[row][col])
      .join("");
    const foundClue = clues.find((clue) => clue.word === selectedWord);

    if (foundClue) {
      setFoundWords([...foundWords, foundClue.word]);
      setSelectedCells([]);
    }
  }, [selectedCells]);
  const allWordsFound = foundWords.length === clues.length;

  const goToNextPage = () => {
    navigate("/aksaranglegena/kuis1/ngaturukaranglegena");
  };

  return (
    <div className="wordsearch">
      <h1>Nggoleki Tembung Nglegena</h1>
      <h2>Goleki tembung sing cocog karo aksara sing ditampilake</h2>

      <div className="wordsearch-clues">
        {clues.map((clue, index) => (
          <div key={index} className="wordsearch-clue">
            <img
              className="wordsearch-clue-image"
              src={clue.image}
              alt={clue.word}
              style={{ width: "20px" }}
            />
          </div>
        ))}
      </div>

      <div className="wordsearch-container">
        <div className="wordsearch-grid" style={{ "--grid-size": gridSize }}>
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="wordsearch-row">
              {row.map((letter, colIndex) => (
                <div
                  key={colIndex}
                  className={`cell ${
                    selectedCells.find(
                      (c) => c.row === rowIndex && c.col === colIndex
                    )
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                >
                  {letter}
                </div>
              ))}
            </div>
          ))}
        </div>
        <button onClick={clearSelection}>Hapua Pilihan</button>

        <div className="wordsearch-found-words">
          <h2>Tembung:</h2>
          {foundWords.map((word, index) => (
            <span key={index} style={{ marginRight: "10px" }}>
              {word}
            </span>
          ))}

          {allWordsFound && (
            <button
              onClick={goToNextPage}
              className="wordsearch-next-page-button"
            >
              {" "}
              Lanjut
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NggolekiTembang;
