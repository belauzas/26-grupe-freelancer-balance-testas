function yearBalance(selector, data, month) {
    const DOM = document.querySelector(selector);
    
    data.sort((a,b) => a.month - b.month);
    let HTML = '';
    for (let i=0; i<data.length; i++) {
        const balances = data[i];
        const months = month[i];
        
        if (balances.income === undefined) {
            balances.income = 0;
        }
        
        if (balances.expense === undefined) {
            balances.expense = 0;
        }
        HTML += `<div class="table-row">
        <div class="cell">${balances.month}</div>
        <div class="cell">${months}</div>
        <div class="cell">${balances.income}</div>
        <div class="cell">${balances.expense}</div>
        <div class="cell">${balances.income - balances.expense}</div>
        </div>`;
    }
    DOM.innerHTML += HTML;
}

export {yearBalance};