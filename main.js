//timer
// var reset = $('#reset')
var start = $('#start')
// var pause = $('#pause')

var seconds = 0
var isTimerRunning = false
var timerId

function updateTime(){
  seconds++
  $('#timer').html(`Time Elapsed: ${seconds}`)
}

// reset.click(function(){
//   clearInterval(timerId)
//   seconds = 0
//   $('#timer').html(`Stop Watch`)
// })
$(".board").click(function(){
  if(!isTimerRunning){
    timerId = setInterval(updateTime, 1000)
    isTimerRunning = true
  }
})
// pause.click(function(){
//   clearInterval(timerId)
// })
