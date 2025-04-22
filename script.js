const screens = ["intro-screen", "enigma1", "enigma2", "enigma3", "enigma4"];
let currentScreen = 0;
let progress = 0;

const progressBar = document.getElementById("progress-bar");
const correctSound = document.getElementById("correct-sound");

function showScreen(index) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(screens[index]).classList.add("active");
  currentScreen = index;
  progressBar.style.width = `${(index / (screens.length - 1)) * 100}%`;
}

// Pantalla de inicio
document.getElementById("start-button").onclick = () => showScreen(1);

// Enigma 1
document.getElementById("check1").onclick = () => {
  const value = parseFloat(document.getElementById("price1").value);
  if (value === 362.99) {
    correctSound.play();
    document.getElementById("feedback1").textContent = "¡Correcto!";
    document.getElementById("check1").remove();
    document.getElementById("next1").classList.remove("hidden");
  } else {
    document.getElementById("feedback1").textContent = "Vuelve a intentarlo. Recuerda el IVA es del 21% 😉";
  }
};

document.getElementById("to-enigma2").onclick = () => showScreen(2);

// Enigma 2
document.getElementById("check2").onclick = () => {
  const value = parseFloat(document.getElementById("price2").value);
  if (value === 237) {
    correctSound.play();
    document.getElementById("feedback2").textContent = "¡Muy bien!";
    document.getElementById("check2").remove();
    document.getElementById("next2").classList.remove("hidden");
  } else {
    document.getElementById("feedback2").textContent = "¡Inténtalo de nuevo! ¿Seguro que viste bien el descuento? 😅";
  }
};

document.getElementById("to-enigma3").onclick = () => showScreen(3);

// Enigma 3
document.getElementById("check3").onclick = () => {
  const value = parseFloat(document.getElementById("remaining").value);
  if (value === 221.76) {
    correctSound.play();
    document.getElementById("feedback3").textContent = "¡Perfecto!";
    document.getElementById("check3").remove();
    document.getElementById("next3").classList.remove("hidden");
  } else {
    document.getElementById("feedback3").textContent = "Algo falla, revisa esos porcentajes... 🧠";
  }
};

document.getElementById("to-enigma4").onclick = () => showScreen(4);

// Enigma 4
document.querySelectorAll(".option").forEach(btn => {
  btn.onclick = () => {
    if (btn.dataset.answer === "1") {
      correctSound.play();
      document.getElementById("feedback4-1").textContent = "¡Correcto!";
      document.getElementById("question2").classList.remove("hidden");
      btn.disabled = true;
    } else {
      document.getElementById("feedback4-1").textContent = "¡Oops! Esa opción te sale más cara 😉";
    }
  };
});

document.getElementById("check4-2").onclick = () => {
  const val = parseFloat(document.getElementById("monthly").value);
  if (val === 41.08) {
    correctSound.play();
    document.getElementById("feedback4-2").textContent = "¡Muy bien!";
    document.getElementById("question3").classList.remove("hidden");
  } else {
    document.getElementById("feedback4-2").textContent = "Esa mensualidad no cuadra... 🧐";
  }
};

document.getElementById("check4-3").onclick = () => {
  const val = parseFloat(document.getElementById("extra").value);
  if (val === 26.07) {
    correctSound.play();
    document.getElementById("feedback4-3").textContent = "¡Has resuelto todo!";
    document.getElementById("final-step").classList.remove("hidden");
  } else {
    document.getElementById("feedback4-3").textContent = "Hmm... ¿Seguro que has sumado bien? 😆";
  }
};
