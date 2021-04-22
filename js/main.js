function formatMoney(money) {
    if (typeof money !== 'number') {
        return '-';
    }
    return money + ' Eur';
}

function sortData(list) {
    let sortedList = [];
    sortedList = list.sort((a, b) => a.month - b.month);
    console.log(sortedList)
    return sortedList;
}

function renderTable(monthNames, accountList) {
    let HTML = '';
        balance = 0;
        income = 0;
        expense = 0;
        minIncomeMonthIndex = 0,
        minIncomeMonthValue = Infinity,
        maxIncomeMonthIndex = 0,
        maxIncomeMonthValue = -Infinity,
        minExpenseMonthIndex = 0,
        minExpenseMonthValue = Infinity;
        maxExpenseMonthIndex = 0,
        maxExpenseMonthValue = -Infinity;

    accountList = sortData(accountList);

    for(let i = 0; i < accountList.length; i++) {
        const item = accountList[i];
        income += item.income ? item.income : 0;
        expense += item.expense ? item.expense : 0;
        balance = income - expense;

        if (item.income && item.income < minIncomeMonthValue) {
            minIncomeMonthValue = item.income;
            minIncomeMonthIndex = i;
        }

        if (item.income && item.income > maxIncomeMonthValue) {
            maxIncomeMonthValue = item.income;
            maxIncomeMonthIndex = i;
        }

        if (item.expense && item.expense < minExpenseMonthValue) {
            minExpenseMonthValue = item.expense;
            minExpenseMonthIndex = i;
        }

        if (item.expense && item.expense > maxExpenseMonthValue) {
            maxExpenseMonthValue = item.expense;
            maxExpenseMonthIndex = i;
        }

        HTML += `<div class="table-row">
                    <div class="cell">${i + 1}</div>
                    <div class="cell">${monthNames[item.month - 1]}</div>
                    <div class="cell">${formatMoney(item.income)}</div>
                    <div class="cell">${formatMoney(item.expense)}</div>
                    <div class="cell">${formatMoney(balance)}</div>
                </div>;`
    }

    const tableContentDOM = document.querySelector('.table-content');
    const footerIncomeDOM = document.querySelector('.table-footer > .cell:nth-of-type(3)');
    const footerExpenseDOM = document.querySelector('.table-footer > .cell:nth-of-type(4)');
    const footerBalanceDOM = document.querySelector('.table-footer > .cell:nth-of-type(5)');
    const minIncomeDOM = document.querySelector('#minIncome');
    const maxIncomeDOM = document.querySelector('#maxIncome');
    const minExpenseDOM = document.querySelector('#minExpense');
    const maxExpenseDOM = document.querySelector('#maxExpense');

    tableContentDOM.innerHTML = HTML;

    footerIncomeDOM.innerText = formatMoney(income);
    footerExpenseDOM.innerText = formatMoney(expense);
    footerBalanceDOM.innerText = formatMoney(balance);
    
    minIncomeDOM.innerText = monthNames[minIncomeMonthIndex];
    maxIncomeDOM.innerText = monthNames[maxIncomeMonthIndex];
    minExpenseDOM.innerText = monthNames[minExpenseMonthIndex];
    maxExpenseDOM.innerText = monthNames[maxExpenseMonthIndex];
}

renderTable(months, account);