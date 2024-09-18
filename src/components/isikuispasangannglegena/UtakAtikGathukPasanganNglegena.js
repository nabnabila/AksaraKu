import React, { useState } from "react";
import Crossword from "@jaredreisinger/react-crossword";
import { useNavigate } from "react-router-dom";
import punjering from "../../assets/image/kuis/punjering.png";
import cerkak from "../../assets/image/kuis/cerkak.png";
import cembung from "../../assets/image/kuis/cembung.png";
import swara from "../../assets/image/kuis/swara.png";
import waktu from "../../assets/image/kuis/waktu.png";
import "../../style/Crossword.css";

const data = {
  across: {
    2: {
      clue: "GAMBAR 2",
      answer: "CEMBUNG",
      row: 4,
      col: 7,
    },
    4: {
      clue: "GAMBAR 4",
      answer: "PUNJERING",
      row: 9,
      col: 0,
    },
  },
  down: {
    1: {
      clue: "GAMBAR 1",
      answer: "SWARA",
      row: 0,
      col: 11,
    },
    2: {
      clue: "GAMBAR 2",
      answer: "CERKAK",
      row: 4,
      col: 7,
    },
    3: {
      clue: "GAMBAR 3",
      answer: "WAKTU",
      row: 5,
      col: 1,
    },
  },
};

export default function UtakAtikGathukPasanganNglegena() {
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  const handleCrosswordCorrect = () => {
    setIsCorrect(true);
  };

  const handleNextPage = () => {
    navigate("/pasanganaksaranglegena/kuis2/nyocokakegambarpasangannglegena");
  };

  return (
    <div className="crossword-contain">
      <h1 className="p-20 m-5 text-center">
        Utak Atik Gathuk Pasangan Nglegena
      </h1>
      <div className="crossword-game-container">
        <div className="crossword" style={{ width: "500px", height: "500px" }}>
          <Crossword data={data} onCrosswordCorrect={handleCrosswordCorrect} />
        </div>
        <div className="crossword-clues-with-images">
          <div className="crossword-clue">
            <img src={swara} alt="Swara" className="crossword-clue-image" />{" "}
            <span>1 Down</span>
          </div>
          <div className="crossword-clue">
            <img src={cerkak} alt="cerkak" className="crossword-clue-image" />{" "}
            <span>2 Down</span>
          </div>
          <div className="crossword-clue">
            <img src={waktu} alt="waktu" className="crossword-clue-image" />{" "}
            <span>3 Down</span>
          </div>
          <div className="crossword-clue">
            <img src={cembung} alt="cembung" className="crossword-clue-image" />{" "}
            <span>2 Across</span>
          </div>
          <div className="crossword-clue">
            <img
              src={punjering}
              alt="Punjering"
              className="crossword-clue-image"
            />{" "}
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
