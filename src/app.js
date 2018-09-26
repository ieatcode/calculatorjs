import dom from "ampersand-dom";

export default class Calculator {
    constructor() {
        this.numberValue = 0;
        this.savedValue = 0;
    }

    operate (operator) {
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

    process(value) {
        if (value === '●') value = '.';
        this.numberValue = this.numberValue && !this.endofcalc ? this.numberValue + value : value;
        this.endofcalc = false;
    }

    prepend(value) {
        this.process(value);
    }

    equals() {
        switch (this.operator) {
            case 'sum':
                this.numberValue = parseFloat(this.savedValue) + parseFloat(this.numberValue);
                this.endofcalc = true;
                break;
            case 'sub':
                this.numberValue = parseFloat(this.savedValue) - parseFloat(this.numberValue);
                this.endofcalc = true;
                break;
            case 'mul':
                this.numberValue = parseFloat(this.savedValue) * parseFloat(this.numberValue);
                this.endofcalc = true;
                break;
            case 'div':
                this.numberValue = parseFloat(this.savedValue) / parseFloat(this.numberValue);
                this.endofcalc = true;
                break;
        }
    }
}