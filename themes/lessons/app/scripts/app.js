/*

  Feedback

  Use strict mode
  DONE

  Confusing indenting after the for loop
  DONE - I think
  
  Implement the passFocus method. We can look at this together if necessary. Can be done in multiple ways. Bonus points for a solution that uses partial application.

  Consider being able to highlight any wrong letters. Tip: Use an array to store their answer rather than a string
  USING ARRAY

  Use Array.forEach instead of a for loop to work out what their answer is. Not necessarily better, but good practice. Give me a shout if you have trouble.
  DONE

  Use a function expression for your click callback rather than an anonymous function.

  Ensure you only ever use single quotes.
  DONE
*/

document.addEventListener('DOMContentLoaded', function() {
  
  // Whole-script strict mode syntax
  'use strict';

  var el = document.getElementById('my-button'),
    passFocus = function(){
      //alert('keyup');
      this.focus();
    },
    convertNodeListToArray = function(nodeList) {
      return Array.prototype.slice.call(nodeList);
    },
    buildAnswer = function(element, index, array) {
      theirAnswer = theirAnswer + element.value;
      console.log(theirAnswer);
    },
    inputs = document.querySelectorAll('input'),
    numInputs = inputs.length,
    j;

  inputs[0].focus();

  for (j=0; j<numInputs; j+=1) {
    inputs[j].addEventListener( 'keyup', passFocus);
  }

  el.addEventListener( 'click', function( e ) {
  
    e.preventDefault();
    var clicked = this;
    var theirAnswer = '';
    // Old way of buiding answer, replaced with forEach
    //for (j=0; j<numInputs; j+=1) {
      //theirAnswer = theirAnswer + inputs[j].value;
      // or
      //theirAnswer += inputs[j].value;
    //}

    //inputs is a NodeList, turn it into an array
    var inputsArray = convertNodeListToArray(inputs);
    //use forEach to build answer
    inputsArray.forEach( buildAnswer );

    if (theirAnswer === 'pugpig') {
      document.body.classList.add('spin-me');
    } else {
      document.body.classList.add('explode-me');
    }

  });

});

















  