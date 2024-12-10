

async function getJoke() {
  try {
    // Fetch joke from the JokeAPI
    const response = await fetch('https://v2.jokeapi.dev/joke/Programming');
    const data = await response.json();

    // Check if the response contains a joke
    if (data.type === '') {
      document.getElementById('joke').innerText = data.joke;
    } else {
      document.getElementById('joke').innerText = `${data.setup} - ${data.delivery}`;
    }
  } catch (error) {
    document.getElementById('joke').innerText = "Sorry, couldn't fetch a joke!";
  }
}