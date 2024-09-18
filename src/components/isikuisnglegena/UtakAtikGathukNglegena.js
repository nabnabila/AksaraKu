import React, { useState } from "react";
import Crossword from "@jaredreisinger/react-crossword";
import { useNavigate } from "react-router-dom";
import dramaria from "../../assets/image/kuis/dramaria.png";
import tragedi from "../../assets/image/kuis/tragedi.png";
import dagelan from "../../assets/image/kuis/dagelan.png";
import opera from "../../assets/image/kuis/opera.png";
import teater from "../../assets/image/kuis/teater.png";
import "../../style/Crossword.css";
const data = {
  across: {
    1: {
      clue: "GAMBAR 1", // Placeholder clue
      answer: "DRAMARIA",
      row: 1,
      col: 2,
    },
    3: {
      clue: "GAMBAR 3", // Placeholder clue
      answer: "OPERA",
      row: 4,
      col: 0,
    },
    5: {
      clue: "GAMBAR 5", // Placeholder clue
      answer: "TEATER",
      row: 6,
      col: 0,
    },
  },
  down: {
    2: {
      clue: "GAMBAR 2", // Placeholder clue
      answer: "TRAGEDI",
      row: 0,
      col: 7,
    },
    4: {
      clue: "GAMBAR 4", // Placeholder clue
      answer: "DAGELAN",
      row: 1,
      col: 2,
    },
  },
};

export default function UtakAtikGathukNglegena() {
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  const handleCrosswordCorrect = () => {
    setIsCorrect(true);
  };

  const handleNextPage = () => {
    navigate("/aksaranglegena/kuis1/nyocokakegambarnglegena");
  };

  return (
    <div className="crossword-contain">
      <br />
      <h1 className="p-20 m-5 text-center">Utak Atik Gathuk Nglegena</h1>
      <br />
      <div className="crossword-game-container">
        <div className="crossword" style={{ width: "500px", height: "500px" }}>
          <Crossword data={data} onLoadedCorrect={handleCrosswordCorrect} />
        </div>
        <div className="crossword-clues-with-images">
          <div className="crossword-clue">
            <img
              src={dramaria}
              alt="Dramaria"
              className="crossword-clue-image"
            />{" "}
            <span>GAMBAR 1</span>
          </div>
          <div className="crossword-clue">
            <img src={tragedi} alt="Tragedi" className="crossword-clue-image" />{" "}
            <span>GAMBAR 2</span>
          </div>
          <div className="crossword-clue">
            <img src={opera} alt="Opera" className="crossword-clue-image" />{" "}
            <span>GAMBAR 3</span>
          </div>
          <div className="crossword-clue">
            <img src={dagelan} alt="Dagelan" className="crossword-clue-image" />{" "}
            <span>GAMBAR 4</span>
          </div>
          <div className="crossword-clue">
            <img src={teater} alt="Teater" className="crossword-clue-image" />{" "}
            <span>GAMBAR 5</span>
          </div>
        </div>
      </div>
      {isCorrect && (
        <div className="text-center">
          <button onClick={handleNextPage} className="btn btn-primary mt-4">
            Next Page
          </button>
        </div>
      )}
    </div>
  );
}
