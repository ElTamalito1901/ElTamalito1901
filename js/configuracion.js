function goBack() {
  window.history.back();
}

function testVoice() {
  const voiceEnabled = document.getElementById('voiceReading').checked;
  const voiceType = document.getElementById('voiceType').value;
  const voiceSpeed = document.getElementById('voiceSpeed').value;

  if (!voiceEnabled) {
    alert('La lectura de voz está desactivada. Actívala para probar.');
    return;
  }

  let testText = "Bienvenido a Sazón. Descubre tu próximo plato favorito y disfrútalo en familia.";

  if (voiceType === 'mariano-closs') {
    testText = "¡Y gooooool de sabor! Sazón presenta una jugada magistral con estos platos que van directo al ángulo del paladar. ¡Qué manera de definir el hambre!";
  }

  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(testText);
    utterance.rate = parseFloat(voiceSpeed);
    utterance.lang = 'es-AR';

    if (voiceType === 'mariano-closs') {
      utterance.pitch = 0.7;
      utterance.rate = Math.max(0.7, parseFloat(voiceSpeed) * 0.8);
      utterance.lang = 'es-AR';
    } else if (voiceType === 'male') {
      utterance.pitch = 0.8;
    }

    const voices = speechSynthesis.getVoices();
    if (voices.length > 0) {
      const spanishVoices = voices.filter(v =>
        v.lang.startsWith('es') || v.lang.includes('ES') || v.lang.includes('AR')
      );

      let preferredVoice = null;
      if (spanishVoices.length > 0) {
        if (voiceType === 'mariano-closs') {
          preferredVoice = spanishVoices.find(v =>
            v.lang.includes('AR') ||
            v.name.toLowerCase().includes('argent')
          );
        } else if (voiceType === 'male') {
          preferredVoice = spanishVoices.find(v =>
            v.name.toLowerCase().includes('male') ||
            v.name.toLowerCase().includes('masculin')
          );
        } else {
          preferredVoice = spanishVoices.find(v =>
            v.name.toLowerCase().includes('female') ||
            v.name.toLowerCase().includes('femenin')
          );
        }

        if (!preferredVoice) {
          preferredVoice = spanishVoices[0];
        }
      }

      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }
    }

    speechSynthesis.speak(utterance);
  } else {
    alert('Tu navegador no soporta la síntesis de voz.');
  }
}

function saveSettings() {
  const voiceReading = document.getElementById('voiceReading').checked;
  const voiceType = document.getElementById('voiceType').value;
  const voiceSpeed = document.getElementById('voiceSpeed').value;
  const textSize = document.getElementById('textSize').value;
  const highContrast = document.getElementById('highContrast').checked;

  const settings = {
    voiceReading,
    voiceType,
    voiceSpeed,
    textSize,
    highContrast
  };

  localStorage.setItem("sazonSettings", JSON.stringify(settings));

  // Aplicar configuración visual
  document.body.classList.remove('text-small', 'text-normal', 'text-large');
  document.body.classList.toggle('high-contrast', highContrast);

  if (highContrast) {
    document.body.classList.add('text-large');
  } else {
    document.body.classList.add(`text-${textSize}`);
  }

  alert('Configuración guardada exitosamente!');
}

// Actualizar texto dinámico de velocidad
document.getElementById('voiceSpeed').addEventListener('input', function (e) {
  const speed = parseFloat(e.target.value);
  const description = e.target.parentElement.previousElementSibling.querySelector('.config-description');
  description.textContent = `Velocidad: ${speed}x`;
});

// Cargar configuración al inicio
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("sazonSettings");
  if (saved) {
    const settings = JSON.parse(saved);

    document.getElementById('voiceReading').checked = settings.voiceReading;
    document.getElementById('voiceType').value = settings.voiceType;
    document.getElementById('voiceSpeed').value = settings.voiceSpeed;
    document.getElementById('textSize').value = settings.textSize;
    document.getElementById('highContrast').checked = settings.highContrast;

    document.body.classList.add(`text-${settings.textSize}`);
    if (settings.highContrast) {
      document.body.classList.add("high-contrast");
    }
  }
});

// Precarga de voces en algunos navegadores
if ('speechSynthesis' in window) {
  speechSynthesis.onvoiceschanged = function () {
    speechSynthesis.getVoices();
  };

  setTimeout(() => {
    speechSynthesis.getVoices();
  }, 100);
}
