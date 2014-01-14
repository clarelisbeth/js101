
document.addEventListener('DOMContentLoaded', function() {

  'use strict';

  var roof = document.querySelector('.house__roof'),
    door = document.querySelector('.house__door'),
    houseWindows = document.querySelectorAll('.house__window'),
    numWindows = houseWindows.length,
    j;

  roof.addEventListener( 'click', function() {
    
    this.classList.toggle('blue');

  });

  function isOdd ( num ) {
    return num%2; 
  }
  
  for (j=0; j<numWindows; j+=1) {
    if (isOdd(j)) {
      houseWindows[j].addEventListener( 'click', function() {
        console.log(this);
        this.classList.toggle('light-on');
      });
    }
    
  }

  door.addEventListener( 'click', function() {
    console.log(this);
    this.classList.toggle('open');
  });


});

  


















