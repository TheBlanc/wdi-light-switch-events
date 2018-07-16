var light = document.querySelector('.light')

var plate = document.querySelector('.plate');

var button = plate.firstElementChild;

var headingStatus = document.querySelector('h1.status');

button.addEventListener('click', function() {
  this.classList.toggle('on');
  this.classList.toggle('off');

  light.classList.toggle('light');
  light.classList.toggle('dark');

  if (light.classList.contains('dark')) {
    headingStatus.innerHTML = "Who turned out the lights?!";
  } else {
    headingStatus.innerHTML = "It's so bright in here!";
  }
});
