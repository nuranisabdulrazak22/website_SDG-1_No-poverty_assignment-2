
(() => {
  const burger = document.getElementById("burger");
  const drop = document.getElementById("drop");
  if (!burger || !drop) return;

  function openMenu(){
    drop.hidden = false;
    burger.setAttribute("aria-expanded", "true");
  }
  function closeMenu(){
    drop.hidden = true;
    burger.setAttribute("aria-expanded", "false");
  }

  burger.addEventListener("click", () => {
    const expanded = burger.getAttribute("aria-expanded") === "true";
    expanded ? closeMenu() : openMenu();
  });

  drop.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;
    closeMenu();
  });

  document.addEventListener("click", (e) => {
    if (e.target.closest(".h")) return;
    closeMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
})();

// =========================
// Donation amount select
// =========================
(() => {
  const buttons = Array.from(document.querySelectorAll(".amount"));
  const email = document.getElementById("donationEmail");
  const btn = document.getElementById("donationBtn");
  const note = document.getElementById("donationNote");

  if (!buttons.length || !email || !btn || !note) return;

  let selected = 10;

  buttons.forEach(b => {
    b.addEventListener("click", () => {
      buttons.forEach(x => x.classList.remove("is-active"));
      b.classList.add("is-active");
      selected = Number(b.dataset.amount || 10);
      note.textContent = `Selected: RM ${selected}`;
    });
  });

  btn.addEventListener("click", () => {
    const val = (email.value || "").trim();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

    if (!ok) {
      note.textContent = "Please enter a valid email.";
      email.focus();
      return;
    }

    note.textContent = `✅ Thank you! RM ${selected} donation (demo) for ${val}`;
  });
})();

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".js-scroll-work");
  if (!btn) return;

  const target = document.querySelector(".tri__workTarget");
  if (target) target.scrollIntoView({ behavior: "smooth", block: "center" });
});


(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const form = document.getElementById("newsForm");
  const email = document.getElementById("newsEmail");
  const note = document.getElementById("newsNote");
  if (!form || !email || !note) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = (email.value || "").trim();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

    if (!ok) {
      note.textContent = "Please enter a valid email.";
      email.focus();
      return;
    }

    note.textContent = "✅ Thanks! You’re subscribed (demo).";
    form.reset();
  });
})();
