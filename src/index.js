const init = () => {
  const inputForm = document.quereySelector(`form`)

  inputForm.addEventListener(`submit`, (event) => {
    event.preventDefault();
    const input = document.querySelector(`input#searchByID`);

    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(response => response.json())
    .then(data => {
        const title = document.quereySelector('section#movieDetails h4');
        const summary = document.quereySelector('section#movieDetails p');

        title.innerText = data.title;
        summary.innerText = data.summary;
    });
  });
}

document.addEventListener('DOMContentLoaded', init);