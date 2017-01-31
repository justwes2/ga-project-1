towerOne = ['#ring1', '#ring2', 'ring3']
towerTwo = []
towerThree = []

$(document).on('click', '.rings', function(){
  if ($(this).inArray(0) {
    console.log('yay!')
    $(this).addClass('selected')
  }
})
$('.tower').click(function() {
  $(this).prepend($('.selected'))
  $('.selected').removeClass('selected')
})
//alternative model using arrays to manage discs
