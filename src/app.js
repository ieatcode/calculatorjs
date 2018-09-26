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
        if (!this.savedValue) return this.numberValue;
        this.numberValue = eval(parseFloat(this.savedValue) + this.operator + parseFloat(this.numberValue));
        this.endofcalc = true;
    }

    getDigitKeys() {
        var vm = this;
        document.querySelectorAll('.digit-keys *').forEach(function (item) {
            item.addEventListener('click', function () {
                vm.prepend(this.innerHTML);
            });
        });
    }

    getFunctionKeys(doc) {
        var vm = this;
        doc.forEach(function (item) {
            item.addEventListener('click', function () {
                switch (this.innerHTML) {
                    case 'AC':
                        vm.allClear();
                        break;
                    case '±':
                        vm.plusminus();
                        break;
                    case '%':
                        vm.percent();
                        break;
                }
            });
        });
    }

    getOperatorKeys(doc) {
        var vm = this;
        doc.forEach(function (item) {
            item.addEventListener('click', function () {
                switch (this.innerHTML) {
                    case '÷':
                    vm.operate('/');
                        break;
                    case '×':
                    vm.operate('*');
                        break;
                    case '−':
                    vm.operate('-');
                        break;
                    case '+':
                    vm.operate('+');
                        break;
                    default:
                    vm.performMath();
                }
            });
        });
    }

    displayUpdater(doc) {
        var vm = this;
        doc.addEventListener('click', function () {
            document.querySelector('.auto-scaling-text').innerHTML = vm.numberValue;
        });
    }

}
