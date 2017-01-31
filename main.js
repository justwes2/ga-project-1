//create the discs
function createDiscs () {
  $("#firstTower").append (
    '<div class="disc selected" id="disc1"></div>',
    '<div class="disc" id="disc2"></div>',
    '<div class="disc" id="disc3"></div>',
    '<div class="disc" id="disc4"></div>',
    '<div class="disc" id="disc5"></div>',
    '<div class="disc" id="disc6"></div>',
    '<div class="disc" id="disc7"></div>'
  )
}
createDiscs()

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
  if ((!isSelected) && ($(this).css('order') < ($(this).siblings('.disc').css('order')))) {
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
function winTest() {
  if((document.querySelectorAll('#secondTower .disc').length === 8 ) || (document.querySelectorAll('#thirdTower .disc').length === 8 )){
    alert(`You won in ${minutes}:${seconds} and ${moveCount} moves!`)
  }
}
