const template = `
<h1 class="calculator-heading">OSX Calculator</h1>
<div class="calculator">
    <div class="calculator-display">
        <div class="auto-scaling-text" style="transform: scale(1, 1);">0</div>
    </div>
    <div class="calculator-keypad">
        <div class="input-keys">
            <div class="function-keys">
                <button class="calculator-key key-clear">AC</button>
                <button class="calculator-key key-sign">±</button>
                <button class="calculator-key key-percent">%</button>
            </div>
            <div class="digit-keys">
                <button class="calculator-key key-0">0</button>
                <button class="calculator-key key-dot">●</button>
                <button class="calculator-key key-1">1</button>
                <button class="calculator-key key-2">2</button>
                <button class="calculator-key key-3">3</button>
                <button class="calculator-key key-4">4</button>
                <button class="calculator-key key-5">5</button>
                <button class="calculator-key key-6">6</button>
                <button class="calculator-key key-7">7</button>
                <button class="calculator-key key-8">8</button>
                <button class="calculator-key key-9">9</button>
            </div>
        </div>
        <div class="operator-keys">
            <button class="calculator-key key-divide">÷</button>
            <button class="calculator-key key-multiply">×</button>
            <button class="calculator-key key-subtract">−</button>
            <button class="calculator-key key-add">+</button>
            <button class="calculator-key key-equals">=</button>
        </div>
    </div>
</div>
`;
export default template;
