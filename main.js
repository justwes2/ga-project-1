//create the discs

function createDiscs () {
  // AM: You could use a loop here so that you don't have to write out each of these div's individually.
  // AM: On top of that, I think you could use a single function to generate the discs. How many discs to generate depends on whatever argument you pass into the function.
  /*
    function createDiscs(towerId, numDiscs){
      for(let i=0; i<numDiscs; i++){
        $(towerId).append(`<div class="disc" id="disc${i}"></div>`)
      }
    }
  */

  $("#firstTower").append (
    '<div class="disc selected" id="disc1"></div>',
    '<div class="disc" id="disc2"></div>',
    '<div class="disc" id="disc3"></div>',
    '<div class="disc" id="disc4"></div>',
    '<div class="disc" id="disc5"></div>',
    '<div class="disc" id="disc6"></div>',
    '<div class="disc" id="disc7"></div>'
  )
  winLength = 8
}

function createThreeDiscs () {
  $("#firstTower").append (
    '<div class="disc selected" id="disc1"></div>',
    '<div class="disc" id="disc2"></div>',
    '<div class="disc" id="disc3"></div>'
  )
  winLength = 4
}
function createFourDiscs () {
  $("#firstTower").append (
    '<div class="disc selected" id="disc1"></div>',
    '<div class="disc" id="disc2"></div>',
    '<div class="disc" id="disc3"></div>',
    '<div class="disc" id="disc4"></div>'
  )
  winLength = 5
}
function createFiveDiscs () {
  $("#firstTower").append (
    '<div class="disc selected" id="disc1"></div>',
    '<div class="disc" id="disc2"></div>',
    '<div class="disc" id="disc3"></div>',
    '<div class="disc" id="disc4"></div>',
    '<div class="disc" id="disc5"></div>'
  )
  winLength = 6
}
function createSixDiscs () {
  $("#firstTower").append (
    '<div class="disc selected" id="disc1"></div>',
    '<div class="disc" id="disc2"></div>',
    '<div class="disc" id="disc3"></div>',
    '<div class="disc" id="disc4"></div>',
    '<div class="disc" id="disc5"></div>',
    '<div class="disc" id="disc6"></div>'
  )
  winLength = 7
}
//ask how many discs to create
var button = $('#submit')
var howMany = $("#numberDiscs").val()
button.on('click', function(event) {
  howMany = $("#numberDiscs").val()
  event.preventDefault()
  // console.log(howMany)
  // AM: My note above about refactoring the disc creation functions could end up shortening this if-else statement as well.
  if (howMany == 3) {
    createThreeDiscs()
  } else if (howMany == 4) {
    createFourDiscs()
  } else if (howMany == 5) {
    createFiveDiscs()
  } else if (howMany == 6) {
    createSixDiscs()
  } else if (howMany == 7) {
    createDiscs()
  }
})

//timer
var seconds = 0
var minutes = 0
var isTimerRunning = false
var timerId
var counter
function updateTime(){
    seconds++
    $('#timer').html(`Time Elapsed: ${minutes}:${seconds}`)
    if (seconds === 59) {
      minutes++
      seconds = 0
    }
}

//select disc once clicked
var isSelected = false
// $(".disc").click(function () { --this doesn't work
$(document).on('click', '.disc', function() {
  if ((!isSelected) && ($(this).css('order') < ($(this).siblings('.disc').css('order')))) { // AM: To make this line more readable, it might be helpful to define things like `$(this).css("order")` in variables at the beginning of the listener.
      isSelected = true
      $(this).addClass('selected')
  }  else {
    $('.selected').removeClass('selected')
    isSelected = false
  }
}
)
//select tower, compare selected to top disc
var moveCount = 0
// AM: What is the difference between this listener and the previous `.disc` one?
// AM: I notice in the app that when you click on a tower, it just highlights it and doesn't seem to affect disc placement.
$(".tower").click(function () {
if ($(this).find('.disc').css('order') > $('*').find('.selected').css('order')) {
  $(this).prepend($('.selected'))
  $('.selected').removeClass('selected')
  moveCount++
  $('#moves').html(`Moves: ${moveCount}`)
  isSelected = false
  if(!isTimerRunning){
    timerId = setInterval(updateTime, 1000)
    isTimerRunning = true
  }
  winTest()
}
})
var winLength
function winTest() {
  if((document.querySelectorAll('#secondTower .disc').length === winLength ) || (document.querySelectorAll('#thirdTower .disc').length === winLength )){  // AM: Ditto my note above about defining variables at the start of the event listener.
    setTimeout( function() {alert(`You won in ${minutes}:${seconds} and ${moveCount} moves!`)}, 1000)   // AM: Encourage you to figure out how to do this without using an `alert` -- use DOM manipulation instead!
    clearInterval(timerId)
  }
}
