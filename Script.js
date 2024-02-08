document.getElementById("myLinks").style.display = "none";
const menuBar = document.querySelector(".js-menu");
const menu = document.getElementById("myLinks");
menuBar.addEventListener("click", () => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
    menu.classList.remove("logo2");
  } else {
    menu.style.display = "block";
    menu.classList.add("logo2");
  }
});

const subscribeButton = document.querySelector(".js-subscribe-button");

subscribeButton.addEventListener("click", () => {
  if (subscribeButton.innerHTML === "Subscribe") {
    subscribeButton.innerText = "Subscribed";
    subscribeButton.classList.add("subscribe_button");
  } else {
    subscribeButton.innerText = "Subscribe";
    subscribeButton.classList.remove("subscribe_button");
  }

});
