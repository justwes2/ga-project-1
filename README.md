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

    Credit:
    wood panel image
    https://www.flickr.com/photos/katsura-relishtorelish/2789497086/in/photolist-5fuUim-68bXb-a3vayy-a3vayf-pFGqPZ-78NZ83-5fqwQx-5XsfuQ-5fqwNK-6DKsfB-b5B7w2-rxJ4GL-oc44NH-7xxhQG-68bXk-b5B7qT-oc58ur-otYeNV-b5B7Lz-5fuUgE-78K8ba-7VNeqU-78NZdQ-7QFEsE-bos2qc-dSWvTN-pLx5AG-b5B7Fp-5gorVp-dmCX5L-dSWvV7-8ABAqh-jVyoqt-5aMR5o-b3HsCX-b3HrXe-b3Hswz-mSBGF4-5YRocT-5aHzfX-oqtSeP-7QCkWp-cJp93L-qeVt8t-54Rh7C-cJp8SS-b3Hqfv-cBVp4C-qeLQrj-b3Hrcn accessed 1/30/17
