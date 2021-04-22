
function month(selector, account) {
    
    const DOM = document.querySelector(selector);

    const menesiai = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Geguze', 'Birzelis', 'Liepa', 'Rugpjutis', 'Rugsejis', 'Spalis', 'Lapkritis', 'Gruodis']

    let HTML = '';
    

    for (let i = 0; i < account.length; i++) {
        const mo = account[i];
                HTML += `<div class="table-row">
                            <div class="cell">${i+1}</div>
                                 <div class="cell">${mo.month}</div>
                                 <div class="cell">${mo.income}</div>
                            <div class="cell">${mo.expense}</div>
                            <div class="cell"></div>
                        </div>`;
    }

    DOM.innerHTML += HTML;

}

export { month } 
