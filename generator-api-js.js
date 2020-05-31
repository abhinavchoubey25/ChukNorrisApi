document.getElementById('btn').addEventListener('click', dataLoad);

function dataLoad(e) {
  const inputValue = document.querySelector('input').value;

  //xhr variable
  const xhr = new XMLHttpRequest();

  // Get request from external api
  /*Using api url : http://api.icndb.com/jokes/random/count 
  where particular number of jokes to fetch based on user input*/

  xhr.open('GET',`http://api.icndb.com/jokes/random/${inputValue}`, true);

  // Read
  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      let output = '';
      let number = 1;
      if(response.type === 'success') {
        response.value.forEach(function(joke){
          output += `
            <ul>
              <li>${number}: ${joke.joke}</li>
            </ul>
          `
          number++;
        });
      }
      document.querySelector('.jokes').innerHTML = output;
    }
  }

  xhr.send();
  e.preventDefault();

}