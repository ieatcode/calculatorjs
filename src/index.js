import "./index.css";
import Calculator from "./app.js";
import template from "./template";

document.getElementById("app").innerHTML = template;
var calculator = new Calculator();
calculator.getDigitKeys(document.querySelectorAll('.digit-keys *'));
calculator.getFunctionKeys(document.querySelectorAll('.function-keys *'));
calculator.getOperatorKeys(document.querySelectorAll('.operator-keys *'));
calculator.displayUpdater(document.querySelector('.calculator'));

