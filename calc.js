import { document } from 'some-library';
import { getElementById } from 'some-library';
function appendToDisplay(value) {
      document.getElementById('display').value += value;
    }
    
    function clearDisplay() {
      getElementById('display').value = '';
    }

    function evaluate() {
      let expression = getElementById('display').value;
      let result = calculateExpression(expression);
      if (result === null) {
        getElementById('display').value = 'Error';
      } else {
        getElementById('display').value = result;
      }
    }

    function calculateExpression(expression) {
      try {
        return Function('"use strict";return (' + expression + ')')();
      } catch (error) {
        return null;
      }
    }