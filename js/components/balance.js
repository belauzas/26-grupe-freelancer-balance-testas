function balance (selector, data){
    const DOM = document.querySelector(selector);
    let allIncome = 0;
    let allExpenses = 0;
    for(let i = 0; i < data.length; i++){
        let {income} = data[i];
        let {expense} = data[i];
        allIncome += income;
        allExpenses += expense;
    }
    DOM.innerHTML += `<div class="cell"></div>
                      <div class="cell"></div>
                      <div class="cell">${allIncome} Eur</div>
                      <div class="cell">${allExpenses} Eur</div>
                      <div class="cell">${allIncome - allExpenses} Eur</div>`;
}

export { balance }