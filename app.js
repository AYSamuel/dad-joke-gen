// Using the Fetch API, with async/await.
const jokeBox = document.querySelector('#jokes');
const generate = document.querySelector('#generate');
const para = document.createElement('p');
jokeBox.hidden = true;

const loadJokes = async () => {
  try {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    });

    const data = await response.json();
    const joke = data.joke;
    para.innerText = joke;
    jokeBox.appendChild(para);
  } catch {
    para.innerText = "NO JOKES CURRENTLY, AND THAT'S NOT FUNNY!!!";
    jokeBox.appendChild(para);
  }
};
generate.addEventListener('click', () => {
  jokeBox.hidden = false;
  loadJokes();
});
