//create the discs
function createDiscs () {
  $("#firstTower").append (
    '<div class="disc" id="disc1"></div>',
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
var isTimerRunning = false
var timerId
function updateTime(){
  seconds++
  $('#timer').html(`Time Elapsed: ${seconds}`)
}
$(".disc").click(function(){
  if(!isTimerRunning){
    timerId = setInterval(updateTime, 1000)
    isTimerRunning = true
  }
})

//select disc once clicked
isSelected = false
function selectCheck () {
  if ($(".board").find(".selected") === []) {
    isSelected = false
  }
}
$(".disc").click(function () {
  if (!isSelected){
    $(this).addClass('selected')
    isSelected = true
  }
  else {
    $('.selected').removeClass('selected')
    isSelected = false
  }
}
)
//select tower
var selectedTower
$(".tower").click(function () {
  selectedTower = $(this)
  if ($(this).find('.disc').css('width')<$('*').find('.selected').css('width')) {
    console.log('bam!')
    $(this).prepend($('.selected'))
  }
})
