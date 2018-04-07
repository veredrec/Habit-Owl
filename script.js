// call to populate the data from local storage
getTasks();

// populate input value with saved tasks in local storage
var task1 = document.getElementById('task1');
var task2 = document.getElementById('task2');
var task3 = document.getElementById('task3');
var task4 = document.getElementById('task4');
var task5 = document.getElementById('task5');

populateInput();

function populateInput() {
  task1.value = tasksArray[0].task;
  task2.value = tasksArray[1].task;
  task3.value = tasksArray[2].task;
  task4.value = tasksArray[3].task;
  task5.value = tasksArray[4].task;
}

// Local storage and form input
var storedData = [];
var retrievedData = [];

var submitForm = document.getElementById('submit');

submitForm.addEventListener('click', function(e) {
  e.preventDefault();

  var task1Val = task1.value;
  var task2Val = task2.value;
  var task3Val = task3.value;
  var task4Val = task4.value;
  var task5Val = task5.value;

  tasks = [
    { task: task1Val, color: '#453651', date: '18.3.18', done: false },
    { task: task2Val, color: '#251432', date: '18.3.18', done: false },
    { task: task3Val, color: '#543321', date: '18.3.18', done: false },
    { task: task4Val, color: '#123123', date: '18.3.18', done: false },
    { task: task5Val, color: '#444333', date: '18.3.18', done: false }
  ];

  // checkInput(tasks);
  if (!tasks.every(checkInput)) {
    $('#message').removeClass('hide-message');
  } else {
    console.log('returning class');
    $('#message').addClass('hide-message');
    storeData(tasks);
    moveToTrackPage();
    getTasks();
  }
});

// check that the input in valid
function checkInput(t) {
  return t.task.length < 21;
}

// send data to local storage
function storeData(tasks) {
  storedData = localStorage.setItem('tasks', JSON.stringify(tasks));
}

// retrieve data from local storage
function getTasks() {
  if (!localStorage.getItem('tasks')) {
    tasksArray = [];
  } else {
    tasksArray = JSON.parse(localStorage.getItem('tasks'));
  }
  populateTrack(tasksArray);
  // populateStats(tasksArray); // add later when d3 ready
}

// Populate track part with the data
function populateTrack(tasksArray) {
  var track1 = document.querySelector('.track1');
  var track2 = document.querySelector('.track2');
  var track3 = document.querySelector('.track3');
  var track4 = document.querySelector('.track4');
  var track5 = document.querySelector('.track5');

  track1.textContent = tasksArray[0].task;
  track2.textContent = tasksArray[1].task;
  track3.textContent = tasksArray[2].task;
  track4.textContent = tasksArray[3].task;
  track5.textContent = tasksArray[4].task;
}

// Check off the completed tasks

// var completed = document.getElementsByClassName('completed');
$('.item-icon').on('click', function(e) {
  $(this)
    .find('.checkmark')
    .toggleClass('hide');
});

// -------------------------------------------------
// Navigate between the parts ("pages")
var form = document.getElementById('form');
var track = document.getElementById('track');
var stats = document.getElementById('stats');
var settings = document.getElementById('settings');

var formBtn = document.getElementById('formBtn');
var trackBtn = document.getElementById('trackBtn');
var statsBtn = document.getElementById('statsBtn');
var settingsBtn = document.getElementById('settingsBtn');

formBtn.addEventListener('click', function(e) {
  e.preventDefault();
  form.classList.remove('hide-part');
  track.classList.add('hide-part');
  stats.classList.add('hide-part');
  settings.classList.add('hide-part');
});

trackBtn.addEventListener('click', function(e) {
  e.preventDefault();
  moveToTrackPage();
});

statsBtn.addEventListener('click', function(e) {
  e.preventDefault();
  stats.classList.remove('hide-part');
  form.classList.add('hide-part');
  track.classList.add('hide-part');
  settings.classList.add('hide-part');
});

settingsBtn.addEventListener('click', function(e) {
  e.preventDefault();
  settings.classList.remove('hide-part');
  form.classList.add('hide-part');
  track.classList.add('hide-part');
  stats.classList.add('hide-part');
});
function moveToTrackPage() {
  track.classList.remove('hide-part');
  form.classList.add('hide-part');
  stats.classList.add('hide-part');
  settings.classList.add('hide-part');
}
// Maybe the above code can be refactored similar to this:

// var pages = document.querySelectorAll('.page');
// pages.forEach(function(page) {
//   page.addEventListener('click', function(e) {
//     e.preventDefault();
//     console.log('PAGE CLICKED ', this);
//     page.classList.toggle('hide-part');
//   });
// });
