import React, { useState } from "react";
import Crossword from "@jaredreisinger/react-crossword";
import { useNavigate } from "react-router-dom";
import br from "../../assets/image/kuis/brahmandapurana.png";
import bh from "../../assets/image/kuis/bhismaparwa.png";
import pr from "../../assets/image/kuis/prasthanikaparwa.png";
import ku from "../../assets/image/kuis/kunjarakarna.png";
import sa from "../../assets/image/kuis/sabhaparwa.png";
import "../../style/Crossword.css";

const data = {
  across: {
    1: {
      clue: "GAMBAR 1", // Placeholder clue
      answer: "SABHAPARWA",
      row: 0,
      col: 8,
    },
    4: {
      clue: "GAMBAR 4", // Placeholder clue
      answer: "KUNJARAKARNA",
      row: 6,
      col: 0,
    },
    5: {
      clue: "GAMBAR 5", // Placeholder clue
      answer: "PRASTHANIKAPARWA",
      row: 12,
      col: 0,
    },
  },

  down: {
    2: {
      clue: "GAMBAR 2", // Placeholder clue
      answer: "BRAHMANDAPURANA",
      row: 0,
      col: 10,
    },
    3: {
      clue: "GAMBAR 3", // Placeholder clue
      answer: "BHISMAPARWA",
      row: 4,
      col: 13,
    },
  },
};
export default function UtakAtikGathukMurda() {
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  const handleCrosswordCorrect = () => {
    setIsCorrect(true);
  };

  const handleNextPage = () => {
    navigate("/aksaramurda/kuis3/nyocokakegambarmurda");
  };

  return (
    <div className="crossword-contain">
      <h1 className="p-20 m-5 text-center">Utak Atik Gathuk Murda</h1>
      <div className="crossword-game-container">
        <div className="crossword" style={{ width: "500px", height: "500px" }}>
          <Crossword data={data} onCrosswordCorrect={handleCrosswordCorrect} />
        </div>
        <div className="crossword-clues-with-images">
          <div className="crossword-clue">
            <img src={sa} alt="Sabhaparwa" className="crossword-clue-image" />{" "}
            <span>1 Across</span>
          </div>
          <div className="crossword-clue">
            <img
              src={br}
              alt="Brahmandapurana"
              className="crossword-clue-image"
            />{" "}
            <span>2 Down</span>
          </div>
          <div className="crossword-clue">
            <img src={bh} alt="Bhismaparwa" className="crossword-clue-image" />{" "}
            <span>3 Down</span>
          </div>
          <div className="crossword-clue">
            <img src={ku} alt="Kunjarakarna" className="crossword-clue-image" />{" "}
            <span>4 Across</span>
          </div>
          <div className="crossword-clue">
            <img
              src={pr}
              alt="Prasthanikaparwa"
              className="crossword-clue-image"
            />{" "}
            <span>5 Across</span>
          </div>
        </div>
      </div>
      {isCorrect && (
        <div className="text-center">
          <button onClick={handleNextPage} className="btn btn-primary mt-4">
            Lanjut
          </button>
        </div>
      )}
    </div>
  );
}
