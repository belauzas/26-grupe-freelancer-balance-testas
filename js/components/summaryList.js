function summaryList (selector, data) {
    const DOM = document.querySelector(selector);  


        const minIncome =  data.sort((a, b) => (a.income > b.income) ? 1 : -1);
        const minIncomeDOM = document.getElementById('minIncome');
        let a = minIncome[0].month;
       
    for (let i = 0; i < data.length; i++) {        
        if (data[i].income > 0 && data[i-1].income === 0)  {
        a = minIncomeDOM.innerText =' ' + minIncome[i].month;
            }

    }            
        const maxIncome =  data.sort((a, b) => (a.income < b.income) ? 1 : -1);
        document.getElementById('maxIncome').innerText = maxIncome[0].month;
    
        const minExpense =  data.sort((a, b) => (a.expense > b.expense) ? 1 : -1);
        const minExpenseDOM =  document.getElementById('minExpense');
        let b = minExpense[0].month;

        for (let i = 0; i < data.length; i++) {        
            if (data[i].expense > 0 && data[i-1].expense === 0)  {
            b = minExpenseDOM.innerText =' ' + minExpense[i].month;
                }
    
        }            
    
        const maxExpense =  data.sort((a, b) => (a.expense < b.expense) ? 1 : -1);
        document.getElementById('maxExpense').innerText = maxExpense[0].month;
    
}

export { summaryList }