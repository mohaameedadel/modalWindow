let showModal = document.querySelectorAll(".show-modal");

let modal = document.querySelector(".modal");

let closeModal = document.querySelector(".close-modal");

let overlay = document.querySelector(".overlay");

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", function () {
    modal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  });

  closeModal.addEventListener("click", function () {
    modal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  });

  overlay.addEventListener("click", function () {
    modal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      modal.classList.add("hidden");
      overlay.classList.add("hidden");
    }
  });
}
