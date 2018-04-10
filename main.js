// Render different parts/pages
$('#trackBtn').on('click', function(e) {
  e.preventDefault();
  $('#track').removeClass('hide-part');
  $('#form').addClass('hide-part');
  $('#stats').addClass('hide-part');
  $('#settings').addClass('hide-part');
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

// habits data structure for title and complete only
var habits = []; // do I need this line?
$('.submit').on('click', function(e) {
  e.preventDefault();
  createHabits();
});

function createHabits() {
  console.log('BEFORE CREATE ', habits);
  console.log('LENGTH ', habits.length);
  var newHabit = $('#task').val();
  if (newHabit !== '') {
    habits.push({ habit: newHabit, completed: false });
    $('#habitList').append(
      '<li class="list-item"><p>' + newHabit + '</p></li>'
    );
  }
  storeData(habits);
  checkLength(habits);
  $('#addForm')[0].reset();
}

// send data to local storage
function storeData(habits) {
  console.log('STORE ', habits);
  storedData = localStorage.setItem('habits', JSON.stringify(habits));
}

// check that habits array is not 5
function checkLength(habits) {
  if (habits.length === 5) {
    $('#addForm').addClass('hide-form');
    $('#message').text('You can add up to 5 habits');
  }
}
// retrieve data from local storage
function getHabits() {
  if (!localStorage.getItem('habits')) {
    // show option to add habits
  } else {
    // hide option to add habits
    habits = JSON.parse(localStorage.getItem('habits'));
    console.log('GET FROM STORAGE ', habits);
    showHabits(habits);
    // populateTrack(tasksArray);
  }
  // populateStats(habits); // add later when d3 ready
}

function showHabits(habits) {
  console.log('SHOW ', habits);
  for (var i = 0; i < habits.length; i++) {
    $('#habitList').append(
      '<li class="list-item"><p>' + habits[i].habit + '</p></li>'
    );
  }
}

getHabits();
