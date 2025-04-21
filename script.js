let respuestas = {};
let totalCorrectas = 0;

function responder(pregunta, respuesta) {
  respuestas[pregunta] = respuesta;

  if (Object.keys(respuestas).length === 3) {
    evaluar();
  }
}

function evaluar() {
  totalCorrectas = 0;

  if (respuestas[1] === "interes") totalCorrectas++;
  if (respuestas[2] === "depende") totalCorrectas++;
  if (respuestas[3] === "pagando al día") totalCorrectas++;

  const resultado = document.getElementById("resultado");

  if (totalCorrectas === 3) {
    resultado.innerHTML = "🎉 ¡Excelente! TuLuca está orgullosa de ti 🐷💖";
  } else if (totalCorrectas === 2) {
    resultado.innerHTML = "😃 ¡Muy bien! Pero TuLuca cree que puedes mejorar aún más.";
  } else {
    resultado.innerHTML = "😅 Sigue intentando. TuLuca te acompaña siempre, ¡no te rindas!";
  }
}
