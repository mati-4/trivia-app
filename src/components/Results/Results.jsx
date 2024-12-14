// components/Results.jsx
import React from "react";

function Results({ score, totalQuestions, nickname }) {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Resultados</h2>
      <p>
        ¡Bien hecho, {nickname}!
        <br />
        Tu puntuación: {score} de {totalQuestions}
      </p>
      <button
        onClick={() => window.location.reload()}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Jugar de nuevo
      </button>
    </div>
  );
}

export default Results;
