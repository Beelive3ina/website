const body = document.querySelector("body");
const alert = document.querySelector(".alert");
const alertBtn = document.querySelector(".alert div button");

if(navigator.userAgent.toLowerCase().match(/mobile/i)){
    alert.style.display = "flex";
    body.style.overflowY = "hidden";

}
alertBtn.addEventListener("click", () => {
    alert.style.display = "none";
    body.style.overflowY = "scroll";
})
