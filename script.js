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

// submit habits form
$('#submit').on('click', function(e) {
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
  $('.track1').text(tasksArray[0].task);
  $('.track2').text(tasksArray[1].task);
  $('.track3').text(tasksArray[2].task);
  $('.track4').text(tasksArray[3].task);
  $('.track5').text(tasksArray[4].task);
}

// Check off the completed tasks
$('.item-icon').on('click', function(e) {
  $(this)
    .find('.checkmark')
    .toggleClass('hide');
});

// -------------------------------------------------
// Navigate between the parts ("pages")

$('#formBtn').on('click', function(e) {
  e.preventDefault();
  $('#form').removeClass('hide-part');
  $('#track').addClass('hide-part');
  $('#stats').addClass('hide-part');
  $('#settings').addClass('hide-part');
});

$('#trackBtn').on('click', function(e) {
  e.preventDefault();
  moveToTrackPage();
});

$('#statsBtn').on('click', function(e) {
  e.preventDefault();
  $('#stats').removeClass('hide-part');
  $('#form').addClass('hide-part');
  $('#track').addClass('hide-part');
  $('#settings').addClass('hide-part');
});

$('#settingsBtn').on('click', function(e) {
  e.preventDefault();
  $('#settings').removeClass('hide-part');
  $('#form').addClass('hide-part');
  $('#track').addClass('hide-part');
  $('#stats').addClass('hide-part');
});

function moveToTrackPage() {
  $('#track').removeClass('hide-part');
  $('#form').addClass('hide-part');
  $('#stats').addClass('hide-part');
  $('#settings').addClass('hide-part');
}
