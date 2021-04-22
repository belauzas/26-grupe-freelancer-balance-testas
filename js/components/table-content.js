
function table(selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = '';
    let num =0;
    let sumIncome = 0;
    let sumExpense = 0;
    let sumBalance = 0;
    
    const config =  ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Geguze', 'Birzelis','Liepa','Rugpjutis', 'Rugsejis','Spalis', 'Lapkritis', 'Gruodis'];
    let sortedDataByMonth = data.sort((a,b)=>a.month -b.month);

    for(let i = 0;i<data.length;i++){
        num++
        const row = data[i]
        row.month = config[i]

        let income = row.income === undefined ? 0 : row.income
        const expense = row.expense === undefined ? 0 :row.expense
        const balance = income - expense;
    HTML += `
    <div class="table-row">
          <div class="cell">${num}</div>
          <div class="cell">${row.month}</div>
          <div class="cell">${income}</div>
          <div class="cell">${expense}</div>
          <div class="cell">${balance}</div>
     </div>`      
        
     sumIncome += income
     sumExpense += expense
     sumBalance += balance
     
     
    }
    DOM.innerHTML = HTML;

    const incomeDOM = document.getElementById('income')
   incomeDOM.innerText = `${sumIncome} Eur`

   const expenseDOM = document.getElementById('expense')
   expenseDOM.innerText = `${sumExpense} Eur`

   const balanceDOM = document.getElementById('balance')
   balanceDOM.innerText = `${sumBalance} Eur`


    
}


export{ table }

