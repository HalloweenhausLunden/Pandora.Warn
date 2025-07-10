console.log("JavaScript wird geladen");

// Countdown-Funktion
const timerElement = document.getElementById("timer");

function getNextInterval() {
  const now = new Date();
  const minutes = now.getMinutes();
  const nextMinutes = Math.ceil(minutes / 10) * 10;
  const target = new Date(now);
  target.setMinutes(nextMinutes, 0, 0);
  return target;
}

let targetTime = getNextInterval();

function updateCountdown() {
  const now = new Date();
  const diff = targetTime - now;

  if (diff <= 0) {
    targetTime = getNextInterval();
  }

  const hours = Math.floor(diff / 1000 / 60 / 60);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timerElement.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

setInterval(updateCountdown, 1000);

// Alles weitere erst, wenn die Seite vollständig geladen ist
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM ist vollständig geladen!");

  // Hilfe-Hotline
  const hotlineButton = document.getElementById("hotline-button");
  const busySound = document.getElementById("busy-sound");

  if (hotlineButton && busySound) {
    hotlineButton.addEventListener("click", () => {
      busySound.play();
      alert("Alle Leitungen sind besetzt. Bitte warten Sie...");
    });
  }
let infectedCount = 128;
const infectedDisplay = document.getElementById("infected-count");

// Funktion: alle 20 Sekunden neue Infizierte
setInterval(() => {
  const newInfections = Math.floor(Math.random() * 5) + 1; // Zufällig 1–5 neue
  infectedCount += newInfections;
  infectedDisplay.textContent = infectedCount;

  // Optional: Log-Nachricht
  console.log(`Neue Infektionen: ${newInfections}`);
}, 20000);
const specialMessages = document.getElementById("special-messages");

// Liste möglicher Sondermeldungen
const extraAlerts = [
  "🚷 Bahnhof Lunden gesperrt – bitte ausweichen!",
  "🛡️ Sichere Zone an der Grundschule eingerichtet",
  "📡 Funkstation West ausgefallen – Kommunikation gestört",
  "🧪 Heide meldet Katastrohenalarm",
  "🚁 Evakuierungsdrohne gestartet",
  "🩸 Medizinische Hilfsstation am Ärztezentrum überfüllt",
  "🌡️ Warnstufe Rot: Virus breitet sich unkontrolliert aus",
  "🔒 Lunden wurde abgeriegelt – bleiben Sie ruhig!",
  "⛔ Explosion am Heider Bahnhof berichtet.",
  "🧟 Erste Infizierte in Lunden gesichtet.",
  "🚨 Bitte bilden Sie kleine Kohorten von ca. 5 Personen."
];
setInterval(() => {
  const alertSound = document.getElementById("alert-sound");

setInterval(() => {
  const randomIndex = Math.floor(Math.random() * extraAlerts.length);
  const newAlert = document.createElement("li");
  newAlert.textContent = extraAlerts[randomIndex];
  specialMessages.prepend(newAlert);

  // Maximal 5 Meldungen sichtbar halten
  if (specialMessages.children.length > 5) {
    specialMessages.removeChild(specialMessages.lastChild);
  }

  // 🎵 Ton abspielen
  if (alertSound) {
    alertSound.currentTime = 0; // von vorn starten
    alertSound.play();
  }
}, 25000);
  const randomIndex = Math.floor(Math.random() * extraAlerts.length);
  const newAlert = document.createElement("li");
  newAlert.textContent = extraAlerts[randomIndex];
  specialMessages.prepend(newAlert);

  // Optional: Nur die 5 neuesten Meldungen anzeigen
  if (specialMessages.children.length > 5) {
    specialMessages.removeChild(specialMessages.lastChild);
  }
}, 25000); // alle 25 Sekunden neue Meldung
  // Infektions-Symptome anzeigen
  const infoButton = document.getElementById("info-button");
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("close-popup");

  if (infoButton && popup && closePopup) {
    infoButton.addEventListener("click", () => {
      popup.style.display = "block";
    });

    closePopup.addEventListener("click", () => {
      popup.style.display = "none";
    });
  } else {
    console.warn("Popup-Elemente nicht gefunden");
  }
});