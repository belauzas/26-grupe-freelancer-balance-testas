function summary (selector, data){
    const DOM = document.querySelector(selector);
      
    const minInc = data.sort((a, b) => a.income - b.income);
    const minIncDOM = document.getElementById('minIncome');
    minIncDOM.innerText = minInc[3].month;

    
    const maxInc = data.sort((a, b) => b.income - a.income);
    const maxIncDOM = document.getElementById('maxIncome');
    maxIncDOM.innerText = maxInc[0].month;

    const minExp = data.sort((a, b) => a.expense - b.expense);
    const minExpDOM = document.getElementById('minExpense');
    minExpDOM.innerText = minExp[2].month;

    const maxExp = data.sort((a, b) => b.expense - a.expense);
    const maxExpDOM = document.getElementById('maxExpense');
    maxExpDOM.innerText = maxExp[0].month;

   
    }


export { summary }