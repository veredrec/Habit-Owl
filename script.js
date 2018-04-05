// Navigate between the parts ("pages")
var form = document.getElementById('form');
var track = document.getElementById('track');
var stats = document.getElementById('stats');
var settings = document.getElementById('settings');

var habitsForm = document.getElementById('habitsForm');
var habitsTrack = document.getElementById('habitsTrack');
var habitsStats = document.getElementById('habitsStats');
var habitsSettings = document.getElementById('habitsSettings');

// Maybe the code below can be refactored similar to this:

// var pages = document.querySelectorAll('.page');
// pages.forEach(function(page) {
//   page.addEventListener('click', function(e) {
//     e.preventDefault();
//     console.log('PAGE CLICKED ', this);
//     page.classList.toggle('hide-part');
//   });
// });

habitsForm.addEventListener('click', function(e) {
  e.preventDefault();
  form.classList.remove('hide-part');
  track.classList.add('hide-part');
  stats.classList.add('hide-part');
  settings.classList.add('hide-part');
});

habitsTrack.addEventListener('click', function(e) {
  e.preventDefault();
  track.classList.remove('hide-part');
  form.classList.add('hide-part');
  stats.classList.add('hide-part');
  settings.classList.add('hide-part');
});

habitsStats.addEventListener('click', function(e) {
  e.preventDefault();
  stats.classList.remove('hide-part');
  form.classList.add('hide-part');
  track.classList.add('hide-part');
  settings.classList.add('hide-part');
});

habitsSettings.addEventListener('click', function(e) {
  e.preventDefault();
  settings.classList.remove('hide-part');
  form.classList.add('hide-part');
  track.classList.add('hide-part');
  stats.classList.add('hide-part');
});

// Local storage and form input
var storedData = [];
var retrievedData = [];

var tasks = [
  { task: 'notSet', color: '#453651', date: '18.3.18', done: false },
  { task: 'notSet', color: '#251432', date: '18.3.18', done: false },
  { task: 'notSet', color: '#543321', date: '18.3.18', done: false },
  { task: 'notSet', color: '#123123', date: '18.3.18', done: false },
  { task: 'notSet', color: '#444333', date: '18.3.18', done: false }
];

var submitForm = document.getElementById('submit');

submitForm.addEventListener('click', function(e) {
  e.preventDefault();
  var task1 = document.getElementById('task1').value;
  var task2 = document.getElementById('task2').value;
  var task3 = document.getElementById('task3').value;
  var task4 = document.getElementById('task4').value;
  var task5 = document.getElementById('task5').value;
  tasks = [
    { task: task1, color: '#453651', date: '18.3.18', done: true },
    { task: task2, color: '#251432', date: '18.3.18', done: false },
    { task: task3, color: '#543321', date: '18.3.18', done: true },
    { task: task4, color: '#123123', date: '18.3.18', done: true },
    { task: task5, color: '#444333', date: '18.3.18', done: false }
  ];

  storedData = localStorage.setItem('tasks', JSON.stringify(tasks)); // send to local storage
  // retrievedData = localStorage.getItem(JSON.parse(tasks)); // retrieve from local storage
});

// Populate track part with the data

// Check off the completed tasks

// var boxes = document.querySelectorAll('.box');
// boxes.forEach(function(box) {
//   box.addEventListener('click', function() {
//     console.log('BOX CLICKED ', this);
//     this.classList.toggle('hide');
//   });
// });

// var box = document.getElementsByClassName('box');
// var completed = document.getElementsByClassName('completed');
// box.addEventListener('click', function() {
//   completed.classList.toggle('hide');
// });
