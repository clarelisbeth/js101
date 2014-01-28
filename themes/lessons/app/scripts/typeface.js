document.addEventListener('DOMContentLoaded', function() {
  
  'use strict';

  var typeFaceList = document.querySelector('.js-type-face-list'),
    currentTypeFace = typeFaceList.options[typeFaceList.selectedIndex],
    oldTypeFace = 'arial',
    glyphTop = document.querySelector('.top'),
    glyphBottom = document.querySelector('.bottom'),
    textTop = document.querySelector('.text-top'),
    textBottom = document.querySelector('.text-bottom'),
    userText = document.querySelectorAll('.glyph');


  // apply current type face selected to top glyph
  glyphTop.classList.add(currentTypeFace.value);
  glyphBottom.classList.add(oldTypeFace);


  // LISTEN FOR SELECT LIST CHANGE
  typeFaceList.addEventListener('change', function() {
    glyphBottom.classList.remove(oldTypeFace);
    //glyphBottom.classList.remove(oldTypeFace);
    // as we remove the old type face from the top glyph, we add it to the bottom glyhh
    glyphTop.classList.remove(currentTypeFace.value);
    glyphBottom.classList.add(currentTypeFace.value);  
    
    //set old typeface to be the current one, that we are about to change
    oldTypeFace = currentTypeFace.value;

    // THIS BIT WORKS
    currentTypeFace = this.options[this.selectedIndex];
    
    glyphTop.classList.add(currentTypeFace.value);


    textTop.innerHTML = currentTypeFace.value;
    textBottom.innerHTML = oldTypeFace;



  });






});


/*glyphBottom.classList.remove(glyphBottomCurrentTypeFace);

    glyphBottom.classList.add(currentTypeFace.value);

    var glyphBottomCurrentTypeFace = currentTypeFace;
    console.log(glyphBottomCurrentTypeFace.value);
*/







/*
  function isOdd ( num ) {
    return num%2; 
  }


document.addEventListener('DOMContentLoaded', function() {

  var typeFace = document.querySelector('.house__roof'),
    houseDoor = document.querySelector('.house__door'),
    houseWindows = document.querySelectorAll('.house__window'),
    numWindows = houseWindows.length,
    i;

  houseRoof.addEventListener( 'click', function() {
    this.classList.toggle('blue');
  });

  
  for (i=0; i<numWindows; i+=1) {
    if (isOdd(i)) {
      houseWindows[i].addEventListener( 'click', function() {
        this.classList.toggle('light-on');
      });
    }
    
  }

  houseDoor.addEventListener( 'click', function() {
    this.classList.toggle('open');
  });








*/