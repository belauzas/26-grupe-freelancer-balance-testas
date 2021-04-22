function table(selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = '';


    const months = [
        'Sausis',
        'Vasaris',
        'Kovas',
        'Balandis',
        'Gegužė',
        'Birželis',
        'Liepa',
        'Rugpjūtis',
        'Rugsėjis',
        'Spalis',
        'Lapkritis',
        'Gruodis'
    ];

    const sortedDataByMonth = data.sort((a, b) => a.month > b.month ? 1 : -1);
    for (let i = 0; i < data.length; i++) {
        const row = sortedDataByMonth[i];
        
        let month = months[i];

        let income = row.income === undefined ? 0 : row.income
        let expense = row.expense === undefined ? 0 :row.expense
        let balance = income - expense;
        let list = row.month;

        HTML += `<div class="table-row">
                    <div class="cell">${list}</div>
                    <div class="cell">${month}</div>
                    <div class="cell">${income}</div>
                    <div class="cell">${expense}</div>
                    <div class="cell">${balance}</div>
                </div>`
                

    }
    DOM.innerHTML += HTML;

}

export { table }