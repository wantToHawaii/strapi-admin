window.addEventListener("load", function () {
  const body = document.querySelector("body");
  const pre = document.createElement("pre");
  fetch("http://localhost:1337/home", { credentials: "same-origin" })
    .then((response) => response.json())
    .then((data) => {
      pre.textContent = JSON.stringify(data, null, 2);
      body.appendChild(pre);
    })
    .catch((error) => console.error(error));
});
