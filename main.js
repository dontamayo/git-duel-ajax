const userOne = document.getElementById('username-1');
const userTwo = document.getElementById('username-2');
const compare = document.getElementById('compare');

const baseURL = 'https://api.github.com/user';

compare.addEventListener('click', function(e) {
  const requestOne = fetch(baseURL + userOne.value)
  .then((res) => res.json())
});
