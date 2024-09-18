import React, { useState } from "react";
import Crossword from "@jaredreisinger/react-crossword";
import { useNavigate } from "react-router-dom";
import bn from "../../assets/image/kuis/bondannusantara.png";
import pt from "../../assets/image/kuis/pangerantimur.png";
import kt from "../../assets/image/kuis/ketopraktobong.png";
import "../../style/Crossword.css";

const data = {
  across: {
    2: {
      clue: "GAMBAR 2",
      answer: "PANGERANTIMUR",
      row: 5,
      col: 4,
    },
    3: {
      clue: "GAMBAR 3",
      answer: "KETOPRAKTOBONG",
      row: 9,
      col: 0,
    },
  },
  down: {
    1: {
      clue: "GAMBAR 1",
      answer: "BONDANNUSANTARA",
      row: 9,
      col: 0,
    },
  },
};

export default function UtakAtikGathukPasanganMurda() {
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  const handleCrosswordCorrect = () => {
    setIsCorrect(true);
  };

  const handleNextPage = () => {
    navigate("/aksarapasanganmurda/kuis4/nyocokakegambarpasanganmurda");
  };

  return (
    <div className="crossword-contain">
      <h1 className="p-20 m-5 text-center">
        Utak Atik Gathuk Pasangan Aksara Murda
      </h1>
      <div className="crossword-game-container">
        <div className="crossword" style={{ width: "500px", height: "500px" }}>
          <Crossword data={data} onCrosswordCorrect={handleCrosswordCorrect} />
        </div>
        <div className="crossword-clues-with-images">
          <div className="crossword-clue">
            <img
              src={bn}
              alt="BondanNusantara"
              className="crossword-clue-image"
            />{" "}
            <span>GAMBAR 1</span>
          </div>
          <div className="crossword-clue">
            <img
              src={pt}
              alt="PangeranTimur"
              className="crossword-clue-image"
            />{" "}
            <span>GAMBAR 2</span>
          </div>
          <div className="crossword-clue">
            <img
              src={kt}
              alt="KetoprakTobong"
              className="crossword-clue-image"
            />{" "}
            <span>GAMBAR 3</span>
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
