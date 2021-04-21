function yearBalance (selector, data) {
const DOM = document.querySelector(selector);
let income = 0;
let expense = 0;
let balance = 0;

for (let i = 0; i < data.length; i++) {
const bData = data[i];
income += bData.income;
expense += bData.expense;
}
balance = income - expense;
DOM.querySelector('.iplaukos').innerText = `${income} Eur`;
DOM.querySelector('.islaidos').innerText = `${expense} Eur`;
DOM.querySelector('.balansas').innerText = `${balance} Eur`;
}

export { yearBalance }