const jokeText = document.getElementById('joke');
const button = document.getElementById('getJokeBtn');

button.addEventListener('click', async () => {
  jokeText.textContent = 'Loading...';
  try {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json'
      }
    });
    const data = await response.json();
    jokeText.textContent = data.joke;
  } catch (error) {
    jokeText.textContent = 'Failed to fetch joke. Please try again.';
  }
});