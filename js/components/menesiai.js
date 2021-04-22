
const menesiai = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Geguze', 'Birzelis', 'Liepa', 'Rugpjutis', 'Rugsejis', 'Spalis', 'Lapkritis', 'Gruodis']


function month(selector, account) {
    
    const DOM = document.querySelector(selector);

    let HTML = '';
    
    account.sort((a, b) => ( a.month > b.month ) ? 1 : -1);
    for (let i = 0; i < account.length; i++) {
        const mo = account[i];

        if (mo.income === undefined){
            mo.income = 0;
        }

        if (mo.expense === undefined) {
            mo.expense = 0;
        }

        const balance = mo.income - mo.expense;

                HTML += `<div class="table-row">
                            <div class="cell">${i+1}</div>
                                 <div class="cell">${menesiai[i]}</div>
                                 <div class="cell">${mo.income}</div>
                            <div class="cell">${mo.expense}</div>
                            <div class="cell">${balance}</div>
                        </div>`;
    }

    DOM.innerHTML += HTML;
}


export { month } 
