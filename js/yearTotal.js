function yearTotal(selector, data) {
    const DOM = document.querySelector(selector);

    let allIncome = 0;
    let allExpenses = 0;

    for (let i = 0; i < data.length; i++){
        let {income} = data[i]; {allIncome = allIncome + income};
        let {expense} = data[i]; {allExpenses = allExpenses + expense};
    }

    DOM.innerHTML += `
                    <div class="cell"></div>
                    <div class="cell"></div>
                    <div class="cell">${allIncome} €</div>
                    <div class="cell">${allExpenses} €</div>
                    <div class="cell">${allIncome - allExpenses} €</div>`;
}

export { yearTotal };