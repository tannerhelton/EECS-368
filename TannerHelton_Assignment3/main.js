document.addEventListener("DOMContentLoaded", () => {
  var btn1 = document.getElementById("1");
  var btn2 = document.getElementById("2");
  var btn3 = document.getElementById("3");
  var tab = document.querySelector("div>p");
  tab.innerText = "Tab A";
  btn1.addEventListener("click", () => {
    tab.innerText = "Tab A";
    btn1.classList.add("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
  });
  btn2.addEventListener("click", () => {
    tab.innerText = "Tab B";
    btn2.classList.add("active");
    btn1.classList.remove("active");
    btn3.classList.remove("active");
  });
  btn3.addEventListener("click", () => {
    tab.innerText = "Tab C";
    btn3.classList.add("active");
    btn2.classList.remove("active");
    btn1.classList.remove("active");
  });
});
