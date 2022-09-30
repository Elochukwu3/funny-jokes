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

const pageCont = document.querySelector("#page-Wrapper")
pageCont.innerHTML = bodyContent;
const categoryDisplay = document.querySelector(".category");
const jokeBtn = document.querySelector(".joke-btn");
const jokeSetUp = document.querySelector(".joke-setup");
const jokeDelivery = document.querySelector(".joke-delivery");
const loaderGif = document.querySelector('.loader');
const jokeStatus = document.querySelector('.joke-status');

jokeBtn.addEventListener('click', async() => {
  loaderGif.style.display = "block";

  //fetch the data
  const res = await fetch(urlApi);
  const data = await res.json();
  const { joke, category, safe, setup, delivery, type } = data;
  loaderGif.style.display = "none";
  if (type == "single") {
    jokeDelivery.textContent = joke;
    categoryDisplay.textContent = category;
    jokeStatus.textContent = safe;
  } else {
    categoryDisplay.textContent = category;
    jokeFlags.textContent = setup;
    jokeDelivery.textContent = delivery;
  }
    
});
