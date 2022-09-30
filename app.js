// const api = "https://v2.jokeapi.dev/joke/Any?safe-mode";
const urlApi =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
  const bodyContent = `
  <div class="jokes-container">
  <div>
  <span class = "header">JOKES </span>
  <span>&#129315; &#129315; </span>
  </div>
 
  <p class="category"></p>
  <h3 class="joke-setup"></h3>
  <h1 class="joke-delivery"></h1>
  <p class="joke-status"></p>
  <img src="./images/loader_gif_1.gif" class="loader" />
  <button class="joke-btn">Generate Random Jokes</button>
</div>`;
const pageCont = document.querySelector(".page-container")
pageCont.innerHTML = bodyContent;
const category = document.querySelector(".category");
const jokeBtn = document.querySelector(".joke-btn");
const jokeSetUp = document.querySelector(".joke-setup");
const jokeDelivery = document.querySelector(".joke-delivery");
const loaderGif = document.querySelector(".loader");
const jokeStatus = document.querySelector(".joke-status");

jokeBtn.addEventListener("click", () => {
  loaderGif.style.display = "block";
  fetch(urlApi) //fatch the data
    .then((res) => {
      return res.json(); //convert the res to json
    })
    .then((data) => {
      //the converted data
      loaderGif.style.display = "none";
      if (data.type == "single") {
        jokeDelivery.textContent = data.joke;
        category.textContent = data.category;
        jokeStatus.textContent = data.safe;
        // jokeSetUp.textContent = "";
      } else {
        category.textContent = data.category;
        jokeFlags.textContent = data.setup;
        jokeDelivery.textContent = data.delivery;
      }
    });
});
