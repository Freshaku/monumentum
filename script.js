// DOM Elements
let time = document.querySelector('.time');
let  greeting = document.querySelector('.greeting');
let  name = document.querySelector('.name');
let  focus = document.querySelector('.focus');
let  btnImg = document.querySelector('.btnImg');

// Options
let showAmPm = true;

// Show Time
function showTime() {
  // let today = new Date(2019, 06, 10, 00, 33, 30),
   let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
    date = today.getDate(),
    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    day = days[today.getDay()],
    month = months[today.getMonth()];

  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12hr Format
  hour = hour % 24 || 24;

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm ? amPm : ''}<span></br></span>${addZero(day)}<span>, the </span>${addZero(date)}<span>th </span>${addZero(month)}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour >= 6 && hour < 12) {
    // Morning
    document.body.style.backgroundImage =
    `url(${getRandomInt[hour]})`;
    greeting.textContent = 'Good Morning, ';
  } else if (hour >= 12 && hour < 18) {
    // Afternoon
    document.body.style.backgroundImage =
    `url(${getRandomInt[hour]})`;
    greeting.textContent = 'Good Afternoon, ';
  } else if (hour >= 18 && hour < 24){
    // Evening
    document.body.style.backgroundImage =
    `url(${getRandomInt[hour]})`;
    greeting.textContent = 'Good Evening, ';
  } else {
    //night
    document.body.style.backgroundImage =
    `url(${getRandomInt[hour]})`;
    greeting.textContent = 'Good Night, ';
  }
}

//Background
const baseNight = 'https://raw.githubusercontent.com/irinainina/ready-projects/momentum/momentum/assets/images/night/';
const baseMorning = 'https://raw.githubusercontent.com/irinainina/ready-projects/momentum/momentum/assets/images/morning/';
const baseDay = 'https://raw.githubusercontent.com/irinainina/ready-projects/momentum/momentum/assets/images/day/';
const baseEvening = 'https://raw.githubusercontent.com/irinainina/ready-projects/momentum/momentum/assets/images/evening/';
const images = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];


//Array Image
var arrImg = new Array(6);

for (let i = 0; i < arrImg.length; i++) {
	
  var item = Math.floor(Math.random()*images.length);
  
  if (arrImg.includes(images[item]) === false) {
  arrImg[i] = images[item];
} else {
 i--;
}
}

//Arr Random
var getRandomInt = new Array(24); 

for (let i = 0; i < getRandomInt.length; i++) {
 if (i >= 6 && i < 12) {
 getRandomInt[i] = baseMorning + arrImg[i-6]
 } else if (i >= 12 && i < 18) {
 getRandomInt[i] = baseDay + arrImg[i-12]
 } else if (i >= 18 && i < 24) {
 getRandomInt[i] = baseEvening + arrImg[i-18]
 } else {
 getRandomInt[i] = baseNight + arrImg[i]
 }
}

//View Bg Image
function viewBgImage(data) {
  const body = document.querySelector('body');
  const src = data;
  const img = document.createElement('img');
  img.src = src;
  img.onload = () => {      
    body.style.backgroundImage = `url(${src})`;
  }; 
}
let today = new Date(),
    hour = today.getHours(),
    i = hour;

//Get Image
function getImage() {
  if (i == getRandomInt.length-1) {
    i = 0;
  } 
  viewBgImage(getRandomInt[i]);
  i++;
  btnImg.disabled = true;
  setTimeout(function() { btnImg.disabled = false }, 1000);
} 


// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();
getImage();