function months(selector, data){
    const DOM = document.querySelector(selector);
    let HTML = '';

    const months = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Geguze', 'Birzelis', 'Liepa', 'Rugpjutis', 'Rugsejis', 'Spalis', 'Lapkritis', 'Gruodis'];

    data.sort((a, b) => (a.month > b.month) ? 1 : -1);
    for (let i = 0; i < data.length; i++){
        const row = data[i];
        row.month = months[i];
        
        if(row.income === undefined){
            row.income = 0;
        }
        if(row.expense === undefined){
            row.expense = 0;
        }
       
        const balance = row.income - row.expense;

        HTML += `<div class="table-row">
                    <div class="cell">${i+1}</div>
                    <div class="cell">${row.month}</div>
                    <div class="cell">${row.income}</div>
                    <div class="cell">${row.expense}</div>
                    <div class="cell">${balance}</div>
                </div>`
    }
    DOM.innerHTML = HTML;
}


export { months }