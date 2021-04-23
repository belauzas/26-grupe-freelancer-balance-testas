function summary (selector, data){
    const DOM = document.querySelector(selector);

    const sortData = data => data.sort((a, b) => a.month - b.month);
      
    const minInc = data.filter(a => a.income > 0).sort((a, b) => a.income - b.income);
    console.log(minInc);
    const minIncDOM = document.getElementById('minIncome');
    minIncDOM.innerText = minInc[0].month;

    
    const maxInc = data.sort((a, b) => b.income - a.income);
    const maxIncDOM = document.getElementById('maxIncome');
    maxIncDOM.innerText = maxInc[0].month;

    const minExp = data.filter(a => a.expense > 0).sort((a, b) => a.expense - b.expense);
    const minExpDOM = document.getElementById('minExpense');
    minExpDOM.innerText = minExp[0].month;

    const maxExp = data.sort((a, b) => b.expense - a.expense);
    const maxExpDOM = document.getElementById('maxExpense');
    maxExpDOM.innerText = maxExp[0].month;

   
    }


export { summary }