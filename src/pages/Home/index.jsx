import React, { useState, useEffect } from "react";

import "./styles.css";

import { Card } from "../../components/Card";

export function Home() {
  const [studantName, setStudantName] = useState("");

  const [studants, setStudants] = useState([]);

  const [user, setUser] = useState({ name: "", avatar: "" });

  function handlerStudant() {
    console.log("btn was clicked");
    const newStudant = {
      name: studantName,
      time: new Date().toLocaleDateString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };
    setStudants((prevState) => [...prevState, newStudant]);
  }

  useEffect(() => {
    fetch("https://api.github.com/users/linox2000")
      .then((response) => response.json())
      .then((data) => {
        setUser({
          name: data.name,
          avatar: data.avatar_url,
        });
      });
  }, []);
  return (
    <div className="container">
      <header>
        <h1>Lista de Prensenca</h1>
        <div>
          <strong>{user.name}</strong>
        </div>
        <img src={user.avatar} alt="foto de perfiel" />
      </header>
      <input
        type="text"
        placeholder="Digite o nome.."
        onChange={(e) => setStudantName(e.target.value)}
      />
      <button type="submit" onClick={handlerStudant}>
        Adicionar
      </button>

      {studants.map((studant) => (
        <Card key={studant.time} name={studant.name} time={studant.time} />
      ))}
    </div>
  );
}
