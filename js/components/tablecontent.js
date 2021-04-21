
function tableContent (selector, data) {
    const DOM = document.querySelector(selector)
    let HTML ='';
    const months = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Geguze', 'Birzelis', 'Liepa', 'Rugpjutis', 'Rugsejis', 'Spalis', 'Lapkritis', 'Gruodis'];
    data.sort((a, b) => (a.month > b.month) ? 1 : -1);

    for (let i = 0; i < data.length; i++) {
    const aData = data[i];
    console.log(aData.month);
    aData.month = months[i];
    if (aData.income === undefined) {
        aData.income = 0;
    }
    if (aData.expense === undefined) {
        aData.expense = 0;
    }

    const balance = aData.income - aData.expense;

    HTML += `<div class="table-row">
    <div class="cell">${i+1}</div>
    <div class="cell">${aData.month}</div>
    <div class="cell">${aData.income}</div>
    <div class="cell">${aData.expense}</div>
    <div class="cell">${balance}</div>
</div>`
}

DOM.innerHTML += HTML;


}

export { tableContent }