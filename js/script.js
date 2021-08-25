document.getElementById("click_hamburguer").onclick = function () {
  clicarMenuAbrir();
};

document.getElementById("click_close").onclick = function () {
  clicarMenuFechar();
};

function clicarMenuAbrir() {
  document.getElementById("nav_list").style.display = "block";
  document.getElementById("click_hamburguer").style.display = "none";
  document.getElementById("click_close").style.display = "flex";
}

function clicarMenuFechar() {
  document.getElementById("nav_list").style.display = "none";
  document.getElementById("click_close").style.display = "none";
  document.getElementById("click_hamburguer").style.display = "flex";
}
