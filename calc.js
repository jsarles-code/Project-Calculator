function appendToDisplay(value) {
      document.getElementById('display').value += value;
    }
    
    function clearDisplay() {
      document.getElementById('display').value = '';
    }
    
    function evaluate() {
      let expression = document.getElementById('display').value;
      let result = calculateExpression(expression);
      if (result === null) {
        document.getElementById('display').value = 'Error';
      } else {
        document.getElementById('display').value = result;
      }
    }
    
    function calculateExpression(expression) {
      try {
        return Function('"use strict";return (' + expression + ')')();
      } catch (error) {
        return null;
      }
    }