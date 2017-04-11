
//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello World!';

var myImg = document.querySelector('#chrome-img');
var myButton = document.querySelector('#my-button');
var myHeading = document.querySelector('#my-heading');

myImg.onclick = function () {
  'use strict';
  var mySrc = myImg.getAttribute('src'),
    origSrc = 'img/chrome.jpeg';
  if (mySrc === origSrc) {
    myImg.setAttribute('src', 'img/chrome-2.jpeg');
  } else {
    myImg.setAttribute('src', origSrc);
  }
};

function setUserName() {
  'use strict';
  var myName = 'Bob';
  localStorage.setItem('name', myName);
  myHeading.innerHTML = myName + ' thinks that Chrome is super rad.';
}

if (!localStorage.getItem('name')) {
  setUserName();
}
//else {
//  var storedName = localStorage.getItem('name');
//  myHeading.textContent(storedName + ' thinks that Chrome is super rad. This is in the iffff.');
//}

//if (localStorage.getItem('name')) {
//  var storedName = localStorage.getItem('name');
//  myHeading.textContent(storedName + ' thinks that Chrome is super rad. This is in the iffff.');
//}

myButton.onclick = function () {
  'use strict';
  setUserName();
};