class Calculator {
  constructor(inputSelector, resultSelector, addBtnSelector, subBtnSelector, mulBtnSelector, divBtnSelector) {
    this.input1 = document.querySelector(inputSelector + ':nth-of-type(1)');
    this.input2 = document.querySelector(inputSelector + ':nth-of-type(2)');
    this.result = document.querySelector(resultSelector);
    this.addBtn = document.querySelector(addBtnSelector);
    this.subBtn = document.querySelector(subBtnSelector);
    this.mulBtn = document.querySelector(mulBtnSelector);
    this.divBtn = document.querySelector(divBtnSelector);
    this.initEvents();
  }

  initEvents() {
    this.addBtn.addEventListener('click', () => this.calculate('+'));
    this.subBtn.addEventListener('click', () => this.calculate('-'));
    this.mulBtn.addEventListener('click', () => this.calculate('*'));
    this.divBtn.addEventListener('click', () => this.calculate('/'));
  }

  calculate(op) {
    const val1 = parseFloat(this.input1.value);
    const val2 = parseFloat(this.input2.value);
    let res = '';
    if (isNaN(val1) || isNaN(val2)) {
      res = 'Please enter valid numbers';
    } else {
      switch(op) {
        case '+': res = val1 + val2; break;
        case '-': res = val1 - val2; break;
        case '*': res = val1 * val2; break;
        case '/': res = val2 !== 0 ? val1 / val2 : 'Cannot divide by zero'; break;
      }
    }
    this.result.textContent = 'Result: ' + res;
  }
}

// Usage: Make sure your HTML has two <input>, a <div id="result">, and four buttons with ids: addBtn, subBtn, mulBtn, divBtn
document.addEventListener('DOMContentLoaded', () => {
  new Calculator('input', '#result', '#addBtn', '#subBtn', '#mulBtn', '#divBtn');
});