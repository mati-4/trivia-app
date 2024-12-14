import  { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Questions from "./components/Questions/Questions";
import Results from "./components/Results/Results";

function App() {
  const [nickname, setNickname] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple")  // Preguntas fáciles
      .then((response) => response.json())
      .then((data) => {
        const formattedQuestions = data.results.map((q) => ({
          question: q.question,
          options: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5),
          correctAnswer: q.correct_answer,
        }));
        setQuestions(formattedQuestions);
      })
      .catch((error) => console.error("Error al cargar las preguntas:", error));
  }, []);
  

  const handleStart = (name) => {
    setNickname(name);
  };

  const handleAnswer = (answer) => {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    // Mostrar la respuesta correcta como alerta
    if (answer === correctAnswer) {
      alert(`¡Correcto! La respuesta es: ${correctAnswer}`);
      setScore((prev) => prev + 1); // Incrementar el puntaje
    } else {
      alert(`¡Incorrecto! La respuesta correcta era: ${correctAnswer}`);
    }
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <div>
      <Header />
      {!nickname ? (
        <Home onStart={handleStart} />
      ) : !isFinished ? (
        <Questions
          question={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
          questionIndex={currentQuestionIndex}
          totalQuestions={questions.length}
        />
      ) : (
        <Results score={score} totalQuestions={questions.length} nickname={nickname} />
      )}
    </div>
  );
}

export default App;

