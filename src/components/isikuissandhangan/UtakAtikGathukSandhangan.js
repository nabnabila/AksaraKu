import React, { useState } from "react";
import Crossword from "@jaredreisinger/react-crossword";
import { useNavigate } from "react-router-dom";
import ketoprak from "../../assets/image/kuis/ketropak.png";
import janger from "../../assets/image/kuis/janger.png";
import wayang from "../../assets/image/kuis/waayang.png";
import lerok from "../../assets/image/kuis/lerok.png";
import ludruk from "../../assets/image/kuis/ludruk.png";
import "../../style/Crossword.css";

const data = {
  across: {
    3: {
      clue: "GAMBAR 3", // Placeholder clue
      answer: "WAYANG",
      row: 5,
      col: 0,
    },
    4: {
      clue: "GAMBAR 4", // Placeholder clue
      answer: "LUDRUK",
      row: 7,
      col: 2,
    },
  },
  down: {
    1: {
      clue: "GAMBAR 1", // Placeholder clue
      answer: "KETOPRAK",
      row: 0,
      col: 7,
    },
    2: {
      clue: "GAMBAR 2", // Placeholder clue
      answer: "JANGER",
      row: 2,
      col: 5,
    },
    4: {
      clue: "GAMBAR 4", // Placeholder clue
      answer: "LEROK",
      row: 7,
      col: 2,
    },
  },
};

export default function UtakAtikGathukSandhangan() {
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  const handleCrosswordCorrect = () => {
    setIsCorrect(true);
  };

  const handleNextPage = () => {
    navigate("/sandhangan/kuis5/nyocokakegambarsandhangan");
  };

  return (
    <div className="crossword-contain">
      <br />
      <h1 className="p-20 m-5 text-center">Utak Atik Gathuk Sandhangan</h1>
      <div className="crossword-game-container">
        <div className="crossword">
          <Crossword data={data} onCrosswordCorrect={handleCrosswordCorrect} />
        </div>
        <div className="crossword-clues-with-images">
          <div className="crossword-clue">
            <img
              src={ketoprak}
              alt="Ketoprak"
              className="crossword-clue-image"
            />{" "}
            <span>1 Down</span>
          </div>
          <div className="crossword-clue">
            <img src={janger} alt="Janger" className="crossword-clue-image" />{" "}
            <span>2 Down</span>
          </div>
          <div className="crossword-clue">
            <img src={wayang} alt="Wayang" className="crossword-clue-image" />{" "}
            <span>3 Across</span>
          </div>
          <div className="crossword-clue">
            <img src={lerok} alt="lerok" className="crossword-clue-image" />{" "}
            <span>4 Down</span>
          </div>
          <div className="crossword-clue">
            <img src={ludruk} alt="ludruk" className="crossword-clue-image" />{" "}
            <span>4 Across</span>
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
