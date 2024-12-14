// components/Home.jsx
import  { useState } from "react";

function Home({ onStart }) {
    const [nickname, setNickname] = useState("");

    const handleStartClick = () => {
    if (nickname.trim()) {
        onStart(nickname);
    } else {
        alert("Por favor, ingresa un nickname para continuar.");
    }
    };

    return (
    <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Bienvenido a la Trivia</h2>
        <p>Ingresa tu nickname para comenzar:</p>
        <input
        type="text"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        placeholder="Tu nickname"
        style={{ padding: "10px", fontSize: "16px", width: "80%", maxWidth: "300px" }}
        />
        <br />
        <button
        onClick={handleStartClick}
        style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
        }}
        >
        Comenzar
        </button>
    </div>
  );
}

export default Home;
