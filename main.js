// TODO:
// * when enter the app - if local storage has things - render them on home page only by replacing what's there
// * if no local storage - shows form, empty grid for stats, message for track
// * create new habit - would check valid, push to array, store array, append in home only
// * next time refreash - see new list that replaces current outline
// * each page redirection would create a new list for this page only
// * in each page can be a <ul> and it will appends <li> to it

// Render different parts/pages
$('#formBtn').on('click', function(e) {
  e.preventDefault();
  showHabits(habits);
  $('#form').removeClass('hide-part');
  $('#track').addClass('hide-part');
  $('#stats').addClass('hide-part');
  $('#settings').addClass('hide-part');
});

$('#trackBtn, #toTrack').on('click', function(e) {
  e.preventDefault();
  populateTrack(habits);
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
var habits = [];
$('#plus').on('click', function(e) {
  e.preventDefault();
  createHabits();
});

function createHabits() {
  var newHabit = $('#task').val();
  if (newHabit !== '') {
    // Add new habit to habits array
    habits.push({ habit: newHabit, completed: false });
    // Show habit on home page
    $('#habitList').append(
      '<li class="list-item"><p>' + newHabit + '</p></li>'
    );
  }
  $('#addForm')[0].reset();
  storeData(habits);
  checkLength(habits);
}

// send data to local storage
function storeData(habits) {
  storedData = localStorage.setItem('habits', JSON.stringify(habits));
}

// check that habits array is not 5
function checkLength(habits) {
  if (habits.length >= 5) {
    $('#addForm').addClass('hide-form');
    $('#limitMessage').removeClass('hide-message');
  }
}
// retrieve data from local storage
function getHabits() {
  if (!localStorage.getItem('habits')) {
    console.log('no habits yet!');
    // show option to add habits
  } else {
    habits = JSON.parse(localStorage.getItem('habits'));
    showHabits(habits);
  }
  // hide option to add habits
  checkLength(habits);
}

// show habits on home page
function showHabits(habits) {
  $('#habitList').replaceWith('<ul id="habitList" class="habit-list"></ul>');
  for (var i = 0; i < habits.length; i++) {
    // Show habits on home page
    $('#habitList').append(
      '<li class="list-item"><p>' + habits[i].habit + '</p></li>'
    );
  }
}

// Show habits on track page
function populateTrack(habits) {
  $('#trackList').replaceWith('<ul id="trackList" class="track-list"></ul>');
  for (var i = 0; i < habits.length; i++) {
    var trackElement =
      '<p class="track-item"><span class="track">' +
      habits[i].habit +
      '</span><span class="item-icon" id="box' +
      (i + 1) +
      '"><i class="box far fa-square"></i><i class="checkmark fas fa-check hide"></i></span></p>';
    $('#trackList').append(trackElement);
  }
}

getHabits();

// Check off the completed tasks
$(document).on('click', '.item-icon', function() {
  $(this)
    .find('.checkmark')
    .toggleClass('hide');
});

// // Show habits on stats page
// $('#stats' + (i + 1)).text(habits[i].habit);
// OR
// // Show habits on stats page
// $('.table').append(
//   '<tr id="habit1Stats"><td id="stats1" class="stats1">' +
//     newHabit +
//     '</td></tr>'
// );

// remove whole table row if habit is empty or make it grey
// console.log('#habit' + (i + 1) + 'Stats');
// $('#habit' + (i + 1) + 'Stats').addClass('hide-stats');
