"use server";

export async function answer(_currentState: unknown, formData: FormData) {
  const answer = formData.get("answer");

  if (answer === "Itália") {
    alert("Parabéns! Você acertou! O presente está em: https://bit.ly/3B5B3h9");
  } else {
    alert("Resposta incorreta! Tente novamente.");
  }
}
