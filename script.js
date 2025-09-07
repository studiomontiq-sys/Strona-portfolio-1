// Wyświetlanie powitania w konsoli
console.log("Witaj na stronie Montiq!");

// Przycisk „Powrót do góry”
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.createElement("button");
  btn.innerText = "⬆ Powrót do góry";
  btn.style.position = "fixed";
  btn.style.bottom = "20px";
  btn.style.right = "20px";
  btn.style.padding = "10px 15px";
  btn.style.display = "none";
  btn.style.border = "none";
  btn.style.borderRadius = "5px";
  btn.style.background = "#0ff";
  btn.style.color = "#000";
  btn.style.cursor = "pointer";
  document.body.appendChild(btn);

  // Pokaż przycisk po scrollu
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });

  // Kliknięcie → powrót do góry
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
