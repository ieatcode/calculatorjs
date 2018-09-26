import dom from "ampersand-dom";

export default class Calculator {
    operate(operator) {
        this.operator = operator;
        this.savedValue = this.numberValue;
        this.endofcalc = true;
    }

    allClear() {
        this.numberValue = 0;
    }

    percent() {
        this.numberValue = (parseFloat(this.numberValue) * 0.01);
    }

    plusminus() {
        this.numberValue = this.numberValue > 0 ? -Math.abs(this.numberValue) : Math.abs(this.numberValue);
    }

    prepend(value) {
        if (value === '●') value = '.';
        this.numberValue = this.numberValue && !this.endofcalc ? this.numberValue + value : value;
        this.endofcalc = false;
    }

    performMath() {
        this.numberValue = eval(parseFloat(this.savedValue) + this.operator + parseFloat(this.numberValue));
        this.endofcalc = true;
    }
}