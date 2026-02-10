const infoBtn = document.querySelector(".info-btn");
const info = document.querySelector(".info-cont");
const mainInfo = document.querySelector(".main-info");

infoBtn.addEventListener("click", () => {
  //info.scrollIntoView();
  if (info.classList.contains("info-cont-active")) {
    info.classList.remove("info-cont-active");
  } else {
    setTimeout(() => {
      info.classList.add("info-cont-active");
    }, 1000);
  }

  mainInfo.classList.toggle("main-info-active");
});
