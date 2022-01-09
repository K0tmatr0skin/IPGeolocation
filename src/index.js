import {validateIp} from './helpers'

const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('button');

const ipInfo = document.getElementById('ip');
const locationInfo = document.getElementById('location');
const timezoneInfo = document.getElementById('timezone');
const ispInfo = document.getElementById('isp');

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKey);

function getData() {
    if (validateIp(ipInput.value)) {
        fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_3F6515VRPm9BLgxaBKkIOFNUsdwAl&ipAddress=${ipInput.value}`)
            .then(response => response.json())
            .then(setInfo);
    }
}

function handleKey(event) {
    if (event.key === 'Enter') {
        getData();
    }
}

function setInfo(mapData) {
    console.log(mapData);
    ipInfo.innerText = mapData.ip;
    locationInfo.innerText = mapData.location.country + ' ' + mapData.location.region;
    timezoneInfo.innerText = mapData.location.timezone;
    ispInfo.innerText = mapData.isp;
}
