// maybe have two differert types of data:
// 1. tasks = name and complet only - to populate input and track
// 2. trackTasks = tasks that are added at midnight:
// generates object with all details - color, date, complete
// push new object to the existing array
// then - make all tasks in first array - done: false
// the second array would generate the D3

// call to populate the data from local storage
getTasks();

// populate input value with saved tasks in local storage
var task1 = document.getElementById('task1');
var task2 = document.getElementById('task2');
var task3 = document.getElementById('task3');
var task4 = document.getElementById('task4');
var task5 = document.getElementById('task5');

function populateInput() {
  task1.value = tasksArray[0].task;
  task2.value = tasksArray[1].task;
  task3.value = tasksArray[2].task;
  task4.value = tasksArray[3].task;
  task5.value = tasksArray[4].task;
}

// Local storage and form input
var storedData = [];

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

// check that input in valid
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
    tasksArray = [
      { task: 'Drink water' },
      { task: 'Read my book' },
      { task: 'Exercise' },
      { task: 'Take the staris' },
      { task: 'Reply to emails' }
    ];
    populateInput();
    populateTrack();
  } else {
    tasksArray = JSON.parse(localStorage.getItem('tasks'));
    populateInput(tasksArray);
    populateTrack(tasksArray);
  }
  // populateStats(tasksArray); // add later when d3 ready
}

// -------------------------------------------------
// Populate track part with the data after checking that there is input
function populateTrack(tasksArray) {
  for (var i = 0; i < tasksArray.length; i++) {
    if (tasksArray[i].task === '') {
      $('.item' + (i + 1)).addClass('hide');
    } else {
      $('.track' + (i + 1)).text(tasksArray[i].task);
      $('.item' + (i + 1)).removeClass('hide');
    }
  }
}

// Check off the completed tasks
$('.item-icon').on('click', function(e) {
  $(this)
    .find('.checkmark')
    .toggleClass('hide');
});

// Remove task by clicking the trash icon
$('.trash').on('click', function() {
  var currentTask = $(this)
    .siblings('.form-input')
    .attr('id');
  var taskNum = currentTask.slice(4);
  console.log(tasks);
  tasks[currentTask - 1].task = '';
});

// -------------------------------------------------
// Navigate between the parts ("pages")

// go to stats page from track pages
$('#toStats').on('click', function(e) {
  e.preventDefault();
  moveToStatsPage();
});

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
  moveToStatsPage();
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

function moveToStatsPage() {
  $('#stats').removeClass('hide-part');
  $('#form').addClass('hide-part');
  $('#track').addClass('hide-part');
  $('#settings').addClass('hide-part');
}
