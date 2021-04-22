function footerSums (selector, data) {
    const DOM = document.querySelector(selector);

    let totalIncome = 0;
    let totalExpenses = 0;
    for (let i=0; i<data.length; i++) {
        let { income } = data[i];
        totalIncome += income;
        let { expense } = data[i];
        totalExpenses += expense;
    }
        DOM.innerHTML += `
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell">${totalIncome} Eur</div>
        <div class="cell">${totalExpenses} Eur</div>
        <div class="cell">${totalIncome - totalExpenses} Eur</div>`;
}

export { footerSums }