const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('button');

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKey);

function getData() {
    fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_3F6515VRPm9BLgxaBKkIOFNUsdwAl&ipAddress=${ipInput.value}`)
        .then(response => response.json())
        .then(console.log);
}

function handleKey(event) {
    if (event.key === 'Enter') {
        getData();
    }
}