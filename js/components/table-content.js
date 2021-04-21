
function table(selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = '';
    let num =0;
    
    const config =  ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Geguze', 'Birzelis','Liepa','Rugpjutis', 'Rugsejis','Spalis', 'Lapkritis', 'Gruodis'];
    for(let i = 0;i<data.length;i++){
        num++
        const row = data[i]
        row.month = config[i]

        row.income = row.income === undefined ? 0 : row.income
        row.expense = row.expense === undefined ? 0 :row.expense
        const balance = row.income - row.expense;
    HTML += `
    <div class="table-row">
          <div class="cell">${num}</div>
          <div class="cell">${row.month}</div>
          <div class="cell">${row.income}</div>
          <div class="cell">${row.expense}</div>
          <div class="cell">${balance}</div>
     </div>`
    }
    DOM.innerHTML = HTML;
}

export{ table }

