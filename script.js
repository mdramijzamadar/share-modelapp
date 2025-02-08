const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const openModal = () => {
  console.log("modal open");
  //   modal.style.scale = "1";
  modal.classList.add("active");
  modal.classList.add("overlayActive");
};

const closeModal = () => {
  console.log("modal close");
  //   modal.style.scale = "0";
  modal.classList.remove("active");
  modal.classList.remove("overlayActive");
};
