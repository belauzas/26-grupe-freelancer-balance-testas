function months(selector, data, months){
    const DOM = document.querySelector(selector);
    let HTML = '';
    let num = 0;
    
    let sorted = data.sort((a, b) => a.month - b.month);
    for (let i = 0; i < data.length; i++){
        const row = data[i];
        row.month = months[i];
        num++;
        
        if(row.income === undefined){
            row.income = 0;
        }
        if(row.expense === undefined){
            row.expense = 0;
        }
       
        const balance = row.income - row.expense;

        HTML += `<div class="table-row">
                    <div class="cell">${num}</div>
                    <div class="cell">${row.month}</div>
                    <div class="cell">${row.income} Eur</div>
                    <div class="cell">${row.expense} Eur</div>
                    <div class="cell">${balance} Eur</div>
                </div>`
    }
    DOM.innerHTML = HTML;
}


export { months }