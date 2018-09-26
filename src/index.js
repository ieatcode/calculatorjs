import "./index.css";
import Calculator from "./app.js";
import template from "./template";

document.getElementById("app").innerHTML = template;
var calculator = new Calculator();
document
    .querySelectorAll('.digit-keys *')
    .forEach(function (item) {
        item.addEventListener('click', function () {
            calculator.prepend(this.innerHTML);
        });
    });

document
    .querySelectorAll('.function-keys *')
    .forEach(function (item) {
        item.addEventListener('click', function () {
            switch (this.innerHTML) {
                case 'AC':
                    calculator.allClear();
                    break;
                case '±':
                    calculator.plusminus();
                    break;
                case '%':
                    calculator.percent();
                    break;
            }
        });
    });

document
    .querySelectorAll('.operator-keys *')
    .forEach(function (item) {
        item.addEventListener('click', function () {
            switch (this.innerHTML) {
                case '÷':
                    calculator.operate('sum');
                    break;
                case '×':
                    calculator.operate('mul');
                    break;
                case '−':
                    calculator.operate('sub');
                    break;
                case '+':
                    calculator.operate('sum');
                    break;
                default:
                    calculator.equals();
            }
        });
    });

document
    .querySelector('.calculator')
    .addEventListener('click', function () {
        document.querySelector('.auto-scaling-text').innerHTML = calculator.numberValue;
    });