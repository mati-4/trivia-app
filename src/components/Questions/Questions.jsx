// components/Questions.jsx
import React from "react";

function Questions({ question, onAnswer, questionIndex, totalQuestions }) {
  if (!question) return <p>Cargando preguntas...</p>;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>
        Pregunta {questionIndex + 1} de {totalQuestions}
      </h2>
      <p dangerouslySetInnerHTML={{ __html: question.question }} />
      <div>
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            style={{
              display: "block",
              margin: "10px auto",
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Questions;
