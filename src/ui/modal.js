/**
 * Certificate viewer. Any element with `data-cert-img` opens the modal:
 * - with a path → shows the image (falls back to the notice if it fails to load)
 * - empty       → shows the "certificate unavailable" notice
 * Closes on backdrop/close button/Escape and returns focus to the opener.
 */
let opener = null;

const getModal = () => document.getElementById("cert-modal");

function open(trigger) {
  const modal = getModal();
  if (!modal) return;
  const img = modal.querySelector(".modal-img");
  const title = trigger.dataset.certTitle || "";
  const src = (trigger.dataset.certImg || "").trim();

  opener = trigger;
  modal.querySelector(".modal-title").textContent = title;
  img.alt = title;
  img.onerror = () => modal.classList.add("is-empty");
  if (src) {
    modal.classList.remove("is-empty");
    img.src = src;
  } else {
    img.removeAttribute("src");
    modal.classList.add("is-empty");
  }

  modal.hidden = false;
  modal.classList.add("is-open");
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-close")?.focus();
}

function close() {
  const modal = getModal();
  if (!modal?.classList.contains("is-open")) return;
  const img = modal.querySelector(".modal-img");
  img.onerror = null;
  img.removeAttribute("src");
  modal.classList.remove("is-open");
  modal.hidden = true;
  document.body.classList.remove("modal-open");
  opener?.focus();
  opener = null;
}

export function initModal() {
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-cert-img]");
    if (trigger) {
      event.preventDefault();
      open(trigger);
    } else if (event.target.closest("#cert-modal [data-close]")) {
      close();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });
}
