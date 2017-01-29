# ga-project-1
Tower of Hanoi

Psuedocode:
Functions needed:
create div
  when page loads, create 7 div disks with ascending widths
timer
  when any area in the body is clicked, a timer box at the bottom of the screen starts
move disc

select disc
  when disc div is clicked
  add dotted border for UI
  set clicked div to this
    can i do that?
    var self = this?
  select Tower
    when a tower div is click, check the smallest div disk in that Tower
    if smallest div > selected div:
      remove disc div from towerInitial
      add disc div to towerSelected
      '# of moves' counter ++
  winCondition check
    if towerSelected has 7 disc divs, alert 'You win in '# of moves'
