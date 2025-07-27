const setupEl = document.getElementById("setup");
const punchlineEl = document.getElementById("punchline");
const jokeBox = document.getElementById("joke-box");

async function getJoke() {
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const joke = await response.json();

    jokeBox.classList.remove("fade");
    void jokeBox.offsetWidth;
    jokeBox.classList.add("fade");

    setupEl.textContent = joke.setup;
    punchlineEl.textContent = joke.punchline;
  } catch {
    setupEl.textContent = "Oops! Couldn't load a joke.";
    punchlineEl.textContent = "";
  }
}

window.onload = getJoke;
