fetch('https://www.yomama-jokes.com/api/v1/jokes/random/')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data.joke);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });