import "./index.css";
import Calculator from "./app.js";
import template from "./template";

/* 
TODO:   Apply MDAS
        Downsize font on large digits

*/
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
                    calculator.operate('/');
                    break;
                case '×':
                    calculator.operate('*');
                    break;
                case '−':
                    calculator.operate('-');
                    break;
                case '+':
                    calculator.operate('+');
                    break;
                default:
                    calculator.performMath();
            }
        });
    });

document
    .querySelector('.calculator')
    .addEventListener('click', function () {
        document.querySelector('.auto-scaling-text').innerHTML = calculator.numberValue;
    });

