
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

        const income = row.income === undefined ? 0 : row.income
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

function metuSuvestine(selector, data) {
    const DOM = document.querySelector(selector);
    const config =  ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Geguze', 'Birzelis','Liepa','Rugpjutis', 'Rugsejis','Spalis', 'Lapkritis', 'Gruodis'];
    let sortedDataByMonth = data.sort((a,b)=>a.month -b.month);

    const minIncome = data.sort((a,b)=>a.income - b.income);
    const minIncomeDOM = document.getElementById('minIncome');
    minIncomeDOM.innerText = minIncome[0].month

    const maxIncome = data.sort((a,b)=>b.income - a.income);
    const maxIncomeDOM = document.getElementById('maxIncome');
    maxIncomeDOM.innerText = minIncome[0].month

    const minExpense = data.sort((a,b)=>a.expense - b.expense);
    const minExpenseDOM = document.getElementById('minExpense');
    minExpenseDOM.innerText = minExpense[0].month

    const maxExpense = data.sort((a,b)=>b.expense - a.expense);
    const maxExpenseDOM = document.getElementById('maxExpense');
    maxExpenseDOM.innerText = maxExpense[0].month
}


export { metuSuvestine}
export{ table }

