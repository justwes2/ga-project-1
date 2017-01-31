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

User Stories:
As a <role> I should be able to <goal> so that <reason>
As a user I should be able to play so that I can unwind
As a user I should be able to problem solve so that I can practice critical thinking
As a user I should be able to execute the functions fully so that I can win the game
As a user I should be able to have my time logged so that I can compare myself to other users
As a user I should be able to see my moves in real time so that I can implement my strategy move by move

Explanations of the technologies used
  This app uses JavaScript and JQuery for DOM manipulation on an HTML and CSS constructed and styled page.
The approach taken
  There are 4 functions in this app. The first loads the discs into the first tower. This was done as a function rather than in the HTML so that a later version of the app could include user feedback on how many discs they wanted to play with.
  The second function is the timer function. This is only called within the select tower section of code (see below).
  The third function selects a disc. It checks to make sure that there is only ever one selected disc first.
  The third function is called when a tower is selected. It checked the order of the selected disc against the order of the native discs. If the selected disc is lower order than the native discs, the selected disc will be prepended to the selected tower. This action also begins the timer.
  The final function is the win condition test. If 7 disc elements (and an invisible base div for gravity) are present in tower, the user is alerted that they have won. This function is called at the end of the prepend function so that the function checks for a win each time a disc is moved.

installation instructions
unsolved problems
