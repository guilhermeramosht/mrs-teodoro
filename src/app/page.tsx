"use client";
import Image from "next/image";
import React from "react";

const WRONG_ANSWER_STICKERS = [
  "/assets/teodorinho/1.jpg",
  "/assets/teodorinho/2.jpg",
  "/assets/teodorinho/3.jpg",
  "/assets/teodorinho/4.jpg",
  "/assets/teodorinho/5.jpg",
];

const WRONG_ANSWER_MESSAGES = [
  <span key="message1">Minha doninha errou, vai ter que tentar de novo!</span>,
  <span key="message2">AU AU AU AU! (Tradução: você errou!)</span>,
  <span key="message3">😡😡😡</span>,
];

const rightAnswerSticker = "/assets/teodorinho/acertou.jpg";

const getRandomSticker = () => {
  const randomIndex = Math.floor(Math.random() * WRONG_ANSWER_STICKERS.length);
  return WRONG_ANSWER_STICKERS[randomIndex];
};

const getRandomMessage = () => {
  const randomIndex = Math.floor(Math.random() * WRONG_ANSWER_MESSAGES.length);
  return WRONG_ANSWER_MESSAGES[randomIndex];
};

export default function Home() {
  const [answer, setAnswer] = React.useState<string>("");
  const [sticker, setSticker] = React.useState<string>("");
  const [message, setMessage] = React.useState<React.ReactNode>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (answer.trim().match(/[Ii][Tt][ÁáAa][Ll][ÍíIi][Aa]/g)) {
      setSticker(rightAnswerSticker);
      setMessage(
        <span className="text-green-700">
          Você acertou, Rainha dos Théodreds! A senha do cofre é:{" "}
          <span className="text-bold text-xl">769</span>
        </span>
      );
    } else {
      setSticker(getRandomSticker());
      setMessage(<p className="text-red-600">{getRandomMessage()}</p>);
    }
  };

  return (
    <main className="flex min-h-screen">
      <div className="flex flex-col p-4 max-w-lg mx-auto flex-1">
        <div>
          <h2 className="text-3xl font-extrabold text-center mb-4">
            Finalmente chegou o grande dia! E o seu presente é... Espera: onde
            está o presente?
          </h2>
          <p className="mb-4">
            Os Teodorinhos do Reino dos Théodreds passaram para desejar feliz
            aniversário para a Rainha Teodoro, mas era muito cedo e ela estava
            dormindo! Porém, eles deixaram o presente escondido em algum lugar
            protegido por senha! Para encontrar o presente, a senhora deve antes
            responder:
          </p>
          <p className="mb-4 italic">
            {`"Sou um país em formato de bota, famoso por sua culinária deliciosa e
          suas obras de arte deslumbrantes. Quem sou eu?"`}
          </p>
          <div className="flex flex-col items-center justify-center">
            {sticker && (
              <Image
                width={180}
                height={180}
                className="mb-4"
                src={sticker}
                alt="Sticker"
              />
            )}
            {message && <p className="mb-4 italic text-center">{message}</p>}
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <input
                required
                className="bg-rose-50 p-4 text-amber-700 rounded placeholder:text-amber-700 placeholder:opacity-50 mb-4"
                placeholder="Resposta"
                type="text"
                name="answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
            </div>
            <button
              className="p-4 bg-orange-500 rounded-full font-semibold w-full"
              type="submit"
            >
              Responder
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
