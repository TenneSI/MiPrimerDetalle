// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
var lyricsEs = document.querySelector("#lyrics-es");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "At the time", time: 15 },
  { text: "The whisper of birds", time: 18 },
  { text: "Lonely before the sun cried", time: 27 },
  { text: "Fell from the sky", time: 33 },
  { text: "Like water drops", time: 34 },
  { text: "Where I'm now? I don't know why", time: 41 },
  { text: "Nice butterflies in my hands", time: 47 },
  { text: "Too much light for twilight", time: 54 },
  { text: "In the mood for the flowers love", time: 59 },
  { text: "That vision", time: 67 },
  { text: "Really strong, blew my mind", time: 72 },
  { text: "Silence Let me see what it was", time: 78 },
  { text: "I only want to live in clouds", time: 84 },
  { text: "Where I'm now? I don't know why", time: 93 },
  { text: "Nice butterflies in my hands", time: 97 },
  { text: "Too much light for twilight", time: 105 },
  { text: "In the mood for the flowers love", time: 109 },
  { text: "At the time", time: 144 },
  { text: "The whisper of birds", time: 148 },
  { text: "Lonely before the sun cried", time: 153 },
  { text: "Fell from the sky", time: 158 },
  { text: "Like water drops", time: 164 },
  { text: "Where I'm now? I don't know why", time: 169 },
  { text: "Nice butterflies in my hands", time: 176 },
  { text: "Too much light for twilight", time: 183 },
  { text: "In the mood for the flowers", time: 188 },
  { text: "Love.", time: 198 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);

var lyricsDataEs = [
  { text: "En ese momento", time: 15 },
  { text: "El susurro de los pájaros", time: 18 },
  { text: "Solo antes de que el sol llorara", time: 27 },
  { text: "Cayó del cielo", time: 33 },
  { text: "Como gotas de agua", time: 34 },
  { text: "¿Dónde estoy ahora? No sé por qué", time: 41 },
  { text: "Bonitas mariposas en mis manos", time: 47 },
  { text: "Demasiada luz para el crepúsculo", time: 54 },
  { text: "En el ánimo del amor de las flores", time: 59 },
  { text: "Esa visión", time: 67 },
  { text: "Realmente fuerte, me dejó sin palabras", time: 72 },
  { text: "Silencio, déjame ver qué era", time: 78 },
  { text: "Solo quiero vivir en las nubes", time: 84 },
  { text: "¿Dónde estoy ahora? No sé por qué", time: 93 },
  { text: "Bonitas mariposas en mis manos", time: 97 },
  { text: "Demasiada luz para el crepúsculo", time: 105 },
  { text: "En el ánimo del amor de las flores", time: 109 },
  { text: "En ese momento", time: 144 },
  { text: "El susurro de los pájaros", time: 148 },
  { text: "Solo antes de que el sol llorara", time: 153 },
  { text: "Cayó del cielo", time: 158 },
  { text: "Como gotas de agua", time: 164 },
  { text: "¿Dónde estoy ahora? No sé por qué", time: 169 },
  { text: "Bonitas mariposas en mis manos", time: 176 },
  { text: "Demasiada luz para el crepúsculo", time: 183 },
  { text: "En el ánimo del amor de las flores", time: 188 },
  { text: "Amor.", time: 198 },
];

function updateLyricsEs() {
  var time = Math.floor(audio.currentTime);
  var currentLineEs = lyricsDataEs.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLineEs) {
    // Calcula la opacidad para los subtítulos en español
    var fadeInDurationEs = 0.1;
    var opacityEs = Math.min(1, (time - currentLineEs.time) / fadeInDurationEs);

    lyricsEs.style.opacity = opacityEs;
    lyricsEs.innerHTML = currentLineEs.text;
  } else {
    lyricsEs.style.opacity = 0;
    lyricsEs.innerHTML = "";
  }
}

// Sincroniza ambas funciones
setInterval(function () {
  updateLyrics();
  updateLyricsEs();
}, 1000);