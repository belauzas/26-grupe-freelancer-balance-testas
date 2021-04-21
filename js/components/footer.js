function footer(selector, data) {
    const DOM = document.querySelector(selector);
    
    let totalIncome = 0;
    let totalExpences = 0;
    for (let i=0; i<data.length; i++) {
        let {income} = data[i];
        totalIncome += income;
        let {expense} = data[i];
        totalExpences += expense;
    }
    
    DOM.innerHTML += `<div class="cell"></div>
                      <div class="cell"></div>
                      <div class="cell">${totalIncome} Eur</div>
                      <div class="cell">${totalExpences} Eur</div>
                      <div class="cell">${totalIncome - totalExpences} Eur</div>`;
}

export {footer};