// 📣 Kohorten-Popup Funktionen
function showPopup() {
  const popup = document.getElementById("popup-kohorte");
  if (popup) popup.style.display = "block";
}

function closePopup() {
  const popup = document.getElementById("popup-kohorte");
  if (popup) popup.style.display = "none";
}

// 🧠 Popup anzeigen beim Seitenstart + alle 5 Minuten
document.addEventListener("DOMContentLoaded", function () {
  showPopup(); // Sofort beim Laden
  setInterval(showPopup, 300000); // Alle 300.000ms = 5 Minuten erneut

  // 📞 Hotline-Button aktivieren
const hotlineButton = document.getElementById("hotline-button");
const hotlinePopup = document.getElementById("popup-hotline");
const closeHotline = document.getElementById("close-hotline");

if (hotlineButton && hotlinePopup) {
  hotlineButton.addEventListener("click", function () {
    document.getElementById("busy-sound").play();
    hotlinePopup.classList.remove("hidden");
  });
}

if (closeHotline && hotlinePopup) {
  closeHotline.addEventListener("click", function () {
    hotlinePopup.classList.add("hidden");
  });
}
    });
  }
});

// ⏱️ Synchronisierter Countdown ab 16:00 Uhr, alle 10 Minuten
function updateCountdown() {
  const timerElement = document.getElementById("timer");
  if (!timerElement) return;

  const now = new Date();
  const start = new Date();
  start.setHours(16, 0, 0, 0); // Startzeit: 16:00 Uhr

  if (now < start) {
    timerElement.textContent = "⏳ Noch nicht gestartet";
    return;
  }

  const elapsed = Math.floor((now - start) / 1000); // Sekunden seit 16 Uhr
  const remainder = 600 - (elapsed % 600); // 600 Sek = 10 Min Intervall
  const minutes = Math.floor(remainder / 60);
  const seconds = remainder % 60;

  // Countdown anzeigen
  timerElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// ⏱️ Countdown jede Sekunde aktualisieren
setInterval(updateCountdown, 1000);


