const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (button.classList.contains('number') || button.classList.contains('operator')) {
            if (display.value === '0' && value !== '.') {
                currentInput = value;
            } else {
                currentInput += value;
            }
        } else if (button.classList.contains('delete')) {
            currentInput = currentInput.slice(0, -1);
        } else if (button.classList.contains('reset')) {
            currentInput = '0';
        } else if (button.classList.contains('equals')) {
            try {
                currentInput = currentInput.replace(/x/g, '*');
                currentInput = eval(currentInput).toString();
            } catch {
                currentInput = 'Error';
            }
        }

        display.value = currentInput || '0';
    });
});
