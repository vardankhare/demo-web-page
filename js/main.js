const modal = document.getElementById("modal");
const open = document.getElementById("openModal");
const close = document.getElementById("closeModal");

open.onclick = () => modal.classList.remove("hidden");
close.onclick = () => modal.classList.add("hidden");

window.onclick = (e) => {
  if (e.target === modal) modal.classList.add("hidden");
};