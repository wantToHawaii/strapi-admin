window.addEventListener("load", function () {
  fetch("http://localhost:1337/home", { credentials: "same-origin" })
    .then((response) => response.json())
    .then((data) => console.log("data: ", data))
    .catch((error) => console.error(error));
});
