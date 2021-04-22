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
    let sumIncomes = 0;
    let sumExpenses = 0;
    let sumBalanses = 0;


    const sortedDataByMonth = data.sort((a, b) => a.month > b.month ? 1 : -1);
    let minIncome = Infinity;
    let minIncomeMonth = '';
    let maxIncome = - Infinity;
    let maxIncomeMonth = '';
    let minExpense = Infinity;
    let minExpenseMonth = '';
    let maxExpense = -Infinity;
    let maxExpenseMonth = '';



    for (let i = 0; i < data.length; i++) {
        const row = sortedDataByMonth[i];
        const month = months[row.month - 1];
        const income = row.income === undefined ? 0 : row.income
        const expense = row.expense === undefined ? 0 : row.expense
        const balance = income - expense;

        HTML += `<div class="table-row">
                    <div class="cell">${i + 1}</div>
                    <div class="cell">${month}</div>
                    <div class="cell">${income}</div>
                    <div class="cell">${expense}</div>
                    <div class="cell">${balance}</div>
                </div>`

        sumIncomes += income;
        sumExpenses += expense;
        sumBalanses += balance;

        if (row.income !== undefined) {
            if (row.income < minIncome) {
                minIncome = row.income;
                minIncomeMonth = month;
            }
        }
        if (row.income !== undefined) {
            if (row.income > maxIncome) {
                maxIncome = row.income;
                maxIncomeMonth = month;
            }
        }
        if (row.expense !== undefined) {
            if (row.expense < minExpense) {
                minExpense = row.expense;
                minExpenseMonth = month;
            }
        }

        if (row.expense !== undefined) {
            if (row.expense > maxExpense) {
                maxExpense = row.expense;
                maxExpenseMonth = month;
            }
        }


    }
    DOM.innerHTML += HTML;

    const incomeDOM = document.getElementById('income');
    incomeDOM.innerText = `${sumIncomes} Eur`;
    const expenseDOM = document.getElementById('expense');
    expenseDOM.innerText = `${sumExpenses} Eur`;
    const balanceDOM = document.getElementById('balance');
    balanceDOM.innerText = `${sumBalanses} Eur`;



    const minIncomeDOM = document.getElementById('minIncome');
    minIncomeDOM.innerText = minIncomeMonth;

    const maxIncomeDOM = document.getElementById('maxIncome');
    maxIncomeDOM.innerText = maxIncomeMonth;

    const minExpenseDOM = document.getElementById('minExpense');
    minExpenseDOM.innerText = minExpenseMonth;

    const maxExpenseDOM = document.getElementById('maxExpense');
    maxExpenseDOM.innerText = maxExpenseMonth;


}




export { table }